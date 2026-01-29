# Language Management Guide 🌍

Complete guide for managing the 6 languages and adding new ones.

## Current Languages

The website currently supports:

| Code | Language | Native Name | Direction | Status |
|------|----------|-------------|-----------|--------|
| `en` | English | English | LTR | ✅ Complete |
| `ar` | Arabic | العربية | RTL | ✅ Complete |
| `uk` | Ukrainian | Українська | LTR | ✅ Complete |
| `da` | Danish | Dansk | LTR | ✅ Complete |
| `ru` | Russian | Русский | LTR | ✅ Complete |
| `pt` | Portuguese | Português | LTR | ✅ Complete |

---

## Translation File Structure

All translations are in: **`js/translations.js`**

### File Organization

```javascript
const translations = {
    en: {
        // English translations
        "key.name": "English text"
    },
    ar: {
        // Arabic translations
        "key.name": "النص العربي"
    },
    // ... other languages
};
```

### Translation Keys

Keys use dot notation: `section.subsection.element`

**Categories:**
- `site.*` - Site metadata (title, etc.)
- `hero.*` - Hero section
- `nav.*` - Navigation menu
- `welcome.*` - Welcome section
- `schoolDay.*` - School day section
- `writtenRules.*` - Written rules section
- `unwrittenRules.*` - Unwritten rules section
- `friends.*` - Friends section
- `teachers.*` - Teachers section
- `help.*` - Help section
- `quiz.*` - Quiz questions and feedback
- `footer.*` - Footer messages

---

## How Translations Work

### 1. HTML Elements

In `index.html`, elements have a `data-i18n` attribute:

```html
<h2 data-i18n="welcome.title">Welcome to School in Denmark</h2>
```

### 2. JavaScript Loads Translation

When language button is clicked:
1. JavaScript reads the language code (`en`, `ar`, etc.)
2. Looks up translation key (`welcome.title`)
3. Replaces text with translated version
4. Updates all elements with `data-i18n`

### 3. RTL Support

For Arabic, the system:
- Sets `dir="rtl"` on HTML element
- Flips layout automatically with CSS
- Uses Arabic font (Noto Sans Arabic)

---

## Adding a New Language

### Example: Adding Spanish (Español)

**Step 1: Create Translation Object**

Open `js/translations.js` and add at the end:

```javascript
// Add Spanish translations
translations.es = {
    "site.title": "Bienvenido a la escuela en Dinamarca",
    "hero.title": "¡Bienvenido a tu nueva escuela!",
    "hero.subtitle": "Aprendamos sobre la escuela en Dinamarca juntos",
    "nav.welcome": "Bienvenida",
    "nav.schoolDay": "Día Escolar",
    // ... continue with ALL keys from English
};
```

**💡 Tip:** Copy the entire English section and translate each value.

**Step 2: Add Language Button**

In `index.html`, add to language selector:

```html
<button class="language-button" data-lang="es">🇪🇸 Español</button>
```

**Step 3: (Optional) Add RTL Support**

If your language is RTL (like Hebrew or Urdu), add to `js/main.js`:

```javascript
// In setLanguage function, find this line:
if (lang === 'ar') {

// Change to:
if (lang === 'ar' || lang === 'he' || lang === 'ur') {
    document.documentElement.setAttribute('dir', 'rtl');
}
```

**Step 4: Test**

1. Save all files
2. Open `index.html` in browser
3. Click Spanish button
4. Verify all text translates
5. Check for missing translations (will show key name)
6. Test on mobile device

---

## Translation Best Practices

### Writing for Children (Ages 9-11)

✅ **DO:**
- Use simple, short sentences
- Use common, everyday words
- Be friendly and encouraging
- Use active voice ("You can do this!")
- Break long text into short paragraphs

❌ **DON'T:**
- Use complex grammar or vocabulary
- Use idioms or slang (hard to translate)
- Use scary or negative language
- Assume cultural knowledge
- Use very long sentences

### Cultural Adaptation

**Not just translation - localization!**

Consider:
- **Time formats** (12h vs 24h)
- **School terminology** (might differ)
- **Cultural norms** (greetings, personal space)
- **Examples** (foods, activities)
- **Formality level** (formal vs informal)

**Example: "raise your hand"**
- In some cultures, this might not be common
- Add explanation: "When you want to speak, raise your hand so the teacher sees you"

### Getting Professional Translation

**Free resources:**
1. **Parent volunteers**
   - Send email to parents
   - Ask for native speakers
   - Provide English text

2. **Community centers**
   - Contact refugee support organizations
   - Cultural centers
   - Religious institutions

3. **Student teachers**
   - University language departments
   - Education programs
   - May help as project work

**Paid services:**
1. **Professional translators**
   - Specify: "simple language for children"
   - Provide context (school website)
   - Ask for education specialist

2. **Translation agencies**
   - Can handle multiple languages
   - Usually offer discounts for non-profits
   - Check if school has preferred vendor

### Quality Check Checklist

For each language:
- [ ] All keys have translations (no missing text)
- [ ] Text is age-appropriate (9-11 years old)
- [ ] Grammar is correct
- [ ] Spelling is correct
- [ ] Cultural references make sense
- [ ] Tone is friendly and welcoming
- [ ] No literal Google Translate (have native speaker review)
- [ ] Special characters display correctly (ü, é, ñ, etc.)
- [ ] Text fits in UI (not too long)
- [ ] Tested by native speaker
- [ ] Tested by a child (if possible)

---

## Language-Specific Notes

### English (en)
- **Audience:** Universal, international English
- **Style:** Simple, friendly, American/British neutral
- **Considerations:** Default language, template for others

### Arabic (ar)
- **Audience:** Syrian dialect preference, but understandable to all Arabic speakers
- **Direction:** RTL (Right-to-Left)
- **Font:** Noto Sans Arabic (included)
- **Considerations:** 
  - Test RTL layout carefully
  - Numbers and dates may need special handling
  - Some emoji may not display well in RTL

### Ukrainian (uk)
- **Audience:** Ukrainian refugees
- **Script:** Cyrillic
- **Considerations:**
  - Formal vs informal "you" (use informal for children)
  - Recent arrivals may appreciate references to Danish differences

### Danish (da)
- **Audience:** Native Danish speakers (teachers, helpers)
- **Considerations:**
  - Can use local school terminology
  - Can reference Danish culture directly
  - Useful for parent volunteers

### Russian (ru)
- **Audience:** Russian speakers (various countries)
- **Script:** Cyrillic
- **Considerations:**
  - Formal vs informal "you" (use informal)
  - Wide audience (Russia, Belarus, Kazakhstan, etc.)

### Portuguese (pt)
- **Audience:** Portuguese speakers
- **Variant:** European Portuguese preferred (closer to Denmark)
- **Considerations:**
  - Brazilian vs European Portuguese differ
  - If many Brazilian students, consider adding `pt-br` variant

---

## Testing Translations

### Manual Testing Process

1. **Switch to language**
   - Click language button
   - Verify button highlights

2. **Check each section**
   - Scroll through entire page
   - Look for untranslated text
   - Note: English text = missing translation

3. **Test interactive elements**
   - Click navigation links
   - Try quiz questions
   - Verify feedback messages

4. **Test on different devices**
   - Desktop computer
   - Tablet
   - Mobile phone
   - Different browsers

5. **Check RTL (for Arabic)**
   - Layout mirrors correctly
   - Text aligns right
   - Icons and emojis position correctly
   - Navigation flows right to left

### Automated Checks

**Check for missing translations:**

```javascript
// Run in browser console
const langs = ['en', 'ar', 'uk', 'da', 'ru', 'pt'];
const enKeys = Object.keys(translations.en);

langs.forEach(lang => {
    const missing = enKeys.filter(key => !translations[lang][key]);
    if (missing.length > 0) {
        console.log(`${lang}: Missing ${missing.length} keys:`, missing);
    } else {
        console.log(`${lang}: ✅ Complete`);
    }
});
```

**Check for untranslated text:**

Open each language, then:

```javascript
// Run in browser console
const elements = document.querySelectorAll('[data-i18n]');
let untranslated = 0;

elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.textContent.includes('.')) {
        console.log('Untranslated:', key, el.textContent);
        untranslated++;
    }
});

console.log(`Found ${untranslated} untranslated elements`);
```

---

## Managing Translation Updates

### When You Change Content

If you add or modify English text:

1. **Update translations.js**
   - Add/change key in English section

2. **Add to ALL other languages**
   - Copy key to each language
   - Translate the value
   - Or mark with `[TODO]` for later

3. **Test**
   - Check all languages
   - Note any `[TODO]` markers
   - Get translations before publishing

### Version Control for Translations

**Track changes:**

```javascript
// Add version comments
translations.en = {
    // Version 1.1 - Added lunch section
    "lunch.title": "School Lunch",
    // ...
};
```

**Keep changelog:**

```
CHANGELOG.md

## 2024-02-01 - Version 1.1
- Added lunch section (all languages)
- Updated welcome text (en, da)
- Fixed typo in friends section (uk)
```

---

## Advanced: Language Variants

### Adding Regional Variants

Example: British vs American English

```javascript
translations.en = {
    "color": "colour"  // British
};

translations['en-us'] = {
    "color": "color"   // American
};
```

Or: European vs Brazilian Portuguese

```javascript
translations.pt = {
    // European Portuguese
};

translations['pt-br'] = {
    // Brazilian Portuguese
};
```

### Handling Dialects

For Syrian Arabic vs Standard Arabic:

**Option 1:** Mix standard with Syrian words
```javascript
translations.ar = {
    // Use Modern Standard Arabic as base
    // Include Syrian dialect words where appropriate
    "hello": "مرحبا" // Universal
    "teacher": "أستاذ" // Syrian preference
};
```

**Option 2:** Create dialect variant
```javascript
translations['ar-sy'] = {
    // Syrian-specific
};

translations['ar-eg'] = {
    // Egyptian-specific  
};
```

---

## Future Language Additions

### Priority Languages for Denmark

Consider adding based on student population:
1. 🇹🇷 **Turkish** (`tr`)
2. 🇸🇴 **Somali** (`so`)
3. 🇵🇱 **Polish** (`pl`)
4. 🇹🇭 **Thai** (`th`)
5. 🇻🇳 **Vietnamese** (`vi`)
6. 🇦🇫 **Dari/Pashto** (`fa`, `ps`)
7. 🇪🇹 **Amharic** (`am`)
8. 🇮🇶 **Kurdish** (`ku`)

### Adding More Languages

**Process:**
1. Identify need (survey families)
2. Find translator
3. Create translation
4. Add button to interface
5. Test thoroughly
6. Announce to community

**Maintenance:**
- Update all languages when content changes
- Keep translations in sync
- Review annually for updates

---

## Translation Memory & Resources

### Reusable Phrases

Keep a glossary of common terms:

```
English -> Danish -> Arabic -> etc.

School -> Skole -> مدرسة
Teacher -> Lærer -> معلم
Student -> Elev -> طالب
Homework -> Lektier -> واجب منزلي
Friend -> Ven -> صديق
Help -> Hjælp -> مساعدة
```

### Translation Tools

**Helpful (but verify!):**
- Google Translate - Quick drafts
- DeepL - Better quality than Google
- Microsoft Translator - Good for education terms

**Professional:**
- SDL Trados
- MemoQ
- Smartcat

⚠️ **Remember:** Always have native speakers review automated translations!

---

## Accessibility for Translations

### Font Considerations

**Current fonts:**
- Latin: Comic Neue (friendly, readable)
- Arabic: Noto Sans Arabic (clear, modern)

**If adding new scripts:**
- Chinese: Noto Sans SC
- Japanese: Noto Sans JP
- Korean: Noto Sans KR
- Thai: Noto Sans Thai
- Devanagari: Noto Sans Devanagari

Add in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap" rel="stylesheet">
```

Add in `css/styles.css`:
```css
body[lang="zh"] {
    font-family: 'Noto Sans SC', sans-serif;
}
```

### Text Direction

**LTR (Left-to-Right):** Most languages
**RTL (Right-to-Left):** Arabic, Hebrew, Urdu, Persian

Handle in `js/main.js`:
```javascript
const rtlLanguages = ['ar', 'he', 'ur', 'fa'];
if (rtlLanguages.includes(lang)) {
    document.documentElement.setAttribute('dir', 'rtl');
}
```

---

## Troubleshooting

### Problem: Text shows as boxes □□□

**Solution:**
- Missing font support
- Add appropriate font from Google Fonts
- Test in different browsers

### Problem: Layout breaks in one language

**Solution:**
- Text too long for container
- Shorten text or adjust CSS
- Use `overflow-wrap: break-word;`

### Problem: RTL not working

**Solution:**
- Check `js/main.js` has RTL code
- Verify language code is correct (`ar`)
- Clear browser cache
- Check CSS has RTL styles

### Problem: Special characters display wrong

**Solution:**
- Ensure files saved as UTF-8
- Check `<meta charset="UTF-8">` in HTML
- Verify server sends correct encoding

---

## Getting Community Involved

### Translation Events

**Host translation workshops:**
1. Invite parent volunteers
2. Provide pizza and childcare
3. Work through translations together
4. Kids can help test!

### School Integration

**Make it educational:**
- Students learn about translation
- Practice language skills
- Cultural exchange activities
- Multilingual celebration day

### Feedback Collection

**Ask users:**
- Is the language clear?
- Any mistakes noticed?
- Suggestions for improvement?
- Missing important information?

---

**Remember:** Every language added helps more children feel welcome! 🌍🌟

---

**For more help:**
- [Main README](../README.md)
- [Content Management](CONTENT_MANAGEMENT.md)
- [Deployment Guide](DEPLOYMENT.md)
