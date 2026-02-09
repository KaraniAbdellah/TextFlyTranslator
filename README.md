<div align="center">

<!-- Logo and Title -->
<img src="./imgs/onTheFlyLogo.png" width="180" alt="OnTheFly Logo">

# OnTheFly Extension

### *Real-time Language Translation Powered by AI*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abdellah_Karani-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/abdellah-karani-965928294/)
[![Twitter](https://img.shields.io/badge/Twitter-@karani66745-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/karani66745)
[![YouTube](https://img.shields.io/badge/Demo_Video-Watch-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/HXlM3S8YNUk)

---

</div>

## 📸 Preview

<img src="./imgs/slide2.png" alt="Translation Demo" style="border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">

---

## 🎯 Overview

**OnTheFly** is an intelligent translation service that leverages the power of Large Language Models to provide seamless translations between any languages, with special support for **English to Moroccan Arabic Dialect (Darija)**.

### ✨ Key Features

- **Universal Translation**: Translate from any language to any language
- **AI-Powered**: Built on Google's Gemini LLM for accurate translations
- **Dual Architecture**: RESTful API + Chrome Extension
- **Real-time**: Instant translation responses
- **Modern UI**: Clean, intuitive interface

<img src="./imgs/slide3.png" alt="Architecture Diagram" style="border-radius: 10px; margin: 20px 0;">

---

## 🏗️ Architecture

This project implements two complementary solutions:

### 1️⃣ **Client/Server Application**
```
Client (PHP) → JAX-RS Server → Gemini API → Response (JSON)
```
- **Backend**: JAX-RS (Java RESTful Web Services)
- **Frontend**: PHP Client
- **AI Engine**: Google Gemini API

### 2️⃣ **Browser Extension**
```
Extension UI → Direct API Call → Gemini API → Display Result
```
- **Manifest**: V3 (Latest Chrome Extension Standard)
- **Interface**: HTML/CSS/JavaScript
- **Integration**: Direct Gemini API connection

---

## 📋 Getting Started

### Prerequisites

<table>
<tr>
<td width="50%">

#### For Client/Server App:
- **Java JDK** (11 or higher)
- **WildFly Server** (v27 recommended)
- **PHP** (7.4+)
- **Gemini API Key**

</td>
<td width="50%">

#### For Browser Extension:
- **Google Chrome** (or any Chromium browser)
- **Developer Mode** enabled
- **Gemini API Key**

</td>
</tr>
</table>

---

## 📥 Installation

### Step 1: Fork & Clone

```bash
# Fork this repository using the button above, then:

git clone git@github.com:YourUsername/TextFlyTranslator.git
cd TextFlyTranslator
```

### Step 2: Get Your API Key

> Obtain your free Gemini API key from:  
> **https://aistudio.google.com/api-keys**

⚠️ **Note**: The free API has rate limits. Get your own key for uninterrupted service.

### Step 3: Configuration

#### For the Extension:
```javascript
// In config.js, add your API key:
const GEMINI_API_KEY = "your_api_key_here";
```

#### For the Server:
```java
// Configure in your server configuration file
```

### Step 4: Run the Project

<details>
<summary><b>🖥️ Running the Client/Server App</b></summary>

1. **Deploy to WildFly:**
   ```bash
   # Build the project
   mvn clean package
   
   # Deploy to WildFly
   cp target/your-app.war $WILDFLY_HOME/standalone/deployments/
   ```

2. **Start WildFly:**
   ```bash
   $WILDFLY_HOME/bin/standalone.sh
   ```

3. **Run PHP Client:**
   ```bash
   php -S localhost:8000
   ```

</details>

<details>
<summary><b>🧩 Installing the Extension</b></summary>

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the extension directory from this project
5. The OnTheFly icon should appear in your extensions bar! 🎉

</details>

---

## 🎥 Video Demo

<div align="center">

### 📺 Watch the Full Tutorial

[![Video Demo](https://img.shields.io/badge/▶️_Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/HXlM3S8YNUk)

*Click above to see OnTheFly in action!*

</div>

---

## 🛠️ Technology Stack

<div align="center">

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![WildFly](https://img.shields.io/badge/WildFly-FF6C37?style=for-the-badge&logo=red-hat&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

</div>

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available for anyone to use and improve.

---

## 💬 Contact & Support

<div align="center">

**Questions? Suggestions? Let's connect!**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Message_Me-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/abdellah-karani-965928294/)
[![Twitter](https://img.shields.io/badge/Twitter-Tweet_Me-1DA1F2?style=for-the-badge&logo=twitter)](https://x.com/karani66745)

</div>

---

<div align="center">

### If you find this project helpful, please give it a star!

**Made with ❤️ by [Abdellah Karani](https://www.linkedin.com/in/abdellah-karani-965928294/)**

<sub>Powered by Google Gemini AI</sub>

</div>
