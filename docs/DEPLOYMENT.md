# Deployment Guide 🚀

Complete guide for deploying the "Welcome to School in Denmark" website.

## Quick Deploy Options

### 1. GitHub Pages (Recommended for Schools)

**Why?** Free, reliable, and easy to update.

**Steps:**

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Click "Sign up"

2. **Create a new repository**
   - Click the "+" icon → "New repository"
   - Name it: `school-welcome-site`
   - Make it Public
   - Click "Create repository"

3. **Upload files**
   - Click "uploading an existing file"
   - Drag all files from `SchoolProject` folder
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the left menu
   - Under "Source", select "main" branch
   - Click "Save"

5. **Get your URL**
   - Wait 1-2 minutes
   - Your site will be at: `https://username.github.io/school-welcome-site/`
   - Share this URL with students and parents!

**Updating content:**
- Just upload new files to replace old ones
- Changes appear in 1-2 minutes

---

### 2. Netlify (Easiest)

**Why?** Drag-and-drop deployment, instant updates.

**Steps:**

1. **Sign up** at [netlify.com](https://netlify.com)
   - Use GitHub, email, or Google account

2. **Deploy site**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire `SchoolProject` folder
   - Drop it in the box
   - Wait 30 seconds

3. **Get your URL**
   - Netlify creates a URL like `happy-school-123.netlify.app`
   - Click "Domain settings" to customize it

4. **Update site**
   - Drag new files to the same site
   - Old files are automatically replaced

**Custom domain:**
- Buy a domain (like `welcome.ourschool.dk`)
- In Netlify, go to Domain settings
- Add your custom domain
- Follow the instructions

---

### 3. Vercel (For Developers)

**Why?** Fast, automatic deployments from Git.

**Steps:**

1. **Sign up** at [vercel.com](https://vercel.com)

2. **Import repository**
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Automatic updates**
   - Every time you update files in GitHub
   - Vercel automatically redeploys

---

### 4. Traditional Web Hosting

**Why?** You already have a school website server.

**Requirements:**
- Access to your school's web server
- FTP credentials (username, password, server address)
- Permission to upload files

**Steps:**

1. **Get FTP client**
   - Download [FileZilla](https://filezilla-project.org) (free)
   - Install it on your computer

2. **Connect to server**
   - Open FileZilla
   - Enter server address, username, password
   - Click "Connect"

3. **Upload files**
   - Find your `SchoolProject` folder on the left
   - Find `public_html` or `www` on the right
   - Drag all files from left to right
   - Wait for upload to complete

4. **Access site**
   - Go to your school's domain
   - Example: `www.ourschool.dk/welcome/`

**Updating:**
- Connect via FTP again
- Upload changed files
- They replace old versions

---

## Before You Deploy - Checklist

- [ ] Test all 6 languages work
- [ ] Test on mobile phone
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Check Arabic RTL displays correctly
- [ ] Verify all links work
- [ ] Check quiz works
- [ ] Test in different browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

---

## After Deployment

### Share the URL

1. **Print QR codes**
   - Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
   - Enter your URL
   - Download QR code
   - Print and post in classrooms

2. **Email to parents**
   - Send welcome email with link
   - Include brief description in all 6 languages

3. **Add to school website**
   - Put link on homepage
   - Create announcement

4. **Social media**
   - Share on school Facebook/Instagram
   - Tag refugee support organizations

### Monitor Usage

**Free analytics (optional):**

1. **Google Analytics** (if allowed)
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Add tracking code before `</head>` in `index.html`
   - See visitor counts, popular pages

2. **Simple tracking**
   - Most hosting services show basic stats
   - Check how many people visit
   - See which languages are most used

---

## Updating Content After Deployment

### Quick Text Changes

1. **Find translation key** in `js/translations.js`
2. **Edit text** for all languages
3. **Upload changed file** to your hosting

### Adding New Sections

1. **Edit** `index.html`
2. **Add translations** in `js/translations.js`
3. **Update styles** if needed in `css/styles.css`
4. **Upload all changed files**

### Emergency Fix

If something breaks:

1. **Don't panic!**
2. **Restore backup** (keep copies of working files)
3. **Check browser console** for errors (F12)
4. **Test locally** before re-uploading

---

## Troubleshooting

### Site shows "404 Not Found"

**Solution:**
- Check folder structure
- Make sure `index.html` is in the root
- Wait a few minutes for propagation

### Styles don't load

**Solution:**
- Check file paths in `index.html`
- Make sure `css/styles.css` exists
- Clear browser cache (Ctrl+F5)

### Languages don't switch

**Solution:**
- Check `js/translations.js` uploaded
- Check `js/main.js` uploaded
- Check browser console for errors

### Arabic appears left-to-right

**Solution:**
- Check `js/main.js` has RTL code
- Clear browser cache
- Try in incognito mode

### Quiz doesn't work

**Solution:**
- Check both JavaScript files are uploaded
- Check browser console for errors
- Make sure files aren't corrupted

---

## Security Considerations

✅ **This site is safe because:**
- No user data collection
- No forms that submit data
- No cookies (only localStorage)
- No external scripts (except fonts)
- Static files only

⚠️ **For school safety:**
- Don't add contact forms without approval
- Don't collect student information
- Don't add external tracking without permission
- Keep content appropriate for children

---

## Performance Optimization

### Already Optimized

✅ Minimal file sizes
✅ No heavy images (using emojis)
✅ Fast loading
✅ Mobile-friendly

### Optional Improvements

**Add images:**
- Use JPEG for photos (compress to < 200KB)
- Use PNG for illustrations (compress to < 100KB)
- Use tools like [TinyPNG.com](https://tinypng.com)

**Add caching:**
```html
<!-- Add to <head> in index.html -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

**Compress files:**
- Most modern hosts do this automatically
- Enable Gzip compression on your server

---

## Maintenance Schedule

### Weekly
- [ ] Check site loads correctly
- [ ] Test one language

### Monthly
- [ ] Test all languages
- [ ] Check all links work
- [ ] Read any feedback
- [ ] Update content if needed

### Quarterly
- [ ] Review analytics
- [ ] Survey students for feedback
- [ ] Update content based on feedback
- [ ] Add new sections if needed

### Yearly
- [ ] Full content review
- [ ] Update outdated information
- [ ] Refresh design if needed
- [ ] Add new languages if needed

---

## Getting Help

**If you need technical help:**

1. **Check documentation**
   - Read main README.md
   - Check this guide
   - Look at code comments

2. **Test locally first**
   - Open files on your computer
   - Fix issues before re-deploying

3. **Ask for help**
   - Contact IT department
   - Find a local web developer
   - Reach out to parent volunteers

**Common resources:**
- [Stack Overflow](https://stackoverflow.com) - Technical questions
- [W3Schools](https://w3schools.com) - Learning HTML/CSS/JS
- [MDN Web Docs](https://developer.mozilla.org) - Reference

---

## Success Metrics

**How to know it's working:**

📊 **Quantitative:**
- Number of visits per week
- Time spent on site
- Most viewed sections
- Language distribution

😊 **Qualitative:**
- Student feedback
- Teacher reports
- Parent comments
- Integration into school routine

**Expected outcomes:**
- Students feel more welcome
- Less confusion about school rules
- Better communication with teachers
- Faster adaptation to school life

---

## Legal and Compliance

### GDPR Compliance

✅ **This site is GDPR-friendly:**
- No personal data collection
- No tracking cookies
- No user registration
- No form submissions

📋 **If you add features later:**
- Get proper consent for any data collection
- Add privacy policy if needed
- Ensure COPPA compliance (for children under 13)

### Accessibility Compliance

✅ **WCAG 2.1 Level AA compliant**
- Test with accessibility tools
- Maintain during updates
- Get feedback from users with disabilities

---

## Long-term Vision

**Phase 1:** ✅ Basic website (current)
**Phase 2:** 📝 Collect feedback, minor improvements
**Phase 3:** 🎨 Add custom illustrations
**Phase 4:** 🎮 Add more interactive elements
**Phase 5:** 📱 Consider mobile app
**Phase 6:** 🌍 Expand to more languages
**Phase 7:** 🤝 Share with other schools

---

**Remember:** The goal is to help children feel welcome and supported. Keep it simple, friendly, and accessible! 🌟

---

**Questions?** Review the main [README.md](../README.md) for technical details.
