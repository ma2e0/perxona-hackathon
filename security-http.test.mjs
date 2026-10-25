import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import net from 'node:net';
import http from 'node:http';

test('HTTP boundary denies administrative operations before upstream access', async () => {
  const probe = net.createServer();
  probe.listen(0, '127.0.0.1');
  await once(probe, 'listening');
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  let calls = 0;
  const upstream = http.createServer((req, res) => {
    if (req.url !== '/ready') {
      calls++;
      assert.equal(req.headers['x-connect-key'], 'private-test');
    }
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify({ items: [], reply_text: 'Test response' }));
  });
  upstream.listen(0, '127.0.0.1');
  await once(upstream, 'listening');
  const child = spawn(process.execPath, ['server.mjs'], {
    cwd: import.meta.dirname,
    env: { ...process.env, PORT: String(port), USE_MOCK: 'false',
      PERXONA_API_BASE_URL: `http://127.0.0.1:${upstream.address().port}`,
      FOOD_SPIRIT_CHATBOT_ID: 'food-test', FOOD_VISION_REFINER_ID: 'vision-test',
      PERXONA_CONNECT_PUBLISHABLE_KEY: 'public-test', PERXONA_CONNECT_SECRET_KEY: 'private-test',
      PRESENTER_URL: `http://127.0.0.1:${port}/missing-presenter`,
      PERXONA_PUBLIC_DEMO_ENABLED: 'true' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const closed = once(child, 'close');
  try {
    let ready = false;
    for (let i = 0; i < 100; i++) {
      if (child.exitCode !== null) throw new Error('Server exited before readiness');
      try {
        const r = await fetch(`http://127.0.0.1:${port}/api/config`);
        if (r.ok) { ready = true; break; }
      } catch {}
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    assert.ok(ready, 'server ready');
    const base = `http://127.0.0.1:${port}/api`;
    const key = await fetch(`${base}/connect-key`);
    assert.equal(key.headers.get('cache-control'), 'no-store');
    assert.deepEqual(await key.json(), { connect_key: 'public-test' });
    for (const [method, path] of [
      ['GET', '/connect-token'], ['GET', '/chatbots'],
      ['POST', '/chatbots'], ['PATCH', '/chatbots/food-test'],
      ['DELETE', '/chatbots/food-test'], ['POST', '/chatbots/food-test/knowledge'],
      ['POST', '/chatbots/unknown/chat'], ['POST', '/chat'], ['POST', '/demo-script'],
    ]) {
      const r = await fetch(`${base}${path}`, { method });
      assert.equal(r.status, 403, `${method} ${path}`);
      assert.equal((await r.text()).includes('private-test'), false);
    }
    assert.equal(calls, 0, 'blocked requests never reach provider');
    assert.equal((await fetch(`${base}/avatars`)).status, 200);
    for (const id of ['food-test', 'vision-test']) {
      const r = await fetch(`${base}/chatbots/${id}/chat`, {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', parts: [{ type: 'text', text: 'Hello' }] }] }),
      });
      assert.equal(r.status, 200, 'allowed chat reaches test provider');
    }
    assert.equal(calls, 3);
  } finally {
    child.kill();
    await closed;
    await new Promise(resolve => upstream.close(resolve));
  }
});

