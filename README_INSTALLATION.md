# 📄 Document Converter - Installation & Usage Guide

> **For dummies edition!** - Follow these steps one by one. Don't skip any step!

---

## 🎯 What This App Does

This app converts:
- **PDF files → Word documents (DOCX)** with AI-powered layout preservation
- **DOCX documents → Translated DOCX** (English ↔ Spanish)

---

## 📋 Prerequisites Checklist

Before you start, make sure you have:

| Item | How to Check | How to Install |
|------|--------------|----------------|
| ✅ **Node.js** | Open Terminal, type `node -v` | 👉 [Download here](https://nodejs.org) (choose LTS) |
| ✅ **Homebrew** | Open Terminal, type `brew -v` | 👉 See "Installing Homebrew" below |
| ✅ **pdftoppm** | Open Terminal, type `which pdftoppm` | 👉 `brew install poppler` |
| ✅ **Java 8+** | Open Terminal, type `java -version` | 👉 `brew install openjdk` |
| ✅ **API Key** | You need at least one (Gemini is free!) | 👉 See "Getting API Keys" below |

---

## 🔧 Step-by-Step Installation

### Step 1: Install Homebrew (if you don't have it)

1. Open **Terminal** (press `Cmd + Space`, type "Terminal", press Enter)
2. Copy and paste this ENTIRE command:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Press Enter and follow the instructions (it may ask for your password)
4. Close and reopen Terminal

### Step 2: Install Required Tools

Copy and paste these commands ONE BY ONE in Terminal:

```bash
brew install poppler
```

```bash
brew install openjdk
```

### Step 3: Install Node.js

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the green button)
3. Open the downloaded file and follow the installer

### Step 4: Get Your API Key (Free!)

> **🆓 Gemini is FREE** and works great! Get your key here:

1. Go to [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key (it looks like: `AIzaSy...`)

### Step 5: Set Up the App

1. Open **Terminal**
2. Navigate to the app folder. Copy this command:
   ```bash
   cd ~/Convertidor\ propio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   > ⏳ This may take 1-2 minutes. Wait until you see your prompt again.

### Step 6: Configure Your API Key

1. In the app folder, find the file named `.env.example`
2. Make a copy of it and name it `.env` (just `.env`, nothing else)
   - In Terminal, you can do: `cp .env.example .env`
3. Open `.env` with TextEdit
4. Replace `YOUR_API_KEY_HERE` with your actual Gemini API key
5. Save and close

Your `.env` file should look like:
```
GEMINI_API_KEY=AIzaSyABC123...your-actual-key-here
ANTHROPIC_API_KEY=sk-...
OPENAI_API_KEY=sk-...
MOONSHOT_API_KEY=sk-...
```

> 💡 You only need ONE API key. Gemini is recommended!

---

## 🚀 How to Run the App

### Option A: Double-Click the Shortcut (Easiest!)

1. Find **`Start_Converter.command`** in the app folder
2. Double-click it
3. If you see "cannot be opened" warning:
   - Right-click the file > Click **Open** > Click **Open** again
4. A Terminal window will open and the app will start
5. Your browser will automatically open to **http://localhost:3002**

### Option B: Using Terminal

1. Open Terminal
2. Run:
   ```bash
   cd ~/Convertidor\ propio && npm start
   ```
3. Open your browser and go to: **http://localhost:3002**

---

## 🖥️ Creating a Desktop Shortcut

Want to start the app from your Desktop? Follow these steps:

### Method 1: Create an Alias

1. Open Finder
2. Navigate to the app folder (`~/Convertidor propio`)
3. Find `Start_Converter.command`
4. Hold `Option + Cmd` and drag it to your Desktop
5. This creates an alias (shortcut) you can double-click!

### Method 2: Copy the Command File

1. Right-click `Start_Converter.command`
2. Click "Copy"
3. Go to Desktop
4. Right-click > Paste Item

---

## ❓ Troubleshooting

### "Cannot be opened because it is from an unidentified developer"

1. Right-click the file
2. Click **Open**
3. In the popup, click **Open** again
4. It will work from now on!

### "Permission denied" error

Run this in Terminal:
```bash
chmod +x ~/Convertidor\ propio/Start_Converter.command
```

### "node: command not found"

Node.js isn't installed. Go back to Step 3.

### "Error: GEMINI_API_KEY required"

Your `.env` file is missing or empty. Go back to Step 6.

### App starts but browser doesn't open

Manually open your browser and go to: **http://localhost:3002**

---

## 🎉 Using the App

1. **Start the app** (double-click the shortcut)
2. **Upload a file** - Drag and drop a PDF or click to select
3. **Choose your options**:
   - Select the AI model (Gemini recommended)
   - Choose translation if needed
4. **Click Convert/Translate**
5. **Wait** - Processing can take 1-5 minutes depending on file size
6. **Download** - Your converted file will download automatically!

---

## ⏹️ How to Stop the App

- **Close the Terminal window**, OR
- **Press `Ctrl + C`** in the Terminal window

---

## 📞 Need Help?

If something doesn't work:
1. Take a screenshot of the error
2. Note what step you were on
3. Check the Terminal window for error messages

---

*Created with ❤️ for easy document conversion*
