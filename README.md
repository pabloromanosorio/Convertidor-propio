# Document Converter & Translator

A powerful, AI-driven tool to convert PDF/Images to Word (DOCX) and translate Word documents while preserving their original formatting. 

## Prerequisites
Before you begin, ensure you have the following installed on your computer:
1. **Node.js**: Download and install it from [nodejs.org](https://nodejs.org/). (LTS version recommended)
2. **OpenRouter API Key**: This app uses OpenRouter to access different AI models. 
   - Go to [openrouter.ai](https://openrouter.ai/)
   - Create an account and add some credits
   - Go to Settings -> Keys and create a new API key. You will need this key when you first open the app!

---

## Installation & Running (Automatic Way - Easiest)

We've provided simple click-and-run scripts for both Mac and Windows users. 
You can place a convenient icon on your Desktop with one click!

### For Windows 🪟
**Step 1: Install (First time only)**
- Double-click the **`install.bat`** file in this folder.
- A black window will appear and download the required files. Wait until it says "Installation Complete" and asks you to press any key.

**Step 2: Create a Desktop Icon (Optional but recommended)**
- Double-click **`Create_Shortcut_Windows.bat`**. This creates a handy icon named "Start Document Converter" on your Desktop.

**Step 3: Run the App**
- Double-click your new Desktop icon (or **`start.bat`** in this folder).
- A black window will open to start the server, and **your web browser will open automatically** to the app.

### For Mac 🍏
**Step 1: Install (First time only)**
- Double-click the **`install.command`** file in this folder.
- A terminal window will open and download the required files. Wait until it says "Installation Complete".
- *Note: If Mac says "cannot be opened because it is from an unidentified developer", Right-click the file and select "Open".*

**Step 2: Create a Desktop Icon (Optional but recommended)**
- Double-click **`Create_Shortcut_Mac.command`**. This creates an alias named "Start Document Converter" on your Desktop.

**Step 3: Run the App**
- Double-click your new Desktop icon (or **`start.command`** in this folder).
- A terminal window will open, and **your web browser will open automatically** to the app.

---

## Installation & Running (Terminal Way - For Advanced Users)

If you prefer using the command line:

1. Open your Terminal (Mac) or Command Prompt / PowerShell (Windows).
2. Navigate to this folder:
   ```bash
   cd path/to/this/folder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm start
   ```
5. Your default web browser will automatically open to `http://localhost:3002`.

---

## First Time Setup (API Key)

When you open the app in your browser for the first time:
1. The app will welcome you and ask for an API key.
2. Paste your **OpenRouter API Key** in the designated field.
3. Click "Save Settings".
4. You're ready to start dragging and dropping PDFs or DOCX files!

## System Dependencies (Optional but Recommended)
For the best conversion quality (especially for PDFs):
- **Mac**: Install `poppler` using Homebrew (`brew install poppler`)
- **Windows**: Download [poppler for Windows](http://blog.alivate.com.au/poppler-windows/) and add the `bin` folder to your system PATH.
If not installed, the app will attempt to use a fallback method.
