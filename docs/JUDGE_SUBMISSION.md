# Food Spirit — Judge Submission

## One-line pitch

Every food gets a digital life — and speaks before it is wasted.

## What it does

Food Spirit turns a smartphone food photo into an expressive character. The
photo is recognized on the user's device, the user confirms its condition and
storage, and the app estimates a useful-by date. Perxona then gives that food a
voice, expression, scene, and motion so the reminder feels like a relationship,
not another inventory notification.

After its first hello, the item is saved automatically in the browser. No account
or cloud pantry is required, and the estimate is clearly presented as planning
guidance rather than a food-safety verdict.

## Why Perxona is essential

Without Perxona, this is a conventional food scanner. Perxona creates the
emotional moment: the food introduces itself in first person, performs its
condition, and asks the user to use, freeze, share, or compost it before it is
forgotten. The avatar is the behavioral interface, not a decorative result.

## Verified MVP

- smartphone camera and photo-library input
- automatic full-width MobileNet V2 recognition, Perxona AI label refinement,
  and manual correction
- condition- and storage-aware useful-by estimate
- intelligent casting across EmojiBoy, Mushroom, and Meeks based on food type
- separate Female VRM 09 welcome performance
- live Perxona avatar, scene, voice, expression, and compatible motion
- first-person Food Spirit performance and replay
- multi-turn Perxona chatbot conversation by text or push-to-talk voice, using
  the foods actually saved in the device pantry
- automatic browser-only pantry save after the first performance, with photo
  thumbnail and removal control
- graceful transcript fallback if the 3D engine is unavailable; automatic save
  follows the first successful performance

## Two-minute demo script

### 0:00–0:15 — Welcome and hook

Female VRM 09 automatically begins a short welcome when browser audio policy
allows it. If sound is paused, the first ordinary tap on the welcome screen
starts her voice; there is no dedicated intro button. The separate camera
experience opens when she finishes.

“The first avatar is our guide. Every avatar after this belongs to food that
might otherwise become invisible.”

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

Point to **Cast: EmojiBoy**. “Food Spirit did not fake a generated 3D model. It
intelligently cast the best expressive non-human performer available.”

Tap **Talk**, ask “What can I make with you tonight?”, then tap **Done**.

“The microphone becomes text, the Perxona chatbot receives the banana's current
condition, use window, and the foods actually saved in the pantry, and the avatar
performs its contextual answer. Typed questions remain available if microphone
recognition is unavailable.”

### 1:40–1:55 — Private memory

After the first hello finishes, show the automatic saved state, then reload and
show that the pantry item remains.

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
The visual candidates come from full-width MobileNet V2 (`alpha: 1.0`) running
in the browser, then a dedicated Perxona chatbot normalizes the candidate label.
The useful-by estimate comes from transparent food, condition, and storage rules
and can be corrected by the user. It is not a food-safety diagnosis.

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
Yes. Bright foods cast EmojiBoy, earthy greens cast Mushroom, and comfort,
dairy, and unknown foods cast Meeks. The landing guide uses Female VRM 09. The
app keeps one active food presenter at a time for reliable performance.

## Links to provide in the submission form

- Source: https://github.com/ma2e0/perxona-hackathon
- Live demo: https://food-spirit.vercel.app
- HTML storyboard: `public/Food-Spirit-Submission-Storyboard.html`
- Hosted storyboard: https://food-spirit.vercel.app/Food-Spirit-Submission-Storyboard.html

