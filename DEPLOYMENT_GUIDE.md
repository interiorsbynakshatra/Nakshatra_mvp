# 🚀 How to Deploy Your Website on Render

## Complete Guide for Non-Technical Users

This guide will help you deploy your Nakshatra Interiors website on Render for FREE!

---

## 📋 What You'll Need

1. A [GitHub](https://github.com) account (free)
2. A [Render](https://render.com) account (free)
3. Your website files (already prepared!)

---

## Part 1: Upload Your Code to GitHub

### **Step 1: Create a GitHub Account**

1. Go to [GitHub.com](https://github.com)
2. Click "Sign Up"
3. Follow the instructions to create a free account
4. Verify your email

### **Step 2: Create a New Repository**

1. Log in to GitHub
2. Click the "+" icon (top right) → "New repository"
3. Fill in:
   - **Repository name:** `nakshatra-interiors-website`
   - **Description:** "Nakshatra Interiors official website"
   - **Public/Private:** Choose "Public" (required for free deployment)
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"

### **Step 3: Upload Your Code**

You have two options:

#### **Option A: Using GitHub Web Interface (Easier)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop the entire `/app` folder
3. Scroll down and click "Commit changes"

#### **Option B: Using Git Command Line**

If you're comfortable with terminal:

```bash
cd /app
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nakshatra-interiors-website.git
git push -u origin main
```

---

## Part 2: Deploy on Render

### **Step 1: Create a Render Account**

1. Go to [Render.com](https://render.com)
2. Click "Get Started for Free"
3. Sign up using your **GitHub account** (recommended)
4. This will connect Render to your GitHub

### **Step 2: Create a New Web Service**

1. Click "New +" button (top right)
2. Select "Web Service"
3. Click "Connect" next to your `nakshatra-interiors-website` repository

### **Step 3: Configure Your Web Service**

Fill in these details:

**Basic Settings:**
- **Name:** `nakshatra-interiors`
- **Region:** Choose closest to India (Singapore recommended)
- **Branch:** `main`
- **Root Directory:** `frontend`
- **Runtime:** `Node`

**Build Command:**
```bash
yarn install && yarn build
```

**Start Command:**
```bash
yarn start
```

**Instance Type:**
- Select "Free" (this gives you free hosting!)

### **Step 4: Add Environment Variables**

Scroll down to "Environment Variables" section:

Click "Add Environment Variable" and add:

**Variable 1:**
- **Key:** `NODE_VERSION`
- **Value:** `18.18.0`

**Variable 2:**
- **Key:** `REACT_APP_BACKEND_URL`
- **Value:** (Leave empty for now, or use your backend URL if you have one)

### **Step 5: Deploy!**

1. Scroll to bottom
2. Click "Create Web Service"
3. Wait 5-10 minutes for deployment
4. Your website will be live at: `https://nakshatra-interiors.onrender.com`

---

## Part 3: Custom Domain Setup (Optional)

### **Using Your Own Domain (nakshtrainterior.com)**

1. In Render dashboard, go to your web service
2. Click "Settings"
3. Scroll to "Custom Domain"
4. Click "Add Custom Domain"
5. Enter: `nakshtrainterior.com` and `www.nakshtrainterior.com`

### **Update Your Domain DNS Settings**

Go to your domain provider (GoDaddy, Namecheap, etc.) and add these records:

**For nakshtrainterior.com:**
- **Type:** `A`
- **Name:** `@`
- **Value:** (Render will provide the IP address)
- **TTL:** `3600`

**For www.nakshtrainterior.com:**
- **Type:** `CNAME`
- **Name:** `www`
- **Value:** `nakshatra-interiors.onrender.com`
- **TTL:** `3600`

**Wait 24-48 hours** for DNS propagation.

---

## 🔄 Updating Your Website

When you want to make changes:

### **Method 1: Through GitHub Web Interface**

1. Go to your repository on GitHub
2. Navigate to the file you want to edit
3. Click the pencil icon (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Render will automatically detect changes and redeploy!

### **Method 2: Upload New Files**

1. Go to the folder on GitHub
2. Click "Add file" → "Upload files"
3. Upload changed files
4. Commit changes

**Auto-Deploy:** Render watches your GitHub repo. Any commit triggers automatic redeployment!

---

## ⚠️ Common Issues & Solutions

### **Issue 1: Build Failed**

**Solution:**
- Check Build Logs in Render dashboard
- Make sure all dependencies are in `package.json`
- Verify Build Command is correct

### **Issue 2: Website Shows Blank Page**

**Solution:**
- Check Browser Console (F12)
- Verify Start Command is correct
- Make sure all image URLs are accessible

### **Issue 3: Slow First Load**

**Solution:**
- This is normal for free tier
- Render spins down free services after inactivity
- First visit takes 30-60 seconds to wake up
- Subsequent visits are fast

### **Issue 4: Photos Not Loading**

**Solution:**
- Verify photo URLs are public
- Check Google Drive sharing permissions
- Use direct image URLs (not Google Drive preview links)

---

## 📊 Monitoring Your Website

### **Check Website Status:**

1. Log in to Render
2. Go to your web service
3. View:
   - **Metrics:** Traffic and performance
   - **Logs:** Real-time activity
   - **Events:** Deployment history

### **View Deployment Logs:**

1. Click on your service
2. Click "Logs" tab
3. See real-time deployment progress

---

## 💰 Render Pricing (What's Free?)

### **Free Tier Includes:**
- ✅ 750 hours/month (enough for one website running 24/7)
- ✅ Automatic HTTPS/SSL
- ✅ Custom domain support
- ✅ Auto-deploy from GitHub
- ✅ 100GB bandwidth/month

### **Limitations:**
- ⏰ Spins down after 15 minutes of inactivity
- ⏰ Takes 30-60 seconds to wake up
- 💾 Limited build minutes per month

**For Production:** Consider upgrading to paid plan ($7/month) for:
- No spin-down
- Instant loading
- More bandwidth

---

## 🔒 Security Best Practices

1. **Never commit sensitive data:**
   - API keys
   - Passwords
   - Database credentials

2. **Use Environment Variables:**
   - Store secrets in Render's Environment Variables
   - Never hardcode in source code

3. **Keep Dependencies Updated:**
   - Regularly update `package.json`
   - Check for security vulnerabilities

---

## 📞 Getting Help

### **Render Support:**
- Help Center: [render.com/docs](https://render.com/docs)
- Community Forum: [community.render.com](https://community.render.com)

### **GitHub Support:**
- Help: [docs.github.com](https://docs.github.com)

---

## ✅ Deployment Checklist

Before going live:

- [ ] All project photos uploaded and working
- [ ] WhatsApp number verified (+91 8999100590)
- [ ] Google Form links updated
- [ ] Contact information correct
- [ ] Test on mobile devices
- [ ] Check all pages load correctly
- [ ] Verify all links work
- [ ] Test WhatsApp button
- [ ] Check portfolio projects open correctly

---

## 🎉 You're Live!

Congratulations! Your website is now live on the internet! 

**Share your website:**
- `https://nakshtra-interiors.onrender.com` (Render URL)
- `https://nakshtrainterior.com` (Your custom domain)

**Next Steps:**
1. Share on social media
2. Add to Google My Business
3. Update Instagram bio
4. Add to email signature

---

## 📱 Mobile App (Bonus)

Your website is already mobile-responsive! Visitors can:
1. Open website on phone
2. Click browser menu (3 dots)
3. Select "Add to Home Screen"
4. Creates an app-like icon!

---

That's it! Your professional website is now live! 🚀✨
