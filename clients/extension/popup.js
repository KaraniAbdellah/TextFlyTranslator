// DOM Elements
const from_langauge = document.querySelector(".from-langauge");
const to_language = document.querySelector(".to-language");
const translate_btn_to_any_language = document.querySelector(
  ".translate-btn-to-any-language"
);
const text_input_from_language = document.querySelector(
  ".text-input-from-language"
);
const translation_output = document.querySelector(".translation-output");
const speaker_btn = document.querySelector(".speaker-btn");
const listen_button = document.querySelector(".mic-btn");
const clear_source = document.getElementById("clear-source");
const copy_target = document.getElementById("copy-target");
const swap_langs = document.getElementById("swap-langs");
const source_count = document.getElementById("source-count");
const target_count = document.getElementById("target-count");
const status_bar = document.getElementById("status-bar");

// Speech Recognition Setup
let recognition;
if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
}

// Speech Synthesis Setup
const synth = window.speechSynthesis;

// Language code mapping for speech recognition
const langCodeMap = {
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  it: "it-IT",
  pt: "pt-PT",
  ru: "ru-RU",
  ja: "ja-JP",
  ko: "ko-KR",
  zh: "zh-CN",
  ar: "ar-SA",
  hi: "hi-IN",
};

// Status message helper
function updateStatus(message, type = "success") {
  const icon = status_bar.querySelector("i");
  const text = status_bar.querySelector("span");

  status_bar.className = "status-bar";

  if (type === "error") {
    icon.className = "fas fa-exclamation-circle";
    status_bar.classList.add("error");
  } else if (type === "loading") {
    icon.className = "fas fa-spinner fa-spin";
    status_bar.classList.add("loading");
  } else {
    icon.className = "fas fa-check-circle";
    status_bar.classList.add("success");
  }

  text.textContent = message;
}

// Character Counter
text_input_from_language.addEventListener("input", () => {
  const count = text_input_from_language.value.length;
  source_count.textContent = `${count} / 5000`;
});

translation_output.addEventListener("input", () => {
  const count = translation_output.value.length;
  target_count.textContent = `${count} characters`;
});

// Clear Source Text
clear_source.addEventListener("click", (event) => {
  event.preventDefault();
  text_input_from_language.value = "";
  source_count.textContent = "0 / 5000";
  updateStatus("Text cleared", "success");
});

// Copy Translation
copy_target.addEventListener("click", async (event) => {
  event.preventDefault();

  if (!translation_output.value) {
    updateStatus("No translation to copy", "error");
    return;
  }

  try {
    await navigator.clipboard.writeText(translation_output.value);
    updateStatus("Translation copied to clipboard!", "success");

    // Change icon temporarily
    const icon = copy_target.querySelector("i");
    icon.className = "fas fa-check";
    setTimeout(() => {
      icon.className = "fas fa-copy";
    }, 2000);
  } catch (err) {
    updateStatus("Failed to copy translation", "error");
    console.error("Copy failed:", err);
  }
});

// Swap Languages
swap_langs.addEventListener("click", (event) => {
  event.preventDefault();

  // Don't swap if source is "auto"
  if (from_langauge.value === "auto") {
    updateStatus("Cannot swap from auto-detect", "error");
    return;
  }

  // Swap language selections
  const tempLang = from_langauge.value;
  from_langauge.value = to_language.value;
  to_language.value = tempLang;

  // Swap text content
  const tempText = text_input_from_language.value;
  text_input_from_language.value = translation_output.value;
  translation_output.value = tempText;

  // Update character counts
  source_count.textContent = `${text_input_from_language.value.length} / 5000`;
  target_count.textContent = `${translation_output.value.length} characters`;

  updateStatus("Languages swapped", "success");
});

// Speech to Text (Microphone Button)
listen_button.addEventListener("click", (event) => {
  event.preventDefault();

  if (!recognition) {
    updateStatus("Speech recognition not supported in this browser", "error");
    return;
  }

  // Set language for recognition
  const sourceLang = from_langauge.value;
  if (sourceLang === "auto") {
    recognition.lang = "en-US"; // Default to English for auto-detect
  } else {
    recognition.lang = langCodeMap[sourceLang] || "en-US";
  }

  // Change button appearance
  const icon = listen_button.querySelector("i");
  icon.className = "fas fa-microphone-slash";
  listen_button.style.color = "#ef4444";
  updateStatus("Listening... Speak now", "loading");

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    text_input_from_language.value = transcript;
    source_count.textContent = `${transcript.length} / 5000`;
    updateStatus("Speech captured successfully", "success");

    // Reset button
    icon.className = "fas fa-microphone";
    listen_button.style.color = "";
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    updateStatus(`Speech recognition error: ${event.error}`, "error");

    // Reset button
    icon.className = "fas fa-microphone";
    listen_button.style.color = "";
  };

  recognition.onend = () => {
    // Reset button
    icon.className = "fas fa-microphone";
    listen_button.style.color = "";
  };
});

// Text to Speech (Speaker Button)
speaker_btn.addEventListener("click", (event) => {
  event.preventDefault();

  if (!translation_output.value) {
    updateStatus("No translation to speak", "error");
    return;
  }

  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(translation_output.value);

  // Set language for speech
  const targetLang = to_language.value;
  utterance.lang = langCodeMap[targetLang] || "en-US";

  // Change button appearance while speaking
  const icon = speaker_btn.querySelector("i");
  icon.className = "fas fa-volume-mute";
  speaker_btn.style.color = "#3b82f6";
  updateStatus("Speaking...", "loading");

  utterance.onend = () => {
    icon.className = "fas fa-volume-up";
    speaker_btn.style.color = "";
    updateStatus("Finished speaking", "success");
  };

  utterance.onerror = (event) => {
    console.error("Speech synthesis error:", event.error);
    updateStatus(`Speech error: ${event.error}`, "error");
    icon.className = "fas fa-volume-up";
    speaker_btn.style.color = "";
  };

  synth.speak(utterance);
});

// Translation Function
translate_btn_to_any_language.addEventListener("click", async (event) => {
  event.preventDefault();

  if (!text_input_from_language.value.trim()) {
    updateStatus("Please enter text to translate", "error");
    return;
  }

  // Show loading state
  const btnIcon = translate_btn_to_any_language.querySelector("i");
  const btnText = translate_btn_to_any_language.querySelector("span");
  const originalIcon = btnIcon.className;

  btnIcon.className = "fas fa-spinner fa-spin";
  btnText.textContent = "Translating...";
  translate_btn_to_any_language.disabled = true;
  updateStatus("Translating...", "loading");

  try {
    const targetLang = to_language.value;
    const sourceText = text_input_from_language.value;

    const result = await generateContent(targetLang, sourceText);

    translation_output.value = result;
    target_count.textContent = `${result.length} characters`;
    updateStatus("Translation completed successfully!", "success");
  } catch (error) {
    console.error("Translation error:", error);
    updateStatus("Translation failed. Please try again.", "error");
    translation_output.value = "Sorry, we could not get the translation. Please try again!";
  } finally {
    // Reset button state
    btnIcon.className = originalIcon;
    btnText.textContent = "Translate";
    translate_btn_to_any_language.disabled = false;
  }
});

// API Translation Function
async function generateContent(to_language_code, text) {
  const GEMINI_API_KEY_IMPORT = "AIzaSyC2PbA6EBiXa-CHSzVQ44Qlzc9JpqoLTuk"; // Replace with your key

  // Map language codes to full language names
  const languageNames = {
    en: "English",
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    pt: "Portuguese",
    ru: "Russian",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    ar: "Arabic",
    hi: "Hindi",
  };

  const targetLanguage = languageNames[to_language_code] || to_language_code;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key": GEMINI_API_KEY_IMPORT,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Translate the following text to ${targetLanguage}. Only provide the translation, no explanations or additional text:\n\n${text}`,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();
  const final_res = data.candidates[0]?.content?.parts[0]?.text;

  if (final_res) {
    return final_res.trim();
  } else {
    throw new Error("No translation returned from API");
  }
}

// Initialize
updateStatus("Ready to translate", "success");