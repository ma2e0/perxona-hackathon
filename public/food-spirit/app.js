const FOOD_PROFILES = {
  banana: {
    label: "Banana",
    spirit: "Bana Nori",
    keywords: ["banana"],
    days: { counter: 3, fridge: 5, freezer: 30 },
    voice: "warm and cheerful",
    opening: "I am sunny, sweet, and ready to help.",
  },
  apple: {
    label: "Apple",
    spirit: "Appa Ringo",
    keywords: ["apple", "granny smith", "pippin"],
    days: { counter: 7, fridge: 28, freezer: 240 },
    voice: "crisp and clear",
    opening: "I keep my cool, but I still want to be remembered.",
  },
  citrus: {
    label: "Citrus fruit",
    spirit: "Mika Zest",
    keywords: ["orange", "lemon", "lime", "grapefruit", "clementine"],
    days: { counter: 7, fridge: 21, freezer: 90 },
    voice: "brightly casual",
    opening: "I bring the spark, the scent, and a little sunshine.",
  },
  berries: {
    label: "Berries",
    spirit: "Berry Hoshi",
    keywords: ["strawberry", "blueberry", "raspberry", "blackberry"],
    days: { counter: 1, fridge: 4, freezer: 180 },
    voice: "cute and kind",
    opening: "I am tiny, bright, and much more fragile than I look.",
  },
  tomato: {
    label: "Tomato",
    spirit: "Toma Maru",
    keywords: ["tomato"],
    days: { counter: 4, fridge: 6, freezer: 60 },
    voice: "warm and cheerful",
    opening: "I am at my best when I am colorful and full of flavor.",
  },
  leafy: {
    label: "Leafy greens",
    spirit: "Mido Leaf",
    keywords: ["lettuce", "spinach", "cabbage", "kale", "leaf"],
    days: { counter: 1, fridge: 5, freezer: 60 },
    voice: "steady and approachable",
    opening: "I stay brave and green, but not for very long.",
  },
  carrot: {
    label: "Carrot",
    spirit: "Karo Piko",
    keywords: ["carrot"],
    days: { counter: 2, fridge: 21, freezer: 240 },
    voice: "brightly casual",
    opening: "I am crunchy, practical, and ready for a plan.",
  },
  broccoli: {
    label: "Broccoli",
    spirit: "Brocco Mori",
    keywords: ["broccoli", "cauliflower"],
    days: { counter: 1, fridge: 5, freezer: 240 },
    voice: "calm and approachable",
    opening: "My little green crown wants a place in tonight's dinner.",
  },
  mushroom: {
    label: "Mushroom",
    spirit: "Mushu Kinoko",
    keywords: ["mushroom", "agaric"],
    days: { counter: 1, fridge: 5, freezer: 90 },
    voice: "warm and expressive",
    opening: "I am earthy, curious, and happiest when cooked soon.",
  },
  bread: {
    label: "Bread",
    spirit: "Pan Puku",
    keywords: ["bread", "bagel", "pretzel", "bun", "loaf"],
    days: { counter: 4, fridge: 7, freezer: 90 },
    voice: "calm and approachable",
    opening: "I am soft today, but time can make me a little dramatic.",
  },
  cheese: {
    label: "Cheese",
    spirit: "Chizu Mellow",
    keywords: ["cheese", "brie", "gouda", "cheddar"],
    days: { counter: 1, fridge: 10, freezer: 60 },
    voice: "polished and bright",
    opening: "I am rich, mellow, and worth storing with care.",
  },
  milk: {
    label: "Milk",
    spirit: "Miruku Mellow",
    keywords: ["milk", "yogurt", "cream"],
    days: { counter: 1, fridge: 5, freezer: 30 },
    voice: "steady and approachable",
    opening: "I like the cold, a clean cap, and a little attention.",
  },
  egg: {
    label: "Eggs",
    spirit: "Tama Piko",
    keywords: ["egg", "eggs"],
    days: { counter: 1, fridge: 21, freezer: 30 },
    voice: "brightly casual",
    opening: "I may look quiet, but I can become almost anything.",
  },
  meal: {
    label: "Prepared food",
    spirit: "Mogu Memo",
    keywords: [
      "pizza",
      "sandwich",
      "burrito",
      "hotdog",
      "cheeseburger",
      "plate",
      "meal",
      "leftover",
    ],
    days: { counter: 1, fridge: 3, freezer: 60 },
    voice: "warm and expressive",
    opening: "Someone already made me with care. Please give me an encore.",
  },
  food: {
    label: "Fresh food",
    spirit: "Mori",
    keywords: [],
    days: { counter: 1, fridge: 3, freezer: 30 },
    voice: "warm and cheerful",
    opening: "I may be a mystery, but I still deserve a plan.",
  },
};

const CONDITION_MULTIPLIERS = {
  fresh: 1,
  ripe: 0.7,
  "very-ripe": 0.34,
  leftover: 0.55,
};

const STORAGE_LABELS = {
  counter: "on the counter",
  fridge: "in the fridge",
  freezer: "in the freezer",
};

const FOOD_RESCUE_IDEAS = {
  banana: "a banana milk smoothie or warm banana toast",
  apple: "a quick apple-oat bowl or sliced apple toast",
  citrus: "a bright citrus dressing or fruit soda",
  berries: "a berry yogurt cup or freezer smoothie pack",
  tomato: "a fast tomato pasta or toasted tomato sandwich",
  leafy: "a green stir-fry or soup",
  carrot: "a carrot ribbon salad or quick curry",
  broccoli: "a garlic broccoli stir-fry or creamy soup",
  mushroom: "a mushroom toast or simple butter-soy stir-fry",
  bread: "crispy croutons, French toast, or breadcrumbs",
  cheese: "a grilled cheese toast or vegetable gratin",
  milk: "a smoothie, pancake batter, or creamy soup",
  egg: "a vegetable omelet or fried-rice rescue",
  meal: "a reheated lunch bowl with one fresh topping",
  food: "a simple soup, stir-fry, or freezer-ready meal",
};

const AVATAR_CASTS = {
  emojiboy: {
    label: "EmojiBoy",
    fragments: ["emojiboy_funday", "emojiboy"],
  },
  mushroom: {
    label: "Mushroom",
    fragments: ["xrspace_mushroom", "mushroom"],
  },
  meeks: {
    label: "Meeks",
    fragments: ["cc051_meeks", "meeks"],
  },
};

const PROFILE_AVATAR_CAST = {
  banana: "emojiboy",
  apple: "meeks",
  citrus: "emojiboy",
  berries: "emojiboy",
  tomato: "emojiboy",
  leafy: "mushroom",
  carrot: "emojiboy",
  broccoli: "mushroom",
  mushroom: "mushroom",
  bread: "meeks",
  cheese: "meeks",
  milk: "meeks",
  egg: "meeks",
  meal: "emojiboy",
  food: "meeks",
};

const WELCOME_SCRIPT =
  "Hi, welcome to Food Spirit. Take a photo of food, check what I discover, then tap Awaken. Your food will receive an expressive voice, a use-by plan, and a place in your living pantry. Let's meet the spirit in your kitchen.";

const els = {
  connectionPill: document.querySelector("#connection-pill"),
  connectionLabel: document.querySelector("#connection-label"),
  navExperience: document.querySelector("#nav-experience"),
  welcomeScreen: document.querySelector("#welcome"),
  welcomeStart: document.querySelector("#welcome-start"),
  welcomeSkip: document.querySelector("#welcome-skip"),
  welcomePresenter: document.querySelector("#welcome-presenter"),
  welcomePlaceholder: document.querySelector("#welcome-placeholder"),
  welcomeStatus: document.querySelector("#welcome-status"),
  experiencePage: document.querySelector("#experience-page"),
  fileInput: document.querySelector("#food-photo"),
  uploadZone: document.querySelector("#upload-zone"),
  photoPreview: document.querySelector("#photo-preview"),
  uploadPrompt: document.querySelector("#upload-prompt"),
  replacePhoto: document.querySelector("#replace-photo"),
  recognitionOverlay: document.querySelector("#recognition-overlay"),
  recognitionTitle: document.querySelector("#recognition-title"),
  recognitionDetail: document.querySelector("#recognition-detail"),
  aiRefinementPill: document.querySelector("#ai-refinement-pill"),
  analyzeButton: document.querySelector("#analyze-button"),
  sampleButton: document.querySelector("#sample-button"),
  analysisStatus: document.querySelector("#analysis-status"),
  analysisCard: document.querySelector("#analysis-card"),
  spiritName: document.querySelector("#spirit-name"),
  avatarCastBadge: document.querySelector("#avatar-cast-badge"),
  confidenceBadge: document.querySelector("#confidence-badge"),
  foodName: document.querySelector("#food-name"),
  condition: document.querySelector("#condition-select"),
  storage: document.querySelector("#storage-select"),
  useWindow: document.querySelector("#use-window"),
  useDate: document.querySelector("#use-date"),
  awakenButton: document.querySelector("#awaken-button"),
  presenter: document.querySelector("#presenter"),
  presenterStatus: document.querySelector("#presenter-status"),
  stagePlaceholder: document.querySelector("#stage-placeholder"),
  deviceSpiritName: document.querySelector("#device-spirit-name"),
  speechCard: document.querySelector("#speech-card"),
  chatSheetHandle: document.querySelector("#chat-sheet-handle"),
  chatSheetLabel: document.querySelector("#chat-sheet-label"),
  speechLabel: document.querySelector("#speech-label"),
  speechText: document.querySelector("#speech-text"),
  replayButton: document.querySelector("#replay-button"),
  autoSaveState: document.querySelector("#auto-save-state"),
  autoSaveLabel: document.querySelector("#auto-save-label"),
  conversationTitle: document.querySelector("#conversation-title"),
  conversationLog: document.querySelector("#conversation-log"),
  conversationForm: document.querySelector("#conversation-form"),
  conversationInput: document.querySelector("#conversation-input"),
  conversationSend: document.querySelector("#conversation-send"),
  conversationStatus: document.querySelector("#conversation-status"),
  voiceButton: document.querySelector("#voice-button"),
  voiceButtonLabel: document.querySelector("#voice-button-label"),
  promptButtons: document.querySelectorAll("[data-prompt]"),
  inventoryGrid: document.querySelector("#inventory-grid"),
  inventoryCount: document.querySelector("#inventory-count"),
  emptyInventory: document.querySelector("#empty-inventory"),
};

const state = {
  previewUrl: "",
  photoDataUrl: "",
  model: null,
  modelPromise: null,
  profileKey: "food",
  confidence: 0,
  estimatedDays: 3,
  estimatedDate: new Date(),
  presenterReady: false,
  presenterInitialized: false,
  presenterInitializationPromise: null,
  presenterTargetKey: null,
  avatarCatalog: [],
  avatarCastKey: "meeks",
  welcomeAvatar: null,
  welcomeVoice: null,
  welcomePresenterReady: false,
  welcomePresenterInitialized: false,
  welcomePresenterInitializationPromise: null,
  welcomeTransitionTimer: null,
  welcomeStarted: false,
  isRefreshingToken: false,
  performanceText: "",
  displayText: "",
  avatar: null,
  scene: null,
  voice: null,
  voices: [],
  motion: null,
  chatbotId: null,
  refinerChatbotId: null,
  chatHistory: [],
  isAnalyzing: false,
  analysisRunId: 0,
  captureId: null,
  pendingAutoSave: false,
  autoSaveTimer: null,
  chatSheetCollapsed: false,
  isReplying: false,
  recognition: null,
  isListening: false,
  keepListening: false,
  voiceTranscript: "",
  recognitionRestartTimer: null,
  inventory: loadInventory(),
};

function request(path, options = {}) {
  return fetch(path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  }).then(async (response) => {
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(body.error ?? body.message ?? response.statusText);
    }
    return body;
  });
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-perxona-presenter="${url}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.type = "module";
    script.src = url;
    script.dataset.perxonaPresenter = url;
    script.onload = resolve;
    script.onerror = () => reject(new Error("Presenter engine failed to load."));
    document.head.append(script);
  });
}

function selectByName(items, fragments) {
  return (
    items.find((item) =>
      fragments.some((fragment) =>
        String(item.name ?? "").toLowerCase().includes(fragment),
      ),
    ) ?? items[0]
  );
}

function castForProfile(profileKey) {
  const castKey = PROFILE_AVATAR_CAST[profileKey] ?? "meeks";
  return { castKey, ...AVATAR_CASTS[castKey] };
}

async function loadMotionForAvatar(avatar) {
  if (!avatar) return;
  const avatarId = avatar.id;
  try {
    const motions = await request(
      `/api/avatars/${encodeURIComponent(avatarId)}/motions`,
    );
    if (state.avatar?.id !== avatarId) return;
    state.motion = selectByName(motions.items, [
      "lively",
      "greeting",
      "talk",
      "extend",
      "laugh",
      "lean",
    ]);
    createPerformance();
  } catch {
    if (state.avatar?.id === avatarId) state.motion = null;
  }
}

function castAvatarForProfile(profileKey) {
  const cast = castForProfile(profileKey);
  state.avatarCastKey = cast.castKey;
  els.avatarCastBadge.textContent = `Cast: ${cast.label}`;
  if (state.avatarCatalog.length === 0) return;

  const nextAvatar = selectByName(state.avatarCatalog, cast.fragments);
  if (!nextAvatar || state.avatar?.id === nextAvatar.id) return;

  state.avatar = nextAvatar;
  state.motion = null;
  state.presenterReady = false;
  state.presenterInitialized = false;
  state.presenterInitializationPromise = null;
  state.presenterTargetKey = null;
  void loadMotionForAvatar(nextAvatar);
}

async function preparePerxona() {
  try {
    const config = await request("/api/config");
    state.chatbotId = config.foodSpiritChatbotId ?? null;
    state.refinerChatbotId = config.foodVisionRefinerId ?? null;
    await loadScript(config.presenterUrl);
    await customElements.whenDefined("sv-presenter");

    const [avatars, scenes, voices] = await Promise.all([
      request("/api/avatars"),
      request("/api/scenes"),
      request("/api/voices"),
    ]);

    state.avatarCatalog = avatars.items;
    state.welcomeAvatar = selectByName(avatars.items, ["female_vrm09"]);
    castAvatarForProfile(state.profileKey);
    state.scene = selectByName(scenes.items, ["food_advisor", "food"]);
    state.voices = voices.items;
    state.voice = selectByName(voices.items, ["warm and cheerful", "brightly casual"]);
    state.welcomeVoice = selectByName(voices.items, [
      "brightly casual",
      "warm and cheerful",
    ]);

    if (
      !state.avatar ||
      !state.welcomeAvatar ||
      !state.scene ||
      !state.voice ||
      !state.welcomeVoice
    ) {
      throw new Error("The account is missing a required avatar, scene, or voice.");
    }

    els.connectionPill.dataset.state = "ready";
    els.connectionLabel.textContent = "Perxona ready";
    void initializeWelcomePresenter().catch((error) => {
      els.welcomeStatus.textContent = error.message;
    });
  } catch (error) {
    els.connectionPill.dataset.state = "error";
    els.connectionLabel.textContent = "Perxona needs attention";
    els.presenterStatus.textContent = error.message;
  }
}

function profileForText(text) {
  const normalized = text.toLowerCase();
  return (
    Object.entries(FOOD_PROFILES).find(
      ([key, profile]) =>
        key !== "food" &&
        profile.keywords.some((keyword) => normalized.includes(keyword)),
    )?.[0] ?? "food"
  );
}

function profileForPredictions(predictions) {
  for (const prediction of predictions) {
    const profileKey = profileForText(prediction.className);
    if (profileKey !== "food") {
      return { profileKey, confidence: prediction.probability };
    }
  }
  return {
    profileKey: "food",
    confidence: predictions[0]?.probability ?? 0,
  };
}

async function ensureRecognitionModel() {
  if (state.model) return state.model;
  if (state.modelPromise) return state.modelPromise;
  if (!window.mobilenet) {
    throw new Error("On-device recognition is still loading. Try again shortly.");
  }
  // The welcome screen gives us time to preload the full-width MobileNet V2.
  // It has more capacity than the compact alpha 0.5 build while staying local.
  state.modelPromise = window.mobilenet
    .load({ version: 2, alpha: 1.0 })
    .then((model) => {
      state.model = model;
      return model;
    })
    .finally(() => {
      state.modelPromise = null;
    });
  return state.modelPromise;
}

function formatDate(date) {
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
  }).format(date);
}

function updateEstimate() {
  const typedKey = profileForText(els.foodName.value);
  if (typedKey !== "food" || state.profileKey === "food") {
    state.profileKey = typedKey;
  }
  castAvatarForProfile(state.profileKey);
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  if (!state.presenterInitialized && state.voices.length > 0) {
    state.voice = selectByName(state.voices, [profile.voice]);
  }
  const baseDays = profile.days[els.storage.value] ?? profile.days.fridge;
  const multiplier = CONDITION_MULTIPLIERS[els.condition.value] ?? 1;
  state.estimatedDays = Math.max(1, Math.round(baseDays * multiplier));
  state.estimatedDate = new Date();
  state.estimatedDate.setHours(12, 0, 0, 0);
  state.estimatedDate.setDate(state.estimatedDate.getDate() + state.estimatedDays);

  els.spiritName.textContent = profile.spirit;
  els.deviceSpiritName.textContent = profile.spirit;
  els.useWindow.textContent = `Use within ${state.estimatedDays} ${state.estimatedDays === 1 ? "day" : "days"}`;
  els.useDate.textContent = `Plan to use before ${formatDate(state.estimatedDate)}`;
}

function createPerformance() {
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const foodName = els.foodName.value.trim() || profile.label;
  const motionId = state.motion?.id ?? state.motion?.motion_id;
  const motionTag = motionId ? ` [MOTION ${motionId}:1]` : "";
  const storage = STORAGE_LABELS[els.storage.value];
  const action =
    els.storage.value === "freezer"
      ? "Label me clearly so future-you remembers what I can become."
      : state.estimatedDays <= 2
        ? "Please put me in your next meal, or freeze me today."
        : "Give me a place in your meal plan before I fade into the back of the shelf.";

  state.displayText = `I'm ${profile.spirit}, the spirit of this ${foodName}. ${profile.opening} Stored ${storage}, plan to use me within ${state.estimatedDays} ${state.estimatedDays === 1 ? "day" : "days"}. ${action}`;
  state.performanceText = `I'm ${profile.spirit}, the spirit of this ${foodName}.${motionTag} ${profile.opening} Stored ${storage}, plan to use me within ${state.estimatedDays} ${state.estimatedDays === 1 ? "day" : "days"}. ${action}`;

  els.speechLabel.textContent = `${profile.spirit} says`;
  els.speechText.textContent = state.displayText;
  els.conversationTitle.textContent = `Talk with ${profile.spirit}`;
  els.conversationInput.placeholder = `Ask ${profile.spirit} something...`;
}

function isMobileChatSheet() {
  return globalThis.matchMedia?.("(max-width: 760px)").matches ?? false;
}

function setChatSheetCollapsed(collapsed) {
  state.chatSheetCollapsed = Boolean(collapsed && isMobileChatSheet());
  els.speechCard.style.removeProperty("transform");
  els.speechCard.classList.toggle("is-collapsed", state.chatSheetCollapsed);
  els.speechCard.classList.remove("is-dragging");
  els.chatSheetHandle.setAttribute(
    "aria-expanded",
    String(!state.chatSheetCollapsed),
  );
  els.chatSheetLabel.textContent = state.chatSheetCollapsed
    ? "Open conversation"
    : "Conversation";
}

function setupChatSheet() {
  let startY = 0;
  let startOffset = 0;
  let currentOffset = 0;
  let maxOffset = 0;
  let dragging = false;
  let ignoreNextClick = false;

  els.chatSheetHandle.addEventListener("pointerdown", (event) => {
    if (!isMobileChatSheet() || els.speechCard.hidden) return;
    dragging = true;
    startY = event.clientY;
    maxOffset = Math.max(0, els.speechCard.offsetHeight - 82);
    startOffset = state.chatSheetCollapsed ? maxOffset : 0;
    currentOffset = startOffset;
    els.speechCard.classList.add("is-dragging");
    document.body.classList.add("chat-sheet-dragging");
    els.chatSheetHandle.setPointerCapture?.(event.pointerId);
  });

  els.chatSheetHandle.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const delta = event.clientY - startY;
    currentOffset = Math.min(maxOffset, Math.max(0, startOffset + delta));
    els.speechCard.style.transform = `translateY(${currentOffset}px)`;
    if (Math.abs(delta) > 8) ignoreNextClick = true;
  });

  const finishDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    els.chatSheetHandle.releasePointerCapture?.(event.pointerId);
    document.body.classList.remove("chat-sheet-dragging");
    setChatSheetCollapsed(currentOffset > maxOffset * 0.42);
    setTimeout(() => {
      ignoreNextClick = false;
    }, 0);
  };

  els.chatSheetHandle.addEventListener("pointerup", finishDrag);
  els.chatSheetHandle.addEventListener("pointercancel", finishDrag);
  els.chatSheetHandle.addEventListener("click", () => {
    if (!isMobileChatSheet() || ignoreNextClick) return;
    setChatSheetCollapsed(!state.chatSheetCollapsed);
  });

  globalThis.addEventListener("resize", () => {
    if (!isMobileChatSheet()) setChatSheetCollapsed(false);
  });
}

function setRecognitionProgress({ active, title, detail }) {
  els.uploadZone.dataset.state = active ? "recognizing" : "ready";
  els.recognitionOverlay.hidden = !active;
  if (title) els.recognitionTitle.textContent = title;
  if (detail) els.recognitionDetail.textContent = detail;
  els.sampleButton.disabled = active;
}

function applyRecognitionResult({ profileKey, confidence, foodName, source }) {
  state.profileKey = profileKey;
  state.confidence = confidence;
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  els.foodName.value = foodName || profile.label;
  els.spiritName.textContent = profile.spirit;
  els.deviceSpiritName.textContent = profile.spirit;
  els.confidenceBadge.textContent =
    source === "ai"
      ? `AI refined · ${Math.round(confidence * 100)}%`
      : profileKey === "food"
        ? "Please confirm"
        : `${Math.round(confidence * 100)}% visual match`;
  els.aiRefinementPill.hidden = source !== "ai";
  els.analysisCard.hidden = false;
  els.awakenButton.disabled = false;
  updateEstimate();
  createPerformance();
}

function parseRefinedFood(replyText) {
  const jsonText = String(replyText ?? "").match(/\{[\s\S]*\}/)?.[0];
  if (!jsonText) return null;
  try {
    const parsed = JSON.parse(jsonText);
    const food = String(parsed.food ?? "").trim().slice(0, 60);
    const confidence = Math.min(1, Math.max(0, Number(parsed.confidence) || 0));
    if (!food || /^unknown food$/i.test(food) || confidence <= 0) return null;
    return {
      food,
      confidence,
      profileKey: profileForText(food),
    };
  } catch {
    return null;
  }
}

async function refineFoodPredictions(predictions) {
  if (!state.refinerChatbotId) {
    const config = await request("/api/config");
    state.refinerChatbotId = config.foodVisionRefinerId ?? null;
  }
  if (!state.refinerChatbotId) return null;

  const candidates = predictions
    .map(
      (prediction, index) =>
        `${index + 1}. ${prediction.className} (${Math.round(prediction.probability * 100)}%)`,
    )
    .join("; ");
  const signal = globalThis.AbortSignal?.timeout?.(9000);
  const response = await request(
    `/api/chatbots/${state.refinerChatbotId}/chat`,
    {
      method: "POST",
      body: {
        messages: [
          {
            role: "user",
            parts: [
              {
                type: "text",
                text: `On-device candidates: ${candidates}. Return the required JSON.`,
              },
            ],
          },
        ],
      },
      ...(signal ? { signal } : {}),
    },
  );
  if (response.status !== "succeeded") return null;
  return parseRefinedFood(response.reply_text);
}

async function analyzePhoto() {
  if (!els.photoPreview.src) return;
  const runId = ++state.analysisRunId;
  state.isAnalyzing = true;
  els.analyzeButton.hidden = true;
  els.aiRefinementPill.hidden = true;
  els.awakenButton.disabled = true;
  setRecognitionProgress({
    active: true,
    title: "Reading your photo",
    detail: "Full-width MobileNet V2 is finding the strongest local matches.",
  });
  els.analysisStatus.textContent = "Loading full-width on-device recognition…";

  try {
    const model = await ensureRecognitionModel();
    els.analysisStatus.textContent = "Looking at shape, color, and visual clues…";
    const predictions = await model.classify(els.photoPreview, 5);
    if (runId !== state.analysisRunId) return;
    const visualResult = profileForPredictions(predictions);
    const visualProfile = FOOD_PROFILES[visualResult.profileKey] ?? FOOD_PROFILES.food;
    applyRecognitionResult({
      ...visualResult,
      foodName: visualProfile.label,
      source: "visual",
    });
    setRecognitionProgress({
      active: false,
      title: "Food match found",
      detail: "Perxona AI is checking the label.",
    });
    els.analysisStatus.textContent =
      "Visual match ready. Perxona AI is refining the food label…";
    els.analysisCard.scrollIntoView({ behavior: "smooth", block: "nearest" });

    try {
      const refined = await refineFoodPredictions(predictions);
      if (runId !== state.analysisRunId) return;
      if (refined) {
        applyRecognitionResult({ ...refined, foodName: refined.food, source: "ai" });
        els.analysisStatus.textContent =
          "Spirit discovered. Confirm the label and tap Awaken.";
      } else {
        els.analysisStatus.textContent =
          "Visual match ready. Confirm the label and tap Awaken.";
      }
    } catch {
      els.analysisStatus.textContent =
        "Visual match ready. AI refinement was unavailable, so please confirm the label.";
    }
  } catch (error) {
    if (runId !== state.analysisRunId) return;
    applyRecognitionResult({
      profileKey: "food",
      confidence: 0,
      foodName: "Fresh food",
      source: "visual",
    });
    els.analysisStatus.textContent = `${error.message} Identify it manually or retry.`;
    els.analyzeButton.hidden = false;
  } finally {
    if (runId !== state.analysisRunId) return;
    state.isAnalyzing = false;
    setRecognitionProgress({
      active: false,
      title: "Reading your photo",
      detail: "Full-width MobileNet V2 is finding the strongest local matches.",
    });
  }
}

function enterExperience() {
  if (!els.experiencePage.hidden) return;
  window.clearTimeout(state.welcomeTransitionTimer);
  state.welcomeTransitionTimer = null;
  els.welcomePresenter.interruptPresentation?.();
  els.welcomeScreen.classList.add("is-leaving");

  window.setTimeout(() => {
    els.welcomePresenter.remove();
    els.welcomeScreen.hidden = true;
    els.experiencePage.hidden = false;
    document.body.classList.remove("landing-open");
    document.body.classList.add("experience-open");
    window.scrollTo({ top: 0, behavior: "auto" });
    els.welcomeScreen.classList.remove("is-leaving");
    els.fileInput.focus({ preventScroll: true });
  }, 420);
}

function waitForWelcomePresenterReady(timeoutMs = 30000) {
  if (state.welcomePresenterReady) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      els.welcomePresenter.removeEventListener("PRESENTER_STATUS", handleStatus);
      reject(new Error("The welcome avatar is taking too long to load."));
    }, timeoutMs);

    function handleStatus(event) {
      const status = event.detail?.status ?? event.detail;
      if (status !== "Ready") return;
      window.clearTimeout(timeout);
      els.welcomePresenter.removeEventListener("PRESENTER_STATUS", handleStatus);
      resolve();
    }

    els.welcomePresenter.addEventListener("PRESENTER_STATUS", handleStatus);
  });
}

async function initializeWelcomePresenter() {
  if (state.welcomePresenterInitialized && state.welcomePresenterReady) return;
  if (!state.welcomeAvatar || !state.scene || !state.welcomeVoice) {
    throw new Error("The welcome guide is still preparing.");
  }
  if (!state.welcomePresenterInitializationPromise) {
    state.welcomePresenterInitializationPromise = (async () => {
      const { connect_token: token } = await request("/api/connect-token");
      const ready = waitForWelcomePresenterReady();
      await els.welcomePresenter.initialize(token, {
        avatarId: state.welcomeAvatar.id,
        sceneId: state.scene.id,
        voiceId: state.welcomeVoice.id,
      });
      state.welcomePresenterInitialized = true;
      await ready;
    })().finally(() => {
      state.welcomePresenterInitializationPromise = null;
    });
  }
  await state.welcomePresenterInitializationPromise;
}

async function playWelcome() {
  if (state.welcomeStarted) return;
  state.welcomeStarted = true;
  els.welcomeStart.disabled = true;
  els.welcomeStatus.textContent = "Airi is about to show you how Food Spirit works…";
  try {
    await els.welcomePresenter.resumeAudioPlayback?.();
    await initializeWelcomePresenter();
    const result = await els.welcomePresenter.present(WELCOME_SCRIPT);
    if (!result?.success) {
      throw new Error(result?.message || result?.code || "Welcome performance failed.");
    }
    els.welcomeStatus.textContent = "Listen to Airi, then the camera experience will open.";
    els.welcomeStart.querySelector("span").textContent = "✦";
    els.welcomeStart.firstChild.textContent = " Welcome in progress ";
    state.welcomeTransitionTimer = window.setTimeout(enterExperience, 18000);
  } catch (error) {
    els.welcomeStatus.textContent = `${error.message} Opening the experience instead.`;
    window.setTimeout(enterExperience, 900);
  }
}

async function initializePresenter() {
  if (!state.avatar || !state.scene || !state.voice) {
    throw new Error("Perxona assets are not ready yet.");
  }
  const targetKey = `${state.avatar.id}:${state.scene.id}:${state.voice.id}`;
  if (
    state.presenterInitialized &&
    state.presenterReady &&
    state.presenterTargetKey === targetKey
  ) {
    return;
  }
  if (!state.presenterInitializationPromise) {
    state.presenterInitializationPromise = (async () => {
      const { connect_token: token } = await request("/api/connect-token");
      state.presenterReady = false;
      const ready = waitForPresenterReady();
      await els.presenter.initialize(token, {
        avatarId: state.avatar.id,
        sceneId: state.scene.id,
        voiceId: state.voice.id,
      });
      state.presenterInitialized = true;
      state.presenterTargetKey = targetKey;
      await ready;
    })().finally(() => {
      state.presenterInitializationPromise = null;
    });
  }
  await state.presenterInitializationPromise;
}

function waitForPresenterReady(timeoutMs = 30000) {
  if (state.presenterReady) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => {
      els.presenter.removeEventListener("PRESENTER_STATUS", handleStatus);
      reject(
        new Error(
          "The avatar is taking too long to load. Please retry in Chrome.",
        ),
      );
    }, timeoutMs);

    function handleStatus(event) {
      const status = event.detail?.status ?? event.detail;
      if (status !== "Ready") return;
      window.clearTimeout(timeout);
      els.presenter.removeEventListener("PRESENTER_STATUS", handleStatus);
      resolve();
    }

    els.presenter.addEventListener("PRESENTER_STATUS", handleStatus);
  });
}

async function presentSpirit({ autoSave = false } = {}) {
  createPerformance();
  if (autoSave) {
    state.pendingAutoSave = true;
    window.clearTimeout(state.autoSaveTimer);
    els.autoSaveState.classList.add("is-saving");
    els.autoSaveLabel.textContent = "Saving after the first hello…";
  }
  const result = await els.presenter.present(state.performanceText);
  if (!result?.success) {
    if (autoSave) state.pendingAutoSave = false;
    throw new Error(result?.message || result?.code || "Presentation failed.");
  }
  if (autoSave) {
    state.autoSaveTimer = window.setTimeout(completeAutoSave, 18000);
  }
  els.speechCard.hidden = false;
  setChatSheetCollapsed(false);
}

async function awakenSpirit() {
  els.awakenButton.disabled = true;
  els.presenterStatus.textContent = "Awakening…";
  createPerformance();
  els.speechCard.hidden = false;
  setChatSheetCollapsed(false);
  try {
    await els.presenter.resumeAudioPlayback?.();
    await initializePresenter();
    await presentSpirit({ autoSave: true });
  } catch (error) {
    state.pendingAutoSave = false;
    window.clearTimeout(state.autoSaveTimer);
    els.autoSaveState.classList.remove("is-saving");
    els.autoSaveLabel.textContent = "Auto-saves after the first hello";
    els.presenterStatus.textContent = error.message;
    els.awakenButton.disabled = false;
  }
}

function appendConversationMessage(role, text) {
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const message = document.createElement("div");
  message.className = `conversation-message ${role}`;

  const label = document.createElement("strong");
  label.textContent =
    role === "user" ? "You" : role === "error" ? "Notice" : profile.spirit;
  const copy = document.createElement("p");
  copy.textContent = text;
  message.append(label, copy);
  els.conversationLog.append(message);
  els.conversationLog.scrollTop = els.conversationLog.scrollHeight;
}

function resetConversation() {
  stopVoiceSession({ submit: false, quiet: true });
  state.chatHistory = [];
  state.isReplying = false;
  els.conversationLog.replaceChildren();
  els.conversationInput.value = "";
  els.conversationInput.disabled = false;
  els.conversationSend.disabled = false;
  els.voiceButton.disabled = !state.recognition;
  els.conversationStatus.textContent = state.recognition
    ? "Type a question, or tap Talk, speak, then tap Done."
    : "Voice input is unavailable in this browser. Text conversation still works.";
}

function savedPantryContext() {
  if (state.inventory.length === 0) {
    return "Saved pantry items: none. Do not invent saved ingredients.";
  }

  const items = state.inventory.slice(0, 12).map((item, index) => {
    const condition = item.condition ? `, condition ${item.condition}` : "";
    const useWindow = item.useWithinDays
      ? `, use within ${item.useWithinDays} days`
      : "";
    return `${index + 1}. ${item.food}, stored ${item.storage}${condition}${useWindow}, use by ${item.useBy}`;
  });
  return `Saved pantry items available to the user: ${items.join("; ")}. Use only these saved items plus ordinary staples unless the user provides another ingredient.`;
}

function currentFoodContext(question) {
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const foodName = els.foodName.value.trim() || profile.label;
  const condition =
    els.condition.options[els.condition.selectedIndex]?.textContent ??
    els.condition.value;
  return [
    `Food: ${foodName}.`,
    `Spirit name: ${profile.spirit}.`,
    `Personality: ${profile.opening}`,
    `Condition: ${condition}.`,
    `Storage: ${STORAGE_LABELS[els.storage.value]}.`,
    `Estimated planning window: ${state.estimatedDays} ${state.estimatedDays === 1 ? "day" : "days"}, before ${formatDate(state.estimatedDate)}.`,
    savedPantryContext(),
    `User question: ${question}`,
  ].join(" ");
}

function fallbackFoodReply(question) {
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const foodName = els.foodName.value.trim() || profile.label;
  const normalized = question.toLowerCase();
  const idea = FOOD_RESCUE_IDEAS[state.profileKey] ?? FOOD_RESCUE_IDEAS.food;

  if (
    ["safe", "eat", "spoiled", "smell", "mold", "bad"].some((word) =>
      normalized.includes(word),
    )
  ) {
    return "I cannot prove I am safe from a photo. Please check my package date, smell, and texture, and follow official guidance before eating me.";
  }
  if (
    ["make", "cook", "recipe", "meal", "dinner", "lunch", "breakfast"].some(
      (word) => normalized.includes(word),
    )
  ) {
    if (
      state.inventory.length > 0 &&
      ["pantry", "fridge", "saved", "other", "together"].some((word) =>
        normalized.includes(word),
      )
    ) {
      const pantryNames = state.inventory
        .slice(0, 5)
        .map((item) => item.food)
        .join(", ");
      return `Your saved pantry includes ${pantryNames}. Use the items with the earliest dates first, and ask me again when Perxona is available for a specific combination.`;
    }
    return `Turn me into ${idea}. I would love to become tonight's rescue meal instead of being forgotten.`;
  }
  if (
    ["when", "long", "soon", "expire", "fresh", "days"].some((word) =>
      normalized.includes(word),
    )
  ) {
    return `Plan to use me within ${state.estimatedDays} ${state.estimatedDays === 1 ? "day" : "days"}, before ${formatDate(state.estimatedDate)}. That is a planning estimate, so please check me before eating.`;
  }
  if (
    ["store", "fridge", "freezer", "counter"].some((word) =>
      normalized.includes(word),
    )
  ) {
    return `You marked me as stored ${STORAGE_LABELS[els.storage.value]}. Keep me sealed, visible, and labeled so I do not disappear at the back.`;
  }
  if (
    ["hello", "hi", "hey", "name", "who"].some((word) =>
      normalized.includes(word),
    )
  ) {
    return `I'm ${profile.spirit}, the spirit of this ${foodName}. ${profile.opening}`;
  }
  return "I'm listening. Ask me what meal I can become, how soon to use me, or how to keep me from being wasted.";
}

async function speakConversationReply(reply) {
  const motionId = state.motion?.id ?? state.motion?.motion_id;
  const motionTag = motionId ? ` [MOTION ${motionId}:1]` : "";
  await els.presenter.resumeAudioPlayback?.();
  await initializePresenter();
  const result = await els.presenter.present(`${reply}${motionTag}`);
  if (!result?.success) {
    throw new Error(result?.message || result?.code || "Avatar speech failed.");
  }
}

async function askFoodSpirit(rawQuestion) {
  const question = rawQuestion.trim().slice(0, 240);
  if (!question || state.isReplying) return;

  if (state.keepListening) {
    stopVoiceSession({ submit: false, quiet: true });
  }

  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  state.isReplying = true;
  setChatSheetCollapsed(false);
  els.conversationInput.value = "";
  els.conversationInput.disabled = true;
  els.conversationSend.disabled = true;
  els.voiceButton.disabled = true;
  els.conversationStatus.textContent = `${profile.spirit} is thinking...`;
  appendConversationMessage("user", question);

  state.chatHistory.push({
    role: "user",
    parts: [{ type: "text", text: currentFoodContext(question) }],
  });

  let reply;
  let usedFallback = false;
  els.presenter.setThinking?.(true);
  els.presenter.setListening?.(false);
  try {
    if (!state.chatbotId) throw new Error("Food Spirit chatbot is not configured.");
    const signal = globalThis.AbortSignal?.timeout?.(18000);
    const chatResponse = await request(`/api/chatbots/${state.chatbotId}/chat`, {
      method: "POST",
      body: { messages: state.chatHistory.slice(-12) },
      ...(signal ? { signal } : {}),
    });
    if (chatResponse.status !== "succeeded" || !chatResponse.reply_text) {
      throw new Error("Perxona chatbot did not return a reply.");
    }
    reply = String(chatResponse.reply_text).trim().slice(0, 600);
  } catch {
    reply = fallbackFoodReply(question);
    usedFallback = true;
  } finally {
    els.presenter.setThinking?.(false);
  }

  state.chatHistory.push({
    role: "assistant",
    parts: [{ type: "text", text: reply }],
  });
  appendConversationMessage("spirit", reply);
  els.speechLabel.textContent = `${profile.spirit} replies`;
  els.speechText.textContent = reply;

  try {
    els.conversationStatus.textContent = usedFallback
      ? "Perxona chat was busy; a safe local reply is speaking."
      : `${profile.spirit} replied through Perxona and is speaking.`;
    await speakConversationReply(reply);
    els.presenterStatus.textContent = "Spirit replied";
  } catch (error) {
    els.conversationStatus.textContent = `The reply is ready as text. ${error.message}`;
  } finally {
    state.isReplying = false;
    els.conversationInput.disabled = false;
    els.conversationSend.disabled = false;
    els.voiceButton.disabled = !state.recognition;
    els.conversationInput.focus();
  }
}

function setListeningState(isListening) {
  state.isListening = isListening;
  const voiceSessionActive = isListening || state.keepListening;
  els.voiceButton.setAttribute("aria-pressed", String(voiceSessionActive));
  els.voiceButtonLabel.textContent = voiceSessionActive ? "Done" : "Talk";
}

function clearRecognitionRestart() {
  if (state.recognitionRestartTimer) {
    clearTimeout(state.recognitionRestartTimer);
    state.recognitionRestartTimer = null;
  }
}

function stopVoiceSession({ submit = true, quiet = false } = {}) {
  if (!state.recognition) return;

  const transcript = els.conversationInput.value.trim();
  state.keepListening = false;
  clearRecognitionRestart();
  try {
    if (state.isListening) state.recognition.stop();
  } catch {
    // The browser may already be ending the speech service.
  }
  setListeningState(false);
  els.presenter.setListening?.(false);

  if (submit && transcript) {
    els.conversationStatus.textContent = "Got it — preparing your Food Spirit's reply.";
    void askFoodSpirit(transcript);
  } else if (!quiet && submit) {
    els.conversationStatus.textContent =
      "I did not catch a question. Tap Talk and try again, or type it.";
  }
}

function restartRecognition() {
  clearRecognitionRestart();
  state.recognitionRestartTimer = setTimeout(() => {
    state.recognitionRestartTimer = null;
    if (!state.keepListening || state.isReplying || !state.recognition) return;
    try {
      state.recognition.start();
    } catch {
      state.keepListening = false;
      setListeningState(false);
      els.presenter.setListening?.(false);
      els.conversationStatus.textContent =
        "The microphone could not restart. Tap Talk to try again.";
    }
  }, 280);
}

function setupSpeechRecognition() {
  const Recognition =
    globalThis.SpeechRecognition ?? globalThis.webkitSpeechRecognition;
  if (!Recognition) {
    els.voiceButton.disabled = true;
    els.conversationStatus.textContent =
      "Voice input is unavailable in this browser. Text conversation still works.";
    return;
  }

  const recognition = new Recognition();
  recognition.lang = navigator.language || "en-US";
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  state.recognition = recognition;

  recognition.onstart = () => {
    setListeningState(true);
    els.presenter.setListening?.(true);
    els.conversationStatus.textContent =
      "Listening… keep speaking, then tap Done to send.";
  };

  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0]?.transcript ?? "";
      if (event.results[index].isFinal) {
        state.voiceTranscript = `${state.voiceTranscript} ${text}`.trim();
      } else {
        interimTranscript += text;
      }
    }
    const heardText = `${state.voiceTranscript} ${interimTranscript}`.trim();
    els.conversationInput.value = heardText;
    els.conversationStatus.textContent = heardText
      ? "I can hear you — keep speaking, then tap Done."
      : "Listening… keep speaking, then tap Done to send.";
  };

  recognition.onerror = (event) => {
    const permissionDenied = ["not-allowed", "service-not-allowed"].includes(
      event.error,
    );
    if (permissionDenied) {
      state.keepListening = false;
      setListeningState(false);
      els.presenter.setListening?.(false);
      els.conversationStatus.textContent =
        "Microphone access was denied. You can still type your question.";
      return;
    }

    if (event.error === "no-speech" && state.keepListening) {
      els.conversationStatus.textContent =
        "Still listening… speak when ready, then tap Done.";
      return;
    }

    if (event.error === "aborted" && !state.keepListening) return;

    state.keepListening = false;
    setListeningState(false);
    els.presenter.setListening?.(false);
    els.conversationStatus.textContent =
      "The microphone paused. Tap Talk to try again, or use text.";
  };

  recognition.onend = () => {
    setListeningState(false);
    if (state.keepListening && !state.isReplying) {
      els.presenter.setListening?.(true);
      els.conversationStatus.textContent =
        "Still listening… speak when ready, then tap Done.";
      restartRecognition();
      return;
    }

    els.presenter.setListening?.(false);
    if (!state.isReplying && !els.conversationInput.value.trim()) {
      els.conversationStatus.textContent =
        "Type a question, or tap Talk, speak, then tap Done.";
    }
  };
}

function loadInventory() {
  try {
    return JSON.parse(localStorage.getItem("food-spirit-inventory") ?? "[]");
  } catch {
    return [];
  }
}

function persistInventory() {
  localStorage.setItem("food-spirit-inventory", JSON.stringify(state.inventory));
}

function renderInventory() {
  els.inventoryGrid.replaceChildren();
  els.inventoryCount.textContent = `${state.inventory.length} saved`;
  els.emptyInventory.hidden = state.inventory.length > 0;

  state.inventory.forEach((item) => {
    const card = document.createElement("article");
    card.className = "inventory-item";

    const image = document.createElement("img");
    image.className = "inventory-thumb";
    image.src = item.photo;
    image.alt = "";

    const copy = document.createElement("div");
    copy.className = "inventory-copy";
    const name = document.createElement("strong");
    name.textContent = `${item.spirit} · ${item.food}`;
    const date = document.createElement("span");
    const performer = item.performer ? ` · cast as ${item.performer}` : "";
    date.textContent = `Use by ${item.useBy} · ${item.storage}${performer}`;
    copy.append(name, date);

    const remove = document.createElement("button");
    remove.className = "inventory-remove";
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${item.food}`);
    remove.addEventListener("click", () => {
      state.inventory = state.inventory.filter((entry) => entry.id !== item.id);
      persistInventory();
      renderInventory();
    });

    card.append(image, copy, remove);
    els.inventoryGrid.append(card);
  });
}

function saveCurrentItem() {
  if (!state.captureId || !state.photoDataUrl) return;
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const existingIndex = state.inventory.findIndex(
    (entry) => entry.captureId === state.captureId,
  );
  const existing = existingIndex >= 0 ? state.inventory[existingIndex] : null;
  const item = {
    id: existing?.id ?? crypto.randomUUID(),
    captureId: state.captureId,
    food: els.foodName.value.trim() || profile.label,
    spirit: profile.spirit,
    performer: AVATAR_CASTS[state.avatarCastKey]?.label ?? "Meeks",
    storage: STORAGE_LABELS[els.storage.value],
    condition:
      els.condition.options[els.condition.selectedIndex]?.textContent ??
      els.condition.value,
    useWithinDays: state.estimatedDays,
    useBy: formatDate(state.estimatedDate),
    photo: state.photoDataUrl,
  };
  if (existingIndex >= 0) {
    state.inventory.splice(existingIndex, 1);
  }
  state.inventory.unshift(item);
  state.inventory = state.inventory.slice(0, 9);
  persistInventory();
  renderInventory();
}

function completeAutoSave() {
  if (!state.pendingAutoSave) return;
  state.pendingAutoSave = false;
  window.clearTimeout(state.autoSaveTimer);
  state.autoSaveTimer = null;
  saveCurrentItem();
  els.autoSaveState.classList.remove("is-saving");
  els.autoSaveState.classList.add("is-saved");
  els.autoSaveLabel.textContent = "Saved automatically on this device";
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("The selected photo could not be read."));
    reader.readAsDataURL(file);
  });
}

async function createStoredPhoto(image, file) {
  try {
    await image.decode();
    const maxSide = 480;
    const scale = Math.min(
      1,
      maxSide / Math.max(image.naturalWidth, image.naturalHeight),
    );
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas is unavailable.");
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.76);
  } catch {
    return fileToDataUrl(file);
  }
}

async function loadPhoto(file, statusMessage) {
  state.analysisRunId += 1;
  state.isAnalyzing = false;
  state.captureId = crypto.randomUUID();
  state.pendingAutoSave = false;
  window.clearTimeout(state.autoSaveTimer);
  state.autoSaveTimer = null;
  els.autoSaveState.classList.remove("is-saving", "is-saved");
  els.autoSaveLabel.textContent = "Auto-saves after the first hello";
  els.analyzeButton.hidden = true;
  els.aiRefinementPill.hidden = true;
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = URL.createObjectURL(file);
  els.photoPreview.src = state.previewUrl;
  els.photoPreview.hidden = false;
  els.uploadPrompt.hidden = true;
  els.replacePhoto.hidden = false;
  els.analysisCard.hidden = true;
  els.speechCard.hidden = true;
  setChatSheetCollapsed(false);
  resetConversation();
  els.analysisStatus.textContent = statusMessage;
  state.presenterInitialized = false;
  state.presenterReady = false;
  state.presenterInitializationPromise = null;
  state.presenterTargetKey = null;
  els.presenter.hidden = true;
  els.stagePlaceholder.hidden = false;
  els.presenterStatus.textContent = "Waiting to awaken this photo";
  state.photoDataUrl = await createStoredPhoto(els.photoPreview, file);
  await analyzePhoto();
}

els.fileInput.addEventListener("change", async () => {
  const file = els.fileInput.files?.[0];
  if (!file) return;
  await loadPhoto(file, "Photo stays on this device during recognition.");
});

els.sampleButton.addEventListener("click", async () => {
  els.sampleButton.disabled = true;
  try {
    const response = await fetch("./sample-banana.jpg");
    if (!response.ok) throw new Error("Sample photo could not be loaded.");
    const blob = await response.blob();
    const file = new File([blob], "sample-banana.jpg", {
      type: blob.type || "image/jpeg",
    });
    await loadPhoto(file, "Sample banana loaded. Recognition still runs on this device.");
  } catch (error) {
    els.analysisStatus.textContent = error.message;
  } finally {
    els.sampleButton.disabled = false;
  }
});

els.analyzeButton.addEventListener("click", analyzePhoto);
els.condition.addEventListener("change", () => {
  updateEstimate();
  createPerformance();
});
els.storage.addEventListener("change", () => {
  updateEstimate();
  createPerformance();
});
els.foodName.addEventListener("input", () => {
  state.profileKey = profileForText(els.foodName.value);
  updateEstimate();
  createPerformance();
});
els.navExperience.addEventListener("click", enterExperience);
els.welcomeSkip.addEventListener("click", enterExperience);
els.welcomeStart.addEventListener("click", playWelcome);
els.awakenButton.addEventListener("click", awakenSpirit);
els.replayButton.addEventListener("click", async () => {
  try {
    await els.presenter.resumeAudioPlayback?.();
    await presentSpirit();
  } catch (error) {
    els.presenterStatus.textContent = error.message;
  }
});
els.conversationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void askFoodSpirit(els.conversationInput.value);
});
els.voiceButton.addEventListener("click", () => {
  if (!state.recognition || state.isReplying) return;
  if (state.keepListening) {
    stopVoiceSession({ submit: true });
    return;
  }

  state.keepListening = true;
  state.voiceTranscript = "";
  els.conversationInput.value = "";
  setListeningState(false);
  els.conversationStatus.textContent = "Starting the microphone…";
  try {
    state.recognition.start();
  } catch {
    state.keepListening = false;
    setListeningState(false);
    els.conversationStatus.textContent =
      "The microphone is already starting. Try again in a moment.";
  }
});
els.promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.prompt ?? "";
    els.conversationInput.value = prompt;
    void askFoodSpirit(prompt);
  });
});

els.presenter.addEventListener("PRESENTER_STATUS", (event) => {
  const status = event.detail?.status ?? event.detail;
  els.presenterStatus.textContent = status === "Ready" ? "Spirit is alive" : status;
  if (status === "Ready") {
    state.presenterReady = true;
    state.presenterInitialized = true;
    els.presenter.hidden = false;
    els.stagePlaceholder.hidden = true;
    els.awakenButton.disabled = false;
  }
});

els.presenter.addEventListener("ALL_PERFORMANCE_FINISHED", completeAutoSave);

els.welcomePresenter.addEventListener("PRESENTER_STATUS", (event) => {
  const status = event.detail?.status ?? event.detail;
  if (status !== "Ready") {
    els.welcomeStatus.textContent =
      status === "Initializing" ? "Preparing Airi's live welcome…" : String(status);
    return;
  }
  state.welcomePresenterReady = true;
  state.welcomePresenterInitialized = true;
  els.welcomePresenter.hidden = false;
  els.welcomePlaceholder.hidden = true;
  els.welcomeStatus.textContent = "Airi is ready. Tap Hear the welcome to begin.";
});

els.welcomePresenter.addEventListener("ALL_PERFORMANCE_FINISHED", () => {
  if (state.welcomeStarted) enterExperience();
});

els.presenter.addEventListener("CONNECT_TOKEN_EXPIRED", async () => {
  if (state.isRefreshingToken) return;
  state.isRefreshingToken = true;
  try {
    const { connect_token: token } = await request("/api/connect-token");
    els.presenter.refreshConnectToken(token);
    els.presenterStatus.textContent = "Connection refreshed — try again";
  } catch (error) {
    els.presenterStatus.textContent = error.message;
  } finally {
    state.isRefreshingToken = false;
  }
});

els.welcomePresenter.addEventListener("CONNECT_TOKEN_EXPIRED", async () => {
  try {
    const { connect_token: token } = await request("/api/connect-token");
    els.welcomePresenter.refreshConnectToken(token);
  } catch (error) {
    els.welcomeStatus.textContent = error.message;
  }
});

setupSpeechRecognition();
setupChatSheet();
renderInventory();
preparePerxona();
window.addEventListener("load", () => {
  ensureRecognitionModel().catch(() => {
    // Recognition remains optional: the user can always identify food manually.
  });
});
