# Food Spirit

## Public demo security

Avatar playback uses a publishable Connect key. A separate secret key stays on the server. Create
dedicated Food Spirit keys in Perxona Console, restricting the publishable key to
the Food Spirit domain. Do not reuse or revoke portfolio credentials.

Public API access is restricted to catalog reads, the publishable key, and chat
with the two explicitly configured Food Spirit bots. Token issuance, chatbot
management, knowledge changes, arbitrary bots, and generic LLM proxies are blocked
in every environment. Legacy public-demo flags cannot bypass this policy.

Historical password-configuration scripts are obsolete and must not be used.
Use the Connect key configuration described below. Public chat still consumes
provider quota; the route allowlist is not a distributed rate limiter.

Run `npm test` to verify the access boundary. These tests do not establish live
provider behavior, revoke old tokens, or prove previously issued sessions expired.

Food Spirit is the hackathon working project for an expressive food companion powered by Perxona Connect.

The intended demo flow is:

1. Take or upload a food photo.
2. Identify the food and estimate its condition and useful-by date.
3. Cast the food as an expressive avatar with a personality, voice, and motion style.
4. Let the avatar explain what it is, when to use it, and whether to eat, freeze, share, or compost it.
5. Auto-save the awakened result in a lightweight device inventory.

## Working MVP

With the local server running, open:

`http://localhost:8083/food-spirit/`

The separate upload-ready HTML submission storyboard is
[`public/Food-Spirit-Submission-Storyboard.html`](public/Food-Spirit-Submission-Storyboard.html).
Its hosted presentation URL is
`https://food-spirit.vercel.app/Food-Spirit-Submission-Storyboard.html`.
Download the self-contained offline file from
`https://food-spirit.vercel.app/download/food-spirit-storyboard`.

The MVP now includes:

- smartphone camera and photo upload with automatic recognition—no separate
  discover step
- full-width MobileNet V2 (`alpha: 1.0`) preloaded behind the welcome screen,
  with candidates normalized by a dedicated Perxona Food Vision Refiner and a
  manual correction field
- freshness and use-by estimation based on food, condition, and storage
- smart food-to-avatar casting across the account's three non-human performers:
  EmojiBoy, Mushroom, and Meeks
- a first-person Food Spirit performance with replay
- multi-turn text chat backed by a dedicated Perxona chatbot that receives the
  device's saved pantry and can combine real saved ingredients into rescue meals
- tap-to-talk browser speech recognition: tap **Talk**, speak naturally, then
  tap **Done** to send, with automatic recognition-session recovery and text fallback
- a separate full-screen landing welcome performed by Female VRM 09
- a premium iPhone Pro-style desktop stage plus a maximized mobile avatar and
  swipeable conversation sheet
- an automatically saved, browser-only pantry with compressed photo thumbnails
- a clear food-safety disclaimer and explicit compost/share/freeze/use-soon guidance

The first tap on **Awaken this Food Spirit** also unlocks browser audio, so keep that
button as the main demo action. Photo-to-native-3D-avatar conversion remains a
stretch goal; the reliable demo casts each recognized food through an expressive
Perxona performer.

## Current casting logic

Food Spirit loads the live asset catalogs from the connected Perxona account.
Bright fruit and playful prepared foods cast EmojiBoy; earthy greens, broccoli,
and mushrooms cast Mushroom; apples, bread, dairy, eggs, and unknown foods cast
Meeks. Female VRM 09 is reserved for the landing-page guide. The chosen
performer's compatible motion catalog is loaded before the first performance,
with a no-custom-motion fallback if the catalog is temporarily unavailable.

The recognized food changes the performer, spirit identity, voice preference,
dialogue, freshness behavior, and motion. It does not generate a new 3D model
from the photo. Only one food performer is active at a time for reliability.

## Foundation

This project is copied from the official Perxona Express sample at upstream commit `83a9859ffbc849e3d36f6f4039bfc467fbc45e99`.
The untouched upstream repository is kept next to this project under `../vendor/perxona-connect-kit/`.

The sample currently provides:

- Perxona service-account authentication through the Express backend
- avatar, scene, voice, and avatar-motion catalogs
- the `<sv-presenter>` Web Component
- text-to-speech, lip-sync, expression, and motion playback
- external-LLM and Perxona Chatbot examples
- automatic Connect-token refresh handling

The original sample documentation is preserved in
[`UPSTREAM_CONNECT_KIT_README.md`](UPSTREAM_CONNECT_KIT_README.md).

## Local setup

Requirements: Node 22 or newer and a Perxona Connect account.

1. Copy `.env.example` to `.env`. Set separate `PERXONA_CONNECT_SECRET_KEY` and `PERXONA_CONNECT_PUBLISHABLE_KEY`, plus both Food Spirit bot IDs.
2. Keep `PERXONA_API_BASE_URL=https://console.perxona.ai/asia` unless the hackathon team gives a different region.
3. Install dependencies with `npm install` or `npm ci`.
4. Start the project with `npm run dev`.
5. Open `http://localhost:8083`.

Never commit `.env`; it is intentionally ignored by Git.
For local avatar playback, use a separate development publishable key whose
domain restrictions permit your local origin. Do not broaden a production key.

## Vercel deployment

The project includes `vercel.json` so the public root opens Food Spirit and
Vercel recognizes the Express backend. Configure these values as private Vercel
environment variables before deploying:

- `PERXONA_API_BASE_URL`
- `PERXONA_CONNECT_SECRET_KEY` (server-only; use Vercel's Secret type)
- `PERXONA_CONNECT_PUBLISHABLE_KEY` (domain-restricted browser presentation key)
- `PRESENTER_URL` (optional; the production Asia CDN is the default)
- `FOOD_SPIRIT_CHATBOT_ID` (required; the Food Spirit conversation bot)
- `FOOD_VISION_REFINER_ID` (required; normalizes on-device classifier candidates)

Do not paste secret values into source files or browser variables. The browser
receives only the publishable key from `/api/connect-key`. Password login and
the old `/api/connect-token` endpoint are not available to visitors.

The same API allowlist applies locally and on Vercel: catalog reads, configuration,
publishable key delivery, and chat with the two configured bots. Administrative
and arbitrary-bot requests return 403, regardless of legacy demo flags. Archived
starter demos are redirected to Food Spirit on Vercel; their old token flows
are not supported. Run `npm test` and `npm run check` before deploying.

## Preparation notes

See [`docs/HACKATHON_PREPARATION.md`](docs/HACKATHON_PREPARATION.md) for the scoped build plan and mentor questions.

The concise pitch, two-minute demo script, and judge Q&A are in
[`docs/JUDGE_SUBMISSION.md`](docs/JUDGE_SUBMISSION.md).

