// Public callers get presentation reads and conversation, never administration.
export function createApiBoundary(env = process.env) {
  const bots = new Set([env.FOOD_SPIRIT_CHATBOT_ID, env.FOOD_VISION_REFINER_ID].filter(Boolean));
  return (req, res, next) => {
    res.set('Cache-Control', 'no-store');
    const catalog = /^\/(voices|avatars|scenes)(?:\/[A-Za-z0-9_-]+(?:\/motions)?)?$/.test(req.path);
    if (['GET', 'HEAD'].includes(req.method) && (['/health', '/config', '/connect-key'].includes(req.path) || catalog)) {
      return next();
    }
    const chat = /^\/chatbots\/([A-Za-z0-9_-]+)\/chat$/.exec(req.path);
    if (req.method === 'POST' && chat && bots.has(chat[1])) {
      return next();
    }
    return res.status(403).json({ error: 'This operation is not available in the public demo.' });
  };
}

