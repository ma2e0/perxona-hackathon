import test from 'node:test';
import assert from 'node:assert/strict';
import { createApiBoundary } from './security-boundary.mjs';

function request(env, path, method = 'GET', overrides = {}) {
  let result = 'allowed';
  const res = { set() {}, status(code) { result = code; return this; }, json() {} };
  createApiBoundary(env)({ path, method, headers: { host: 'localhost:8083' }, socket: { remoteAddress: '127.0.0.1' }, ...overrides }, res, () => {});
  return result;
}
for (const mode of ['production', 'preview', 'development']) {
  test(`${mode}: legacy public-demo and local switches cannot expose shared credentials`, () => {
    const env = { VERCEL_ENV: mode, PERXONA_PUBLIC_DEMO_ENABLED: 'true', FOOD_SPIRIT_LOCAL_API_ENABLED: 'true' };
    for (const path of ['/connect-token','/chatbots','/chatbots/example','/chatbots/example/knowledge','/chatbots/example/chat','/chat','/food-chat']) {
      for (const method of ['GET','POST','PATCH','DELETE','OPTIONS']) assert.equal(request(env,path,method),403);
    }
    assert.equal(request(env,'/health'),'allowed');
    assert.equal(request(env,'/config'),'allowed');
    assert.equal(request(env,'/config','POST'),403);
  });
}
test('only configured bots can chat; administration remains blocked locally too', () => {
  assert.equal(request({},'/connect-token'),403);
  const env = { FOOD_SPIRIT_CHATBOT_ID:'food', FOOD_VISION_REFINER_ID:'vision' };
  assert.equal(request(env,'/connect-token'),403);
  assert.equal(request(env,'/connect-key'),'allowed');
  assert.equal(request(env,'/avatars'),'allowed');
  assert.equal(request(env,'/chatbots/food/chat','POST'),'allowed');
  assert.equal(request(env,'/chatbots/vision/chat','POST'),'allowed');
  assert.equal(request(env,'/chatbots/other/chat','POST'),403);
  assert.equal(request(env,'/chatbots/food','DELETE'),403);
  assert.equal(request(env,'/chatbots/food','PATCH'),403);
  assert.equal(request(env,'/chatbots/food/knowledge','POST'),403);
  assert.equal(request(env,'/connect-token','GET',{socket:{remoteAddress:'10.0.0.1'}}),403);
  assert.equal(request(env,'/connect-token','GET',{headers:{host:'evil.example'}}),403);
  assert.equal(request(env,'/connect-token','GET',{headers:{host:'localhost:8083',origin:'https://evil.example'}}),403);
});

