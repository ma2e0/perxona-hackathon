# Food Spirit — Judge Submission

## One-line pitch

Every food gets a digital life — and speaks before it is wasted.

## What it does

Food Spirit turns a smartphone food photo into an expressive character. The
photo is recognized on the user's device, the user confirms its condition and
storage, and the app estimates a useful-by date. Perxona then gives that food a
voice, expression, scene, and motion so the reminder feels like a relationship,
not another inventory notification.

The item can be saved privately in the browser. No account or cloud pantry is
required, and the estimate is clearly presented as planning guidance rather
than a food-safety verdict.

## Why Perxona is essential

Without Perxona, this is a conventional food scanner. Perxona creates the
emotional moment: the food introduces itself in first person, performs its
condition, and asks the user to use, freeze, share, or compost it before it is
forgotten. The avatar is the behavioral interface, not a decorative result.

## Verified MVP

- smartphone camera and photo-library input
- automatic on-device MobileNet recognition, Perxona AI label refinement, and
  manual correction
- condition- and storage-aware useful-by estimate
- live Perxona avatar, scene, voice, expression, and compatible motion
- first-person Food Spirit performance and replay
- multi-turn Perxona chatbot conversation by text or push-to-talk voice, using
  the foods actually saved in the device pantry
- browser-only pantry with photo thumbnail and removal control
- graceful transcript and save fallback if the 3D engine is unavailable

## Two-minute demo script

### 0:00–0:15 — Hook

“Most food waste does not happen because people do not care. It happens because
food becomes invisible. Food Spirit gives it a voice before it is forgotten.”

### 0:15–0:40 — Discover

Take a food photo or select **Try a sample banana**. Recognition starts
automatically and reveals the spirit without another button.

“The photo stays on this device. Private on-device vision creates text
candidates, then Perxona AI normalizes those candidate labels. The result stays
editable, so the human remains in control.”

### 0:40–1:00 — Make time visible

Show the condition, storage, and **Use within 4 days** estimate.

“Instead of pretending a photo can prove food safety, we combine the user's
observation with storage context and clearly label this as planning guidance.”

### 1:00–1:40 — Emotional reveal and conversation

Select **Awaken this Food Spirit**.

“This is Bana Nori. Perxona turns a database row into a living character with a
voice, facial expression, lip-sync, and motion. The reminder is no longer ‘item
expires in four days’; it is a character asking not to be forgotten.”

Tap **Talk**, ask “What can I make with you tonight?”, then tap **Done**.

“The microphone becomes text, the Perxona chatbot receives the banana's current
condition, use window, and the foods actually saved in the pantry, and the avatar
performs its contextual answer. Typed questions remain available if microphone
recognition is unavailable.”

### 1:40–1:55 — Private memory

Select **Save on this device**, then reload and show that the pantry
item remains.

“The pantry stays on this device. The user can remove it at any time.”

### 1:55–2:00 — Finish

“Today one food speaks. Next, the Fridge Council lets several Food Spirits
debate which meal can save the most food tonight. Food Spirit turns expiration
management into empathy — powered by Perxona.”

## Judge Q&A

**Is the photographed object converted into a new 3D avatar?**  
Not in the reliable MVP. Perxona's public workflow accepts prepared VRM files;
it does not document instant photo-to-rigged-avatar generation. Food Spirit
casts each food through an existing expressive Perxona performer so expression,
voice, and motion remain reliable.

**Where does the food information come from?**  
The visual label comes from MobileNet running in the browser. The useful-by
estimate comes from transparent food, condition, and storage rules and can be
corrected by the user. It is not a food-safety diagnosis.

**Where is the pantry stored?**  
In browser local storage on the device. No server account is needed for the
prototype.

**What leaves the device during conversation?**
The photo remains local. The question or voice transcript, current food details,
and saved pantry labels, storage, condition, and use-by details are sent to
Perxona for the chatbot reply. Browser voice recognition may also use the
browser vendor's speech service. The full pantry record and photo thumbnails
remain in browser local storage.

**Can it support many food characters?**  
Yes. The app can map foods to different Perxona avatar, scene, voice, and motion
profiles while keeping one active presenter at a time for reliable performance.

## Links to provide in the submission form

- Source: https://github.com/ma2e0/perxona-hackathon
- Live demo: https://food-spirit.vercel.app

