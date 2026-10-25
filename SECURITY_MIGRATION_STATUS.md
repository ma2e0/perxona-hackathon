# Local migration status

26 October 2026. Production security migration deployed; visual acceptance pending.

The owner requested preserving live avatar playback while removing administrative
access and reusable account bearer-token exposure. The earlier hosted shutdown
proposal is superseded by the publishable/secret Connect key migration.

Reference checked: https://github.com/XRSPACE-Inc/perxona-connect-kit/blob/main/samples/express/README.md

Current local changes:
- Presenter calls initializeWithConnectKey, not legacy initialize with a bearer token.
- Browser key endpoint returns only the configured publishable key.
- Server upstream requests use X-Connect-Key with the secret key.
- API middleware allows catalog reads and POST chat for the two configured bots only.
- Legacy token, arbitrary bot, management, knowledge and generic LLM routes are denied.
- Upstream error payloads are not returned to visitors.

Evidence: five tests pass, including a real local HTTP server with a synthetic
upstream. Administrative requests do not reach that upstream; allowed chat does.
JavaScript syntax checks pass. Compatible dependency patches clear all four
reported npm advisories (zero reported after the update).
This is not provider integration or live browser acceptance. Legacy sample docs
remain to be cleaned before release. Unused token management was removed. No rate
limiter has been added; allowlisted public chat remains publicly callable.

Production evidence:
- Owner saved the replacement server key directly in Vercel as a sensitive
  production variable; its value was not retrieved. Publishable key remains
  restricted to food-spirit.vercel.app. Both bot IDs are explicit.
- Project was paused. Owner explicitly authorized resuming Food Spirit only.
- Deployment dpl_5RMdAfhq5o8KXtYsPocuGfz5uAGR reached READY on the stable alias.
- Catalog, config and publishable-key endpoints return 200; legacy token and
  chatbot-list endpoints return 403. Both configured bots return 200/succeeded
  with nonempty replies using the frontend's message-parts schema.
- Official presenter SDK contains initializeWithConnectKey; provider accepts
  the publishable key's catalog request with the Food Spirit origin (200).
- Built-in sample banana is AI-refined in the browser. Welcome and sample 3D
  avatar loading times out in Codex's in-app browser. Visual/audio playback is
  not accepted and needs further browser/provider investigation.
- Previous deployment: dpl_HJKn8nyytkyJqBXvEnhgzWG6PXKT, commit e69d9fc.

Remaining: verify visual/audio playback, assess existing bearer-session expiry
and unused dedicated keys without touching portfolio credentials. No existing
credentials or tokens have been revoked. Preview secret is not configured;
preview deployments intentionally cannot start without separate configuration.

