<img width="1280" height="640" alt="git (1)" src="https://github.com/user-attachments/assets/8920b256-2ba8-4988-b824-5351134eb4bd" />



# Name-Lock 🎯


## Basic Details
### Team Name: SpongeBob


### Team Members
- Team Lead: Abhinav I - Lourdes Matha College of Science and Technology
- Member 2: Arjun S Krishna - Lourdes Matha College of Science and Technology
  

### Project Description
Website is all about trolling people and wasting their time.
### The Problem (that doesn't exist)
Making username and password.
### The Solution (that nobody asked for)
we are asking to solve quiz and fun games to proceed.
## Technical Details
### Technologies/Components Used
For Software:
- [Languages used] : Python , HTML , JavaScript , and CSS
- [Frameworks used] : Vanilla and Native Web Platform APIs
- [Libraries used] : Python and JavaScript
- [Tools used] : Git, GitHub Pages, Antigravity IDE / VS Code, and zsh / macOS Terminal



### Implementation
For Software:
### Software Requirements / Software Used

- **Operating System**: macOS / Windows 10/11 / Linux / Android / iOS
- **Runtime Environment**: 
  - Modern Web Browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge)
  - Python 3.8+ (for local backend server & captcha generation)
- **Programming Languages**: HTML5, CSS3, JavaScript (ES6+), Python 3
- **Development Tools / IDE**: Visual Studio Code / Antigravity IDE
- **Version Control & Hosting**:
  - Git (Version Control)
  - GitHub (Source Code Repository)
  - GitHub Pages (Cloud Web Deployment & 24/7 Hosting)
- **Command Line / Shell**: Terminal (macOS/Linux) / PowerShell or CMD (Windows)

# Installation
# 1. Clone the project repository
git clone https://github.com/AbhinavIndualal/Name-Lock.git
cd Name-Lock

# 2. Install required Python packages
pip install svgwrite drawsvg

# 3. Start the application server
python3 server.py


# Run
# Run the local application server (accessible on PC & mobile via LAN)
python3 server.py

# Or run directly in the default browser without a server
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Optional: Run script to generate new CAPTCHA graphics
python3 captcha_generator.py
python3 drawsvg_captcha_generator.py


### Project Documentation
For Software: # Software Project Documentation

## 1. Project Overview
* **Project Name**: Name-Lock (Night Shift Interactive Web Experience)
* **Type**: Progressive Web Application (PWA) / Gamified Puzzle System
* **Description**: A multi-stage interactive web application featuring gamified verification challenges, minigames (Car Dodge, Ping Pong, Sudoku, 3D Coin Flip), and dynamic input validation with cross-platform responsiveness for desktop and mobile devices.
* **Live Deployment**: [https://abhinavindualal.github.io/Name-Lock/](https://abhinavindualal.github.io/Name-Lock/)
* **Repository**: [https://github.com/AbhinavIndualal/Name-Lock](https://github.com/AbhinavIndualal/Name-Lock)

---

## 2. Software & System Requirements

### Software Requirements
* **Operating System**: Windows 10/11, macOS, Linux, Android, or iOS
* **Runtime / Environment**:
  * Any modern web browser (Google Chrome, Safari, Mozilla Firefox, Microsoft Edge)
  * Python 3.8+ (for local HTTP server & CAPTCHA generation)
* **Code Editor / IDE**: Visual Studio Code / Antigravity IDE
* **Version Control**: Git & GitHub

### Hardware Requirements
* **Processor**: Minimum Dual-core 1.6 GHz or equivalent mobile CPU
* **RAM**: 2 GB minimum (4 GB recommended)
* **Storage**: Less than 50 MB available disk space
* **Display**: Responsive from 320px (mobile) to 4K desktop screens
* **Input**: Mouse, Keyboard, or Touchscreen

---

## 3. Technology Stack

* **[Languages used]**:
  * **HTML5**: Semantic document layout across 13 interactive pages.
  * **CSS3**: Responsive flexbox/grid layout, 3D perspective transforms, custom keyframe animations, glassmorphism UI, and touch optimization.
  * **JavaScript (ES6+)**: Game loops, collision math, canvas rendering, DOM manipulation, and input verification.
  * **Python 3**: Multi-threaded server script and vector captcha generators.
* **[Frameworks used]**:
  * **None (Pure / Vanilla Web Architecture)**: Zero external web frameworks (no React, Angular, or Django needed) ensuring instant load times.
* **[Libraries used]**:
  * **Python Standard Library**: `http.server`, `socket`, `pathlib`, `json`.
  * **Third-Party Python Libraries**: `svgwrite`, `drawsvg` (for vector CAPTCHA generation).
  * **JavaScript Libraries**: Zero third-party JS dependencies.
* **[Tools used]**:
  * **Git**: Distributed version control.
  * **GitHub & GitHub Pages**: Remote hosting and 24/7 cloud static deployment.
  * **Browser DevTools**: Responsive mobile viewport testing and performance profiling.

---

## 4. Module & Feature Description

1. **Authentication & Validation Modules**:
   * `username.html` & `password.html`: Progressive rule-based validation engine with visual feedback, shake animations, and requirement counters.
2. **Minigames & Interactive Puzzles**:
   * `car.html`: 2D obstacle avoidance game rendered via HTML5 Canvas with dual keyboard and mobile touch controls.
   * `pingpong.html`: Dynamic physics paddle game with mouse follow and mobile touch-drag steering.
   * `sudoku.html`: Interactive numerical puzzle grid with real-time rule and conflict checking.
   * `coin.html`: Realistic 3D perspective coin-flip simulation with physics animations.
   * `game.html`: Grid-based image CAPTCHA verification system.
3. **Celebration & Feedback Modules**:
   * `congratulations.html`, `celebration.html`, `quiz.html`: Reward states, dynamic confetti effects, and congratulatory transitions.
4. **Mobile & Cross-Platform Support**:
   * `manifest.json` & `icon.svg`: Progressive Web App (PWA) configuration allowing the website to be installed to mobile home screens.
   * Touch event listeners with `touch-action: none` to prevent screen dragging during gameplay.

---

## 5. Installation Guide

```bash
# Step 1: Clone the repository from GitHub
git clone https://github.com/AbhinavIndualal/Name-Lock.git

# Step 2: Navigate to the project directory
cd Name-Lock

# Step 3: Install optional Python dependencies (for CAPTCHA generators)
pip install svgwrite drawsvg
```

---

## 6. Execution & Run Commands

```bash
# Option 1: Start the local multi-device development server
python3 server.py
# (Accessible at http://localhost:8000 on PC and via local LAN IP on mobile)

# Option 2: Open directly in your default web browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux

# Option 3: Optional scripts to generate new CAPTCHA images
python3 captcha_generator.py
python3 drawsvg_captcha_generator.py
```

---

## 7. Cloud Deployment & Hosting

* **Platform**: GitHub Pages
* **Deployment Source**: Branch: `main` | Folder: `/ (root)`
* **Status**: Automated 24/7 uptime with zero server maintenance required.
* **Public URL**: `https://abhinavindualal.github.io/Name-Lock/`

# Screenshots (Add at least 3)
![Screenshot1](Add screenshot 1 here with proper name)
*Add caption explaining what this shows*
<img width="2792" height="1640" alt="brave_screenshot_prismatic-gumdrop-1fd81a netlify app" src="https://github.com/user-attachments/assets/bfa27bae-ca6e-4764-889c-f8925b2059a6" />



![Screenshot2](Add screenshot 2 here with proper name)
*Add caption explaining what this shows*
<img width="2492" height="1604" alt="image" src="https://github.com/user-attachments/assets/6632d37a-8061-48ad-973e-b96b1a601cd4" />


![Screenshot3](Add screenshot 3 here with proper name)
*Add caption explaining what this shows*
<img width="2898" height="1644" alt="image" src="https://github.com/user-attachments/assets/049725e6-88e6-4f07-a84c-64c7838822c3" />





## Team Contributions
- Abhinav I: Creative ideas and some programming
- Arjun S Krishna: Ideas and also coded some major parts of the website.


---
Made with ❤️ at TinkerHub Useless Projects 

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--26-26?link=https%3A%2F%2Ftinkerhub.org%2Fevents%2F1M8ORET9A1%2Fuseless-projects-3.0)



