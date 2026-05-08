# 💌 A Letter for Yvette

An interactive, romantic digital love letter experience built with vanilla JavaScript, HTML5, and CSS3.

## 🌸 Features

- **Interactive Envelope**: Click to open and reveal the letter
- **Photo Gallery**: Beautifully animated gallery of 7 photos with captions
- **Love Letter**: A heartfelt letter with elegant typography
- **The Question**: An interactive proposal-style question with escaping "No" button
- **Yes Celebration**: Confetti animation and celebration screen
- **Music Player**: Background music integration with play/pause control
- **Responsive Design**: Works beautifully on mobile and desktop
- **Animated Elements**: Falling petals, twinkling stars, floating animations

## 📁 Project Structure

```
.
├── index.html                          # Main HTML file
├── script.js                           # JavaScript functionality
├── styles.css                          # Styling and animations
├── Sleep Token - Caramel-yt.savetube.me 2.mp3  # Background music
├── Snapchat-695293383.jpg             # Photos (7 images total)
├── Snapchat-1299161064.jpg
├── Snapchat-363811885.jpg
├── Snapchat-1346830605.jpg
├── Snapchat-791287002.jpg
├── Snapchat-945642693.jpg
├── WhatsApp Image 2026-05-08 at 12.21.38 PM.jpg
├── README.md                           # This file
└── .gitignore                          # Git ignore rules
```

## 🚀 How to View

### Option 1: Direct File (Recommended for best experience)
1. Open `index.html` in your web browser
2. Click the envelope to begin

### Option 2: Local Server (For better file handling)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if installed)
npx http-server
```
Then open `http://localhost:8000` in your browser.

## 🎯 How It Works

1. **Screen 1 - Envelope**: Click the envelope with the 🌸 seal to open it
2. **Screen 2 - Gallery**: View the photo gallery, then click "Read the letter"
3. **Screen 3 - Letter**: Read the love letter, then click "I have one question"
4. **Screen 4 - Question**: Answer the question
   - Click **"Yes, Tunmise"** → See celebration with confetti
   - Click **"No..."** → Button will run away, after 5 attempts shows humorous page
5. **Screen 5 - Celebration**: Final "She said Yes!" screen with celebration

### Music Player
- Appears after opening the envelope
- Click the music player icon (bottom right) to play/pause "Caramel" by Sleep Token
- Music loops continuously while playing

## 🎨 Design Features

- **Color Palette**: Rose (#c8445a), Blush (#f7c5d0), Gold (#d4a853), Cream (#fdf6ef), Deep (#1a0a0f)
- **Fonts**: Playfair Display, Cormorant Garamond, Dancing Script
- **Animations**: Smooth transitions, floating effects, twinkling stars, falling petals, confetti

## 💻 Browser Compatibility

Works best on modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Credits

- **Music**: "Caramel" by Sleep Token
- **Fonts**: Google Fonts
- **Design**: Hand-crafted with ❤️ and a lot of CSS

## 📝 Notes

- All images are loaded locally from the project folder
- Audio file loops when playing
- Responsive design adapts to all screen sizes
- All animations use CSS for smooth performance

## 🛠️ Customization

To customize this experience:

1. **Change images**: Replace the 7 image files with your own photos
2. **Update captions**: Edit the `photos` array in `script.js` (lines 43-50)
3. **Modify letter**: Edit the letter content in `index.html` (lines 65-131)
4. **Change music**: Replace the MP3 file and update path in `script.js`
5. **Update colors**: Modify CSS variables in `styles.css` (lines 1-7)

## 📧 Contact

Questions? Feel free to reach out!

---

**Made with ❤️ from Bismark to Yvette** 🌸💗🌹
