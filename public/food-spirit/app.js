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

const els = {
  connectionPill: document.querySelector("#connection-pill"),
  connectionLabel: document.querySelector("#connection-label"),
  fileInput: document.querySelector("#food-photo"),
  photoPreview: document.querySelector("#photo-preview"),
  uploadPrompt: document.querySelector("#upload-prompt"),
  replacePhoto: document.querySelector("#replace-photo"),
  analyzeButton: document.querySelector("#analyze-button"),
  sampleButton: document.querySelector("#sample-button"),
  analysisStatus: document.querySelector("#analysis-status"),
  analysisCard: document.querySelector("#analysis-card"),
  spiritName: document.querySelector("#spirit-name"),
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
  speechCard: document.querySelector("#speech-card"),
  speechLabel: document.querySelector("#speech-label"),
  speechText: document.querySelector("#speech-text"),
  replayButton: document.querySelector("#replay-button"),
  saveButton: document.querySelector("#save-button"),
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
  profileKey: "food",
  confidence: 0,
  estimatedDays: 3,
  estimatedDate: new Date(),
  presenterReady: false,
  presenterInitialized: false,
  presenterInitializationPromise: null,
  isRefreshingToken: false,
  performanceText: "",
  displayText: "",
  avatar: null,
  scene: null,
  voice: null,
  voices: [],
  motion: null,
  chatbotId: null,
  chatHistory: [],
  isReplying: false,
  recognition: null,
  isListening: false,
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

async function preparePerxona() {
  try {
    const config = await request("/api/config");
    state.chatbotId = config.foodSpiritChatbotId ?? null;
    await loadScript(config.presenterUrl);
    await customElements.whenDefined("sv-presenter");

    const [avatars, scenes, voices] = await Promise.all([
      request("/api/avatars"),
      request("/api/scenes"),
      request("/api/voices"),
    ]);

    state.avatar = selectByName(avatars.items, ["female_food", "mushroom"]);
    state.scene = selectByName(scenes.items, ["food_advisor", "food"]);
    state.voices = voices.items;
    state.voice = selectByName(voices.items, ["warm and cheerful", "brightly casual"]);

    if (!state.avatar || !state.scene || !state.voice) {
      throw new Error("The account is missing a required avatar, scene, or voice.");
    }

    const motions = await request(
      `/api/avatars/${encodeURIComponent(state.avatar.id)}/motions`,
    );
    state.motion = selectByName(motions.items, ["lively", "extend", "lean"]);

    els.connectionPill.dataset.state = "ready";
    els.connectionLabel.textContent = "Perxona ready";
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
  if (!window.mobilenet) {
    throw new Error("On-device recognition is still loading. Try again shortly.");
  }
  state.model = await window.mobilenet.load({ version: 2, alpha: 1 });
  return state.model;
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

async function analyzePhoto() {
  if (!els.photoPreview.src) return;
  els.analyzeButton.disabled = true;
  els.analysisStatus.textContent = "Loading private on-device recognition…";

  let result = { profileKey: "food", confidence: 0 };
  try {
    const model = await ensureRecognitionModel();
    els.analysisStatus.textContent = "Looking at shape, color, and visual clues…";
    const predictions = await model.classify(els.photoPreview, 5);
    result = profileForPredictions(predictions);
    els.analysisStatus.textContent =
      result.profileKey === "food"
        ? "I need your help confirming this one."
        : "Recognition complete. You can correct it below.";
  } catch (error) {
    els.analysisStatus.textContent = `${error.message} You can identify it manually below.`;
  }

  state.profileKey = result.profileKey;
  state.confidence = result.confidence;
  const profile = FOOD_PROFILES[state.profileKey];
  els.foodName.value = profile.label;
  els.spiritName.textContent = profile.spirit;
  els.confidenceBadge.textContent =
    result.profileKey === "food"
      ? "Please confirm"
      : `${Math.round(result.confidence * 100)}% visual match`;
  els.analysisCard.hidden = false;
  updateEstimate();
  createPerformance();
  els.analyzeButton.disabled = false;
  els.analysisCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function initializePresenter() {
  if (state.presenterInitialized && state.presenterReady) return;
  if (!state.avatar || !state.scene || !state.voice) {
    throw new Error("Perxona assets are not ready yet.");
  }
  if (!state.presenterInitializationPromise) {
    state.presenterInitializationPromise = (async () => {
      const { connect_token: token } = await request("/api/connect-token");
      await els.presenter.initialize(token, {
        avatarId: state.avatar.id,
        sceneId: state.scene.id,
        voiceId: state.voice.id,
      });
      state.presenterInitialized = true;
      await waitForPresenterReady();
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

async function presentSpirit() {
  createPerformance();
  const result = await els.presenter.present(state.performanceText);
  if (!result?.success) {
    throw new Error(result?.message || result?.code || "Presentation failed.");
  }
  els.speechCard.hidden = false;
}

async function awakenSpirit() {
  els.awakenButton.disabled = true;
  els.presenterStatus.textContent = "Awakening…";
  createPerformance();
  els.speechCard.hidden = false;
  try {
    await els.presenter.resumeAudioPlayback?.();
    await initializePresenter();
    await presentSpirit();
  } catch (error) {
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
  state.chatHistory = [];
  state.isReplying = false;
  els.conversationLog.replaceChildren();
  els.conversationInput.value = "";
  els.conversationInput.disabled = false;
  els.conversationSend.disabled = false;
  els.voiceButton.disabled = !state.recognition;
  els.conversationStatus.textContent = state.recognition
    ? "Ask by text, or tap Talk and allow microphone access."
    : "Voice input is unavailable in this browser. Text conversation still works.";
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

  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  state.isReplying = true;
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
  els.voiceButton.setAttribute("aria-pressed", String(isListening));
  els.voiceButtonLabel.textContent = isListening ? "Listening" : "Talk";
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
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;
  state.recognition = recognition;

  recognition.onstart = () => {
    setListeningState(true);
    els.presenter.setListening?.(true);
    els.conversationStatus.textContent =
      "Listening... ask your Food Spirit a question.";
  };

  recognition.onresult = (event) => {
    let transcript = "";
    let finalTranscript = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0]?.transcript ?? "";
      transcript += text;
      if (event.results[index].isFinal) finalTranscript += text;
    }
    els.conversationInput.value = transcript.trim();
    if (finalTranscript.trim()) {
      recognition.stop();
      void askFoodSpirit(finalTranscript);
    }
  };

  recognition.onerror = (event) => {
    setListeningState(false);
    els.presenter.setListening?.(false);
    const permissionDenied = ["not-allowed", "service-not-allowed"].includes(
      event.error,
    );
    els.conversationStatus.textContent = permissionDenied
      ? "Microphone access was denied. You can still type your question."
      : "I could not hear that. Tap Talk to try again, or use text.";
  };

  recognition.onend = () => {
    setListeningState(false);
    els.presenter.setListening?.(false);
    if (!state.isReplying && !els.conversationInput.value.trim()) {
      els.conversationStatus.textContent =
        "Ask by text, or tap Talk and allow microphone access.";
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
    date.textContent = `Use by ${item.useBy} · ${item.storage}`;
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
  const profile = FOOD_PROFILES[state.profileKey] ?? FOOD_PROFILES.food;
  const item = {
    id: crypto.randomUUID(),
    food: els.foodName.value.trim() || profile.label,
    spirit: profile.spirit,
    storage: STORAGE_LABELS[els.storage.value],
    useBy: formatDate(state.estimatedDate),
    photo: state.photoDataUrl,
  };
  state.inventory.unshift(item);
  state.inventory = state.inventory.slice(0, 9);
  persistInventory();
  renderInventory();
  els.saveButton.textContent = "Saved on this device";
  setTimeout(() => {
    els.saveButton.textContent = "Save privately on this device";
  }, 1800);
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
  els.analyzeButton.disabled = true;
  if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
  state.previewUrl = URL.createObjectURL(file);
  els.photoPreview.src = state.previewUrl;
  els.photoPreview.hidden = false;
  els.uploadPrompt.hidden = true;
  els.replacePhoto.hidden = false;
  els.analysisCard.hidden = true;
  els.speechCard.hidden = true;
  resetConversation();
  els.analysisStatus.textContent = statusMessage;
  state.presenterInitialized = false;
  state.presenterReady = false;
  state.presenterInitializationPromise = null;
  els.presenter.hidden = true;
  els.stagePlaceholder.hidden = false;
  els.presenterStatus.textContent = "Waiting to awaken this photo";
  state.photoDataUrl = await createStoredPhoto(els.photoPreview, file);
  els.analyzeButton.disabled = false;
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
els.awakenButton.addEventListener("click", awakenSpirit);
els.replayButton.addEventListener("click", async () => {
  try {
    await els.presenter.resumeAudioPlayback?.();
    await presentSpirit();
  } catch (error) {
    els.presenterStatus.textContent = error.message;
  }
});
els.saveButton.addEventListener("click", saveCurrentItem);
els.conversationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void askFoodSpirit(els.conversationInput.value);
});
els.voiceButton.addEventListener("click", () => {
  if (!state.recognition || state.isReplying) return;
  if (state.isListening) {
    state.recognition.stop();
    return;
  }
  try {
    state.recognition.start();
  } catch {
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

setupSpeechRecognition();
renderInventory();
preparePerxona();
window.addEventListener("load", () => {
  ensureRecognitionModel().catch(() => {
    // Recognition remains optional: the user can always identify food manually.
  });
});
