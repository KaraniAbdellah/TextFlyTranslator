const from_langauge = document.querySelector(".from-langauge");
const to_language = document.querySelector(".to-language");

// Button Translation
const translate_btn_to_any_language = document.querySelector(
  ".translate-btn-to-any-language"
);

// User Write Text in This Input
const text_input_from_language = document.querySelector(
  ".text-input-from-language"
);

// User See Result Translation Here
const translation_output = document.querySelector(".translation-output");

// Speak Button (speaker-btn) && Listen Button (mic-phone)
const speaker_btn = document.querySelector(".speaker-btn");
const listen_button = document.querySelector(".mic-btn");

// If User Click to Speak Button
speaker_btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Speaking ...");
});

// If User CLick to Listen
listen_button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Listening ...");
});

translate_btn_to_any_language.addEventListener("click", async (event) => {
  event.preventDefault();
  console.log(from_langauge.value, to_language.value);
  console.log(
    `We Want to Translate [${from_langauge.value}] to [${to_language.value}] This Text=[${text_input_from_language.value}]`
  );

  if (text_input_from_language.value) {
    const res = await generateContent(
      to_language.value,
      text_input_from_language.value
    );
    translation_output.value = res;
  }
});

async function generateContent(to_language, text) {
  console.log(
    `Translate This text=${text} to ${to_language} with no extra description`
  );
  const GEMINI_API_KEY = "AIzaSyBO_K4w8wf2QvlhPqN_n_QoCcIzCF6i9VM"; // replace with your key
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key": GEMINI_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `Translate This text=[${text}] to ${to_language} with no extra description`,
              },
            ],
          },
        ],
      }),
    }
  );

  const data = await response.json();
  console.log(data); // full response
  const final_res = data.candidates[0]?.content?.parts[0]?.text;
  if (final_res) {
    return final_res;
  } else {
    return "Sorry We Can Not Get Translation, Please try Again!!!";
  }
}
