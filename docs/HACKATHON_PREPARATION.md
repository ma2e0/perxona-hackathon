# Hackathon Preparation

## Product direction

Build a reliable emotional experience first, then add true photo-to-VRM generation as a stretch goal.

### Core demo

1. User photographs or uploads a food item.
2. Vision analysis returns the food name, condition, confidence, estimated useful-by date, storage advice, and a short persona.
3. The app selects a compatible Perxona avatar, voice, scene, and motion set.
4. An LLM produces a concise first-person response plus emotion and intensity.
5. Perxona performs the response with speech, lip-sync, facial expression, and body motion.
6. The item and estimated date are saved in the browser for the demo.

### Stretch demo

1. A separate service turns the photo into a valid, expressive VRM 1.0 file.
2. The backend uploads it to `POST /api/v1/connect/assets/vrm/upload`.
3. The returned `avatar_id` becomes the active presenter target.

Perxona accepts a VRM file; it does not generate a rigged VRM directly from a photograph. The fallback must remain usable when the conversion step fails or takes too long.

## Perxona integration decisions

- Use one `<sv-presenter>` instance and reinitialize it when the selected food character changes.
- Store multiple `avatar_id` values, but show one active speaking avatar at a time.
- Load the selected avatar's motion catalog before generating performance text.
- Use catalog-grounded `[MOTION <id>:1]` tags only.
- Use `emotion` and `intensity` for the emotional tone.
- Handle `CONNECT_TOKEN_EXPIRED` and require a direct user click before the first audio playback.
- Keep Perxona credentials and LLM keys on the server.

## Questions for the Perxona team

1. Is `POST /api/v1/connect/assets/vrm/upload` enabled for our hackathon account?
2. What VRM humanoid bones, blendshapes, facial expressions, and lip-sync configuration are required?
3. Do uploaded VRMs automatically receive compatible motions, or do we need a specific skeleton?
4. How long does conversion normally take, and are uploads still removed after one month during beta?
5. Are multiple `<sv-presenter>` elements supported simultaneously, or should we keep one active presenter?

## Definition of a successful first checkpoint

- The official starter loads locally.
- Perxona credentials authenticate successfully.
- The catalog lists avatars, scenes, voices, and motions.
- One selected avatar reaches `Ready` and speaks an expressive line.
- The app can switch to another avatar and reinitialize cleanly.
