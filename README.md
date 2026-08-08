# Food Spirit

Food Spirit is the hackathon working project for an expressive food companion powered by Perxona Connect.

The intended demo flow is:

1. Take or upload a food photo.
2. Identify the food and estimate its condition and useful-by date.
3. Cast the food as an expressive avatar with a personality, voice, and motion style.
4. Let the avatar explain what it is, when to use it, and whether to eat, freeze, share, or compost it.
5. Save the item in a lightweight food inventory.

## Working MVP

With the local server running, open:

`http://localhost:8083/food-spirit/`

The MVP now includes:

- smartphone camera and photo upload
- on-device MobileNet food recognition with a manual correction field
- freshness and use-by estimation based on food, condition, and storage
- live Perxona avatar, scene, voice, emotion, and compatible motion selection
- a first-person Food Spirit performance with replay
- a local, browser-only pantry inventory with compressed photo thumbnails
- a clear food-safety disclaimer and explicit compost/share/freeze/use-soon guidance

The first tap on **Meet my Food Spirit** also unlocks browser audio, so keep that
button as the main demo action. Photo-to-native-3D-avatar conversion remains a
stretch goal; the reliable demo casts each recognized food through an expressive
Perxona performer.

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

1. Open `.env` and fill in `PERXONA_CONNECT_EMAIL` and `PERXONA_CONNECT_PASSWORD`.
2. Keep `PERXONA_API_BASE_URL=https://console.perxona.ai/asia` unless the hackathon team gives a different region.
3. Install dependencies with `npm install` or `npm ci`.
4. Start the project with `npm run dev`.
5. Open `http://localhost:8083`.

Never commit `.env`; it is intentionally ignored by Git.

## Vercel deployment

The project includes `vercel.json` so the public root opens Food Spirit and
Vercel recognizes the Express backend. Configure these values as private Vercel
environment variables before deploying:

- `PERXONA_API_BASE_URL`
- `PERXONA_CONNECT_EMAIL`
- `PERXONA_CONNECT_PASSWORD`
- `PRESENTER_URL` (optional; the production Asia CDN is the default)
- `PERXONA_PUBLIC_DEMO_ENABLED` (optional; defaults to `false`)

Do not paste credential values into source files or expose them through public
browser variables. The public demo uses one shared Perxona Connect identity, as
intended by the official hackathon sample.

Credential-backed API routes are automatically locked on Vercel production
aliases. Preview deployments remain available for private hackathon judging.
Set `PERXONA_PUBLIC_DEMO_ENABLED=true` only for a short, monitored public demo
window after confirming the account's usage limits.

## Preparation notes

See [`docs/HACKATHON_PREPARATION.md`](docs/HACKATHON_PREPARATION.md) for the scoped build plan and mentor questions.

The concise pitch, two-minute demo script, and judge Q&A are in
[`docs/JUDGE_SUBMISSION.md`](docs/JUDGE_SUBMISSION.md).
