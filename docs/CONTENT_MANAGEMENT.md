# Content Management Guide 📝

Easy guide for teachers and administrators to update website content.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Changing Text](#changing-text)
3. [Adding New Sections](#adding-new-sections)
4. [Managing Languages](#managing-languages)
5. [Updating Quiz Questions](#updating-quiz-questions)
6. [Adding Images](#adding-images)
7. [Changing Colors](#changing-colors)
8. [Safety Guidelines](#safety-guidelines)

---

## Quick Start

### What You Need

- ✅ Text editor (Notepad++, VS Code, or even regular Notepad)
- ✅ Web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Access to website files

### Basic Workflow

1. **Make a backup** (copy all files to a safe place)
2. **Edit files** on your computer
3. **Test locally** in browser
4. **Upload to website** when working
5. **Test online** to confirm

⚠️ **Important:** Always keep backups before making changes!

---

## Changing Text

### Step 1: Find the Text

All text is stored in one file: `js/translations.js`

**Example:** To change the welcome message:

1. Open `js/translations.js` in text editor
2. Search for the current text (like "Welcome to Your New School!")
3. You'll find it looks like this:

```javascript
"hero.title": "Welcome to Your New School!",
```

### Step 2: Change in ALL Languages

❗ **Important:** Change text in ALL 6 languages, not just one!

Languages in the file:
- `en` = English
- `ar` = Arabic
- `uk` = Ukrainian
- `da` = Danish
- `ru` = Russian
- `pt` = Portuguese

**Example:** Changing welcome message:

```javascript
// English
translations.en = {
    "hero.title": "Welcome to Denmark School!", // Changed here
    // ... other text
};

// Arabic
translations.ar = {
    "hero.title": "مرحباً بك في مدرسة الدنمارك!", // Changed here
    // ... other text
};

// Do the same for uk, da, ru, pt
```

### Step 3: Save and Test

1. **Save** the file
2. **Open** `index.html` in browser
3. **Test** each language button
4. **Verify** text appears correctly

---

## Adding New Sections

### Example: Adding "School Lunch" Section

**Step 1: Add HTML Structure**

Open `index.html` and add after any existing section:

```html
<section id="lunch" class="content-section lunch-section">
    <div class="container">
        <div class="section-header">
            <span class="section-emoji">🍽️</span>
            <h2 data-i18n="lunch.title">School Lunch</h2>
        </div>
        <div class="content-card">
            <p data-i18n="lunch.intro">Information about lunch at school</p>
            <div class="info-grid">
                <div class="info-item">
                    <span class="info-emoji">🥗</span>
                    <h3 data-i18n="lunch.info1.title">Healthy Food</h3>
                    <p data-i18n="lunch.info1.text">We serve healthy meals</p>
                </div>
                <!-- Add more info-items as needed -->
            </div>
        </div>
    </div>
</section>
```

**Step 2: Add Navigation Link**

In `index.html`, find the navigation section and add:

```html
<a href="#lunch" class="nav-item" data-i18n="nav.lunch">
    <span class="nav-emoji">🍽️</span>
    <span>Lunch</span>
</a>
```

**Step 3: Add Translations**

In `js/translations.js`, add to EACH language:

```javascript
// English
"nav.lunch": "Lunch",
"lunch.title": "School Lunch",
"lunch.intro": "Information about lunch at school",
"lunch.info1.title": "Healthy Food",
"lunch.info1.text": "We serve healthy meals",

// Repeat for ar, uk, da, ru, pt with appropriate translations
```

**Step 4: Save and Test**

- Save all files
- Refresh browser
- Check new section appears
- Test all languages

---

## Managing Languages

### Adding a 7th Language (Example: Spanish)

**Step 1: Copy English Translations**

In `js/translations.js`, add at the end:

```javascript
// Add Spanish translations
translations.es = {
    "site.title": "Bienvenido a la escuela en Dinamarca",
    "hero.title": "¡Bienvenido a tu nueva escuela!",
    // ... copy ALL keys from English and translate
};
```

**Step 2: Add Language Button**

In `index.html`, in the language selector section:

```html
<button class="language-button" data-lang="es">🇪🇸 Español</button>
```

**Step 3: Test**

- Save files
- Refresh browser
- Click Spanish button
- Verify translations appear

### Getting Professional Translations

**Free options:**
- Ask parent volunteers who speak the language
- Contact local community centers
- Ask embassy or consulate for help

**Paid options:**
- Professional translation services
- Ensure translator knows:
  - Simple language for 10-year-olds
  - Education terminology
  - Cultural context

⚠️ **Important:** Google Translate is okay for rough drafts, but always have a native speaker review!

---

## Updating Quiz Questions

### Editing Existing Questions

**In `index.html`, find:**

```html
<div class="quiz-question" data-quiz="1">
    <p class="question-text" data-i18n="quiz.q1.question">Question text?</p>
    <div class="quiz-options">
        <button class="quiz-option" data-correct="false">Wrong answer</button>
        <button class="quiz-option" data-correct="true">Correct answer</button>
    </div>
</div>
```

**Change:**
1. Update `data-i18n` key in translations.js
2. Save and test

### Adding New Quiz Question

**Step 1: Add HTML**

After the last question in `index.html`:

```html
<div class="quiz-question" data-quiz="4" style="display: none;">
    <p class="question-text" data-i18n="quiz.q4.question">New question?</p>
    <div class="quiz-options">
        <button class="quiz-option" data-correct="false" data-i18n="quiz.q4.option1">
            <span class="option-emoji">❌</span>
            <span>Wrong answer 1</span>
        </button>
        <button class="quiz-option" data-correct="true" data-i18n="quiz.q4.option2">
            <span class="option-emoji">✅</span>
            <span>Correct answer</span>
        </button>
        <button class="quiz-option" data-correct="false" data-i18n="quiz.q4.option3">
            <span class="option-emoji">❌</span>
            <span>Wrong answer 2</span>
        </button>
    </div>
    <div class="quiz-feedback"></div>
</div>
```

**Step 2: Update Question Count**

In `js/main.js`, find and change:

```javascript
const totalQuestions = 4;  // Changed from 3
```

**Step 3: Add Translations**

In `js/translations.js` for ALL languages:

```javascript
"quiz.q4.question": "Your new question?",
"quiz.q4.option1": "Wrong answer 1",
"quiz.q4.option2": "Correct answer",
"quiz.q4.option3": "Wrong answer 2",
```

---

## Adding Images

Currently, the site uses emojis (like 😊, 🏫, etc.) instead of images because:
- ✅ Load instantly
- ✅ Work everywhere
- ✅ No file management
- ✅ Colorful and friendly

### If You Want Real Images

**Step 1: Prepare Images**

- **Size:** 800x600 pixels or smaller
- **Format:** JPEG for photos, PNG for graphics
- **File size:** Under 200KB each
- **Compress:** Use [TinyPNG.com](https://tinypng.com)

**Step 2: Add to Project**

1. Create `images` folder (if it doesn't exist)
2. Put image files inside
3. Name clearly: `happy-student.jpg`, `classroom.jpg`

**Step 3: Replace Emoji with Image**

In `index.html`, find:

```html
<span class="info-emoji">😊</span>
```

Replace with:

```html
<img src="images/happy-student.jpg" alt="Happy student" class="info-image">
```

**Step 4: Add CSS Style**

In `css/styles.css`, add:

```css
.info-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
}
```

**Step 5: Upload and Test**

- Upload HTML file
- Upload CSS file
- Upload images folder
- Test that images appear

---

## Changing Colors

All colors are defined in one place: `css/styles.css`

**Step 1: Find Color Variables**

Open `css/styles.css` and find the `:root` section at the top:

```css
:root {
    --primary-color: #4A90E2;      /* Main blue */
    --secondary-color: #F5A623;    /* Orange */
    --success-color: #7ED321;      /* Green */
    --danger-color: #D0021B;       /* Red */
}
```

**Step 2: Change Colors**

Replace the hex codes:

```css
:root {
    --primary-color: #FF6B9D;      /* Pink */
    --secondary-color: #FFA500;    /* Different orange */
    --success-color: #00D084;      /* Different green */
    --danger-color: #E74C3C;       /* Different red */
}
```

**Color Pickers:**
- [Google: "color picker"](https://www.google.com/search?q=color+picker)
- [Coolors.co](https://coolors.co) - Generate palettes
- [Adobe Color](https://color.adobe.com)

**Step 3: Save and Test**

- Save CSS file
- Refresh browser
- Colors change throughout site

⚠️ **Tip:** Keep colors bright and cheerful for children, but ensure good contrast for readability!

---

## Safety Guidelines

### Content Rules

✅ **DO:**
- Use simple, clear language
- Keep tone friendly and positive
- Include visual aids (emojis, icons)
- Make content age-appropriate (9-11 years)
- Test with actual children if possible
- Get feedback from teachers

❌ **DON'T:**
- Add scary or threatening content
- Use complicated words
- Include sensitive personal information
- Add external links without checking them
- Collect student data or information
- Add contact forms without school approval

### Privacy Protection

**Never include:**
- ❌ Student names or photos (without permission)
- ❌ Teacher personal contact information
- ❌ School's exact address
- ❌ Any form that collects personal data
- ❌ Tracking tools without approval

**If you need contact info:**
- ✅ Use general school email
- ✅ Link to official school website
- ✅ Provide office phone number only

### Accessibility Requirements

**Always ensure:**
- ✅ Text is readable (large enough)
- ✅ Colors have good contrast
- ✅ Site works on mobile phones
- ✅ Content makes sense in all languages
- ✅ Images have descriptive alt text
- ✅ Site works without JavaScript (mostly)

### Testing Checklist

Before publishing changes:

- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on computer
- [ ] Test ALL 6 languages
- [ ] Check Arabic displays right-to-left
- [ ] Verify quiz works
- [ ] Ask another person to review
- [ ] Check spelling in all languages
- [ ] Ensure content is age-appropriate
- [ ] Verify all links work

---

## Common Tasks - Quick Reference

### Task: Change Main Welcome Text
1. Open `js/translations.js`
2. Find `"hero.title"` in ALL languages
3. Change text
4. Save and test

### Task: Add New Info Box
1. Copy existing info-item in `index.html`
2. Change emoji and data-i18n keys
3. Add translations in `js/translations.js`
4. Save and test

### Task: Remove a Section
1. Find section in `index.html` (look for `<section id="..."`)
2. Delete entire section
3. Remove navigation link
4. Remove translations (optional, doesn't hurt to keep)
5. Save and test

### Task: Change Section Order
1. In `index.html`, cut entire `<section>` tag
2. Paste in new position
3. Save and test

### Task: Update School-Specific Info
1. Find relevant section in `index.html`
2. Update text in `js/translations.js`
3. Example: school start time, lunch schedule
4. Update for ALL languages
5. Save and test

---

## Getting Help

### When Something Goes Wrong

1. **Don't panic!**
2. **Restore from backup**
3. **What went wrong?**
   - Open browser console (press F12)
   - Look for red error messages
   - Note the error text

4. **Common fixes:**
   - Missing closing tag? Count brackets `{ }`
   - Missing comma? Check after each line
   - Wrong file path? Verify `href` and `src` paths
   - Typo in data-i18n? Check spelling exactly

### Resources

**Learn basics:**
- [W3Schools HTML](https://w3schools.com/html)
- [W3Schools CSS](https://w3schools.com/css)
- [MDN Web Docs](https://developer.mozilla.org)

**Get help:**
- School IT department
- Parent volunteers with web skills
- Local web developers
- Online forums (Stack Overflow)

### File Backup Strategy

**Weekly:**
- Copy entire `SchoolProject` folder
- Name it with date: `SchoolProject-2024-01-15`
- Store in safe place

**Before major changes:**
- Make backup immediately before
- Test changes locally first
- Only upload when working

**Cloud backup:**
- Use Google Drive, Dropbox, or OneDrive
- Keep last 3 versions
- Share access with IT staff

---

## Content Ideas

### Seasonal Updates

**Fall/Back to School:**
- "Your First Day" section
- "What to Bring" checklist
- Meet your teacher tips

**Winter/Holidays:**
- Danish holiday traditions
- Winter break schedule
- New year goals

**Spring:**
- Upcoming tests/exams
- Summer plans
- End of year celebration

**Summer:**
- Summer school info
- Reading lists
- Next year preparation

### Interactive Ideas

**Future enhancements:**
- ✨ Virtual school tour (photos)
- ✨ "Meet our teachers" section
- ✨ Student success stories
- ✨ Parent testimonials
- ✨ Video introductions
- ✨ Printable worksheets
- ✨ More quiz questions
- ✨ Vocabulary builder
- ✨ Danish phrases audio

---

## Success Stories

**Collect feedback:**
- Student surveys (keep anonymous)
- Teacher observations
- Parent comments
- Usage statistics

**Share success:**
- School newsletter
- Parent meetings
- Social media (with permission)
- Other schools may want to use it!

---

**Remember:** The goal is helping children feel welcome and safe. Keep content simple, positive, and supportive! 🌟

---

**Need more help?** Check the main [README.md](../README.md) or [DEPLOYMENT.md](DEPLOYMENT.md).
