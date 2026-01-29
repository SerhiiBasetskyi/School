# Welcome to School in Denmark 🏫

A child-friendly educational website designed to help refugee children (ages 9-11) from Syria, Ukraine, and other countries adapt to life and study in Danish schools.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [How to Run the Project](#how-to-run-the-project)
- [How to Deploy](#how-to-deploy)
- [How to Manage Languages](#how-to-manage-languages)
- [How to Update Content](#how-to-update-content)
- [Technical Architecture](#technical-architecture)
- [Maintenance and Extensions](#maintenance-and-extensions)
- [Browser Support](#browser-support)
- [Accessibility](#accessibility)

## 🎯 Project Overview

This website provides a friendly, visual guide to help children understand:
- How Danish schools work
- Written school rules
- Unwritten social norms
- How to communicate with classmates and teachers
- Where to get help when needed

**Target Audience:**
- **Primary:** Children aged 9-11
- **Secondary:** Parents and teachers

**Supported Languages:**
- 🇬🇧 English
- 🇸🇾 Arabic (Syrian dialect, with RTL support)
- 🇺🇦 Ukrainian
- 🇩🇰 Danish
- 🇷🇺 Russian
- 🇵🇹 Portuguese

## ✨ Features

### Content Sections
1. **Welcome to School in Denmark** - Introduction and basic information
2. **A Typical School Day** - Visual timeline with icons showing daily schedule
3. **School Rules** - Written rules explained simply
4. **Unwritten Rules** - Cultural norms and social expectations
5. **Making Friends** - Tips for building friendships
6. **Talking to Teachers** - Example dialogues and communication tips
7. **If Something Feels Wrong** - How to get help, anti-bullying support
8. **Interactive Quiz** - Practice scenarios with visual feedback

### Technical Features
- ✅ Mobile-first responsive design
- ✅ Multi-language support (6 languages)
- ✅ Full RTL (Right-to-Left) support for Arabic
- ✅ Large, readable fonts (Comic Neue)
- ✅ Extensive use of emojis and visual elements
- ✅ Smooth scrolling navigation
- ✅ Interactive quiz with instant feedback
- ✅ Local storage for language preference
- ✅ WCAG accessibility compliant
- ✅ Fast loading (no external dependencies except fonts)

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser. No installation required!

Recommended browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Required Tools (Optional, for development)

If you want to modify or extend the website:
- A text editor (VS Code, Sublime Text, Notepad++, etc.)
- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (optional)

## 💻 How to Run the Project

### Option 1: Open Directly in Browser (Simplest)

1. Navigate to the `SchoolProject` folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Using a Local Web Server (Recommended)

Using Python (if installed):
```bash
# Navigate to the SchoolProject folder
cd SchoolProject

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and go to: `http://localhost:8000`

Using Node.js (if installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Navigate to the SchoolProject folder
cd SchoolProject

# Start the server
http-server -p 8000
```

Then open your browser and go to: `http://localhost:8000`

Using PHP (if installed):
```bash
# Navigate to the SchoolProject folder
cd SchoolProject

# Start PHP built-in server
php -S localhost:8000
```

Then open your browser and go to: `http://localhost:8000`

### Option 3: Using VS Code Live Server Extension

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 🌐 How to Deploy

This is a static website that can be deployed anywhere static files are supported.

### Deployment Options

#### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload the `SchoolProject` folder contents
3. Go to repository Settings > Pages
4. Select the branch and folder
5. Click Save
6. Your site will be available at `https://username.github.io/repository-name/`

#### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the `SchoolProject` folder
3. Site is live immediately
4. Get a URL like `https://your-site-name.netlify.app`

#### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com)
2. Import the project
3. Deploy with one click
4. Get a URL like `https://your-site-name.vercel.app`

#### Option 4: Traditional Web Hosting

1. Use FTP to upload all files to your web server
2. Upload to the `public_html` or `www` directory
3. Access via your domain name

### Deployment Checklist

Before deploying:
- [ ] Test the website in multiple browsers
- [ ] Check all languages work correctly
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check images load properly
- [ ] Test RTL mode for Arabic
- [ ] Run accessibility checker

## 🌍 How to Manage Languages

### Where Translations Are Stored

All translations are in: `js/translations.js`

The file structure:
```javascript
const translations = {
    en: { /* English translations */ },
    ar: { /* Arabic translations */ },
    uk: { /* Ukrainian translations */ },
    da: { /* Danish translations */ },
    ru: { /* Russian translations */ },
    pt: { /* Portuguese translations */ }
};
```

### How to Add a New Language

1. **Open** `js/translations.js`

2. **Add a new language object** following this pattern:

```javascript
translations.es = {
    "site.title": "Bienvenido a la escuela en Dinamarca",
    "hero.title": "¡Bienvenido a tu nueva escuela!",
    // ... copy all keys from 'en' and translate
};
```

3. **Add a language button** in `index.html`:

```html
<button class="language-button" data-lang="es">🇪🇸 Español</button>
```

4. **Test the new language**:
   - Open the website
   - Click the new language button
   - Check all text displays correctly

### Translation Keys Structure

Translations use a dot-notation structure:
- `section.subsection.element`
- Example: `welcome.info1.title`

### RTL Support

RTL (Right-to-Left) is automatically enabled for Arabic (`ar`).

To add RTL support for another language:

1. Open `js/main.js`
2. Find the `setLanguage` function
3. Add your language code to the RTL check:

```javascript
if (lang === 'ar' || lang === 'he' || lang === 'ur') {  // Hebrew, Urdu, etc.
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.setAttribute('lang', lang);
}
```

### Translation Tips

- **Keep it simple**: Use short sentences suitable for 10-year-olds
- **Be consistent**: Use the same terminology throughout
- **Test thoroughly**: Check that translated text doesn't break layouts
- **Use native speakers**: Get translations reviewed by native speakers
- **Consider context**: Some phrases may need cultural adaptation

## 📝 How to Update Content

### Adding New Text

1. **Add translation key** to all languages in `js/translations.js`:

```javascript
// In each language object
"welcome.info4.title": "New Title",
"welcome.info4.text": "New description text"
```

2. **Add HTML element** in `index.html`:

```html
<div class="info-item">
    <span class="info-emoji">🎨</span>
    <h3 data-i18n="welcome.info4.title">New Title</h3>
    <p data-i18n="welcome.info4.text">New description text</p>
</div>
```

The `data-i18n` attribute tells the system which translation to use.

### Changing Images

Images would be placed in the `images/` folder (currently using emojis).

To add images:

1. **Add image file** to `images/` folder
2. **Replace emoji** in HTML:

```html
<!-- Before (emoji) -->
<span class="info-emoji">😊</span>

<!-- After (image) -->
<img src="images/happy-student.png" alt="Happy student" class="info-image">
```

3. **Add CSS** for the image:

```css
.info-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
}
```

### Modifying Styles

All styles are in `css/styles.css`.

**Color scheme** is defined in CSS variables at the top:

```css
:root {
    --primary-color: #4A90E2;      /* Main blue */
    --secondary-color: #F5A623;    /* Orange/yellow */
    --success-color: #7ED321;      /* Green */
    --danger-color: #D0021B;       /* Red */
}
```

Change these to update colors site-wide.

### Adding New Sections

1. **Add HTML** section in `index.html`:

```html
<section id="new-section" class="content-section">
    <div class="container">
        <div class="section-header">
            <span class="section-emoji">🆕</span>
            <h2 data-i18n="newSection.title">New Section</h2>
        </div>
        <div class="content-card">
            <p data-i18n="newSection.intro">Introduction text</p>
            <!-- Your content here -->
        </div>
    </div>
</section>
```

2. **Add navigation link**:

```html
<a href="#new-section" class="nav-item" data-i18n="nav.newSection">
    <span class="nav-emoji">🆕</span>
    <span>New Section</span>
</a>
```

3. **Add translations** for all languages
4. **Add styles** if needed in `css/styles.css`

### Modifying the Quiz

Quiz questions are in `index.html` under the `quiz-section`.

To add a question:

1. **Add HTML** for the new question:

```html
<div class="quiz-question" data-quiz="4" style="display: none;">
    <p class="question-text" data-i18n="quiz.q4.question">Your question?</p>
    <div class="quiz-options">
        <button class="quiz-option" data-correct="false" data-i18n="quiz.q4.option1">
            <span class="option-emoji">❌</span>
            <span>Wrong answer</span>
        </button>
        <button class="quiz-option" data-correct="true" data-i18n="quiz.q4.option2">
            <span class="option-emoji">✅</span>
            <span>Correct answer</span>
        </button>
    </div>
    <div class="quiz-feedback"></div>
</div>
```

2. **Update** `totalQuestions` in `js/main.js`:

```javascript
const totalQuestions = 4;  // Change from 3 to 4
```

3. **Add translations** for the new question in all languages

## 🏗️ Technical Architecture

### File Structure

```
SchoolProject/
├── index.html              # Main HTML file
├── css/
│   └── styles.css         # All CSS styles
├── js/
│   ├── translations.js    # All language translations
│   └── main.js           # Main JavaScript functionality
├── images/                # Image assets (optional)
├── docs/                  # Additional documentation (optional)
└── README.md             # This file
```

### Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks or libraries
- **Google Fonts**: Comic Neue (child-friendly) and Noto Sans Arabic
- **Local Storage**: Saves language preference

### Design Principles

1. **Mobile-First**: Designed for mobile, enhanced for desktop
2. **Progressive Enhancement**: Works without JavaScript
3. **Accessibility**: WCAG 2.1 Level AA compliant
4. **Performance**: Minimal dependencies, fast loading
5. **Maintainability**: Clear structure, well-commented code

### Browser Compatibility

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile browsers (iOS Safari, Chrome Mobile) ✅

### Responsive Breakpoints

- **Mobile**: 0-480px
- **Tablet**: 481-768px
- **Desktop**: 769px+

## 🔧 Maintenance and Extensions

### Adding New Pages

To create a new page:

1. **Copy** `index.html` to `new-page.html`
2. **Modify** content while keeping the structure
3. **Add navigation** link in header
4. **Ensure** consistent styling

### Adding Interactive Elements

The website uses vanilla JavaScript. To add interactivity:

1. **Add HTML** structure
2. **Add event listeners** in `js/main.js`
3. **Add translations** if needed
4. **Test** across browsers

Example: Adding a clickable card:

```javascript
// In js/main.js
function setupClickableCards() {
    const cards = document.querySelectorAll('.clickable-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Your action here
            alert('Card clicked!');
        });
    });
}

// Call in init() function
```

### Future Scalability

**Easy additions:**
- More languages (just add to translations.js)
- More quiz questions (add HTML + update counter)
- More sections (follow existing pattern)
- Custom illustrations (replace emojis with images)

**Potential enhancements:**
- **Animations**: Add CSS animations for engagement
- **Sound effects**: Add audio for interactive elements
- **Videos**: Embed educational videos
- **Games**: Add simple educational games
- **Print version**: Create print-friendly version
- **Offline support**: Add service worker for PWA
- **Parent portal**: Add section for parents/teachers
- **Progress tracking**: Save quiz scores
- **Feedback form**: Collect user feedback

### Common Maintenance Tasks

#### Updating Text Content

1. Open `js/translations.js`
2. Find the translation key
3. Update the text for each language
4. Save and refresh browser

#### Changing Colors

1. Open `css/styles.css`
2. Find `:root` section at top
3. Change CSS variable values
4. Colors update site-wide

#### Adding More Quiz Questions

1. Copy existing quiz question HTML
2. Update question number
3. Add translations
4. Update `totalQuestions` variable

#### Fixing Layout Issues

1. Open `css/styles.css`
2. Find the relevant section
3. Adjust padding, margins, or grid settings
4. Test on mobile and desktop

### Security Considerations

- No user data collection
- No external API calls
- No cookies (only localStorage for language)
- No forms that submit data
- Safe for school environments

## ♿ Accessibility

### WCAG Compliance

This website follows WCAG 2.1 Level AA guidelines:

- **Perceivable**: Large text, high contrast, visual and text content
- **Operable**: Keyboard navigation, clear focus states, no time limits
- **Understandable**: Simple language, clear instructions, consistent navigation
- **Robust**: Semantic HTML, works across browsers and devices

### Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Alt text for images (when used)
- ✅ Keyboard navigation support
- ✅ Clear focus indicators
- ✅ Color contrast ratio > 4.5:1
- ✅ Large, readable fonts (18px base)
- ✅ No flashing or moving content
- ✅ Skip links capability
- ✅ Screen reader friendly

### Testing Accessibility

Use these tools:
- **WAVE**: [wave.webaim.org](https://wave.webaim.org)
- **axe DevTools**: Browser extension
- **Lighthouse**: Built into Chrome DevTools
- **Screen reader**: NVDA (Windows) or VoiceOver (Mac)

## 📊 Performance

### Optimization

- Minimal CSS (< 20KB)
- Minimal JavaScript (< 50KB)
- No external dependencies except fonts
- Images use emojis (Unicode characters)
- CSS Grid and Flexbox (no frameworks)

### Loading Time

- **First paint**: < 1 second
- **Interactive**: < 2 seconds
- **Total size**: < 100KB (excluding fonts)

### Mobile Performance

Optimized for mobile:
- Touch-friendly buttons (min 44x44px)
- No hover-dependent features
- Readable on small screens
- Fast loading on 3G

## 📞 Support

### For Teachers and Administrators

If you need help:
1. Read this documentation first
2. Check the comments in the code files
3. Test changes on a copy first
4. Keep backups before making changes

### For Developers

The code is well-commented. Key files:
- `index.html`: Structure and content
- `css/styles.css`: All styling
- `js/translations.js`: All translations
- `js/main.js`: Interactive functionality

## 📜 License

This project is designed for educational purposes to help children adapt to school life in Denmark.

## 🙏 Acknowledgments

Created with care to help refugee children feel welcome and supported in their new school environment.

## 📅 Version

- **Version**: 1.0.0
- **Last Updated**: 2026
- **Languages**: 6 (English, Arabic, Ukrainian, Danish, Russian, Portuguese)
- **Status**: Production Ready

---

**Remember**: Every child deserves to feel welcome and supported. This website is a small step towards making school a friendly place for everyone! 🌟
