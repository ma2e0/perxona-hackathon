# Hackathon build log

Food Spirit was implemented during the Perxona Tokyo Hackathon on August 8,
2026, using the organizer-provided Perxona Connect Kit as its foundation.

## Verified checkpoint

- Perxona account authentication and live asset catalogs reachable
- Presenter avatar rendered successfully in desktop Chrome
- Food Spirit route served locally with a mobile photo flow
- Public-domain banana sample recognized on-device as Bana Nori
- Condition and storage choices produced an estimated use-by date
- Device-only pantry item remained present after a page reload
- Presenter timeout now keeps the transcript and save flow usable, with a clear
  retry-in-Chrome message
- JavaScript syntax, Vercel configuration, local routes, and credential leak
  audit passed before the first commit
- Protected Vercel preview recognized the sample banana at 96%, produced the
  four-day estimate, and retained the saved pantry item after reload
- Vercel production alias returns 503 for shared Perxona token issuance; the
  revocable judge preview keeps the full integration enabled
- Hosted Perxona presenter was aligned with the account's Asia API region
- Dedicated Perxona chatbot returned a food-state-aware banana rescue answer
- Text conversation, push-to-talk recognition, spoken avatar replies, and a
  deterministic timeout fallback were added to the Food Spirit stage
