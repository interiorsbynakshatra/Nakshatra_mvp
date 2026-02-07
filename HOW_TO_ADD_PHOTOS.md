# 📸 How to Add Your Project Photos & Videos

## Simple Guide for Non-Technical Users

This guide will help you add your own project photos and videos to your Nakshatra Interiors website.

---

## 🎯 What You Need to Update

You need to update the file located at:
```
/app/frontend/src/data/mockProjects.js
```

This file contains all your project information including photos.

---

## 📝 Step-by-Step Instructions

### **Step 1: Upload Your Photos to a Cloud Service**

First, you need to upload your photos online. We recommend using:
- **Google Drive** (recommended for beginners)
- **Imgur** (free image hosting)
- **Cloudinary** (professional option)

#### Using Google Drive (Easiest Method):

1. Go to [Google Drive](https://drive.google.com)
2. Upload your project photos
3. Right-click on each photo → Click "Get link"
4. Change permission to "Anyone with the link can view"
5. Copy the link
6. Modify the link format:
   - **Original:** `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
   - **Change to:** `https://drive.google.com/uc?export=view&id=FILE_ID`

---

### **Step 2: Open the Projects File**

1. Open the file: `/app/frontend/src/data/mockProjects.js`
2. You'll see a list of projects starting with `export const projects = [`

---

### **Step 3: Understanding the Project Structure**

Each project has this structure:

```javascript
{
  id: 1,                              // Unique number for each project
  title: '2BHK Modern Home - Wakad, Pune',  // Project name
  location: 'Wakad, Pune',            // Where the project is
  type: '2BHK',                       // Type of home
  area: '950 sq ft',                  // Size
  budget: '₹7.2 Lakhs',              // Project cost
  duration: '45 days',                // How long it took
  description: '...',                 // Brief description
  category: 'Residential',            // Type
  completionDate: 'March 2024',       // When finished
  thumbnailImage: 'URL_HERE',         // Main photo
  images: [                           // Gallery photos (8-10 photos)
    'PHOTO_URL_1',
    'PHOTO_URL_2',
    'PHOTO_URL_3',
    // ... add 8-10 photos total
  ],
  videos: []                          // Video URLs (optional)
}
```

---

### **Step 4: Replace Photos with Your Own**

#### **For Thumbnail (Main Project Photo):**

Find this line:
```javascript
thumbnailImage: 'https://images.unsplash.com/photo-...',
```

Replace with your photo URL:
```javascript
thumbnailImage: 'https://drive.google.com/uc?export=view&id=YOUR_FILE_ID',
```

#### **For Gallery Photos (8-10 photos):**

Find the `images:` section:
```javascript
images: [
  'REPLACE_WITH_YOUR_PHOTO_URL_1',
  'REPLACE_WITH_YOUR_PHOTO_URL_2',
  'REPLACE_WITH_YOUR_PHOTO_URL_3',
  'REPLACE_WITH_YOUR_PHOTO_URL_4',
  'REPLACE_WITH_YOUR_PHOTO_URL_5',
  'REPLACE_WITH_YOUR_PHOTO_URL_6',
  'REPLACE_WITH_YOUR_PHOTO_URL_7',
  'REPLACE_WITH_YOUR_PHOTO_URL_8',
  'REPLACE_WITH_YOUR_PHOTO_URL_9',
  'REPLACE_WITH_YOUR_PHOTO_URL_10'
]
```

**Important:** Each URL must be in quotes `' '` and separated by commas.

---

### **Step 5: Adding Videos (Optional)**

If you have project videos:

1. Upload videos to **YouTube** or **Vimeo**
2. Get the direct video file URL (not the watch page)
3. Add to the `videos:` array:

```javascript
videos: [
  'https://your-video-url-1.mp4',
  'https://your-video-url-2.mp4'
]
```

Leave empty if no videos:
```javascript
videos: []
```

---

### **Step 6: Add a New Project**

To add a completely new project:

1. Copy an existing project block (everything between `{` and `},`)
2. Paste it after the last project
3. Update all the information:
   - Change the `id` to the next number (if last project is 6, use 7)
   - Update `title`, `location`, `type`, etc.
   - Replace all photo URLs with your photos
4. Make sure to add a comma `,` after the previous project

Example:
```javascript
  },  // End of previous project (notice the comma)
  {   // Start of new project
    id: 7,
    title: 'Your New Project Name',
    location: 'Your Location',
    // ... rest of the details
  }
]
```

---

## ⚠️ Common Mistakes to Avoid

1. **Missing Commas:** Always put a comma between photo URLs
   ```javascript
   // ❌ WRONG
   images: [
     'photo1.jpg'
     'photo2.jpg'
   ]
   
   // ✅ CORRECT
   images: [
     'photo1.jpg',
     'photo2.jpg'
   ]
   ```

2. **Missing Quotes:** All URLs must be in quotes
   ```javascript
   // ❌ WRONG
   thumbnailImage: https://example.com/photo.jpg,
   
   // ✅ CORRECT
   thumbnailImage: 'https://example.com/photo.jpg',
   ```

3. **Wrong ID Numbers:** Each project must have a unique ID number

---

## 🔄 Testing Your Changes

After making changes:

1. Save the file
2. The website will automatically reload
3. Go to the Portfolio page
4. Click on your project to see all photos

---

## 📞 Need Help?

If you see errors:
1. Check for missing commas
2. Make sure all quotes match (`'` or `"`)
3. Verify all URLs are accessible
4. Make sure IDs are unique numbers

---

## 💡 Quick Tips

- **Photo Quality:** Use high-quality photos (at least 1920x1080 pixels)
- **File Size:** Compress large photos using [TinyPNG.com](https://tinypng.com)
- **Photo Count:** Add 8-10 photos per project for the best look
- **Consistency:** Use similar photo styles across projects
- **Before/After:** Consider adding before and after photos
- **Different Angles:** Show rooms from multiple angles

---

## 📋 Example of a Complete Project

```javascript
{
  id: 7,
  title: '3BHK Luxury Home - Koregaon Park, Pune',
  location: 'Koregaon Park, Pune',
  type: '3BHK',
  area: '1,800 sq ft',
  budget: '₹12.5 Lakhs',
  duration: '70 days',
  description: 'Stunning 3BHK luxury home with premium finishes, modern kitchen, spacious bedrooms, and elegant living areas.',
  category: 'Residential',
  completionDate: 'May 2024',
  thumbnailImage: 'https://your-main-photo-url.jpg',
  images: [
    'https://your-living-room-photo.jpg',
    'https://your-kitchen-photo.jpg',
    'https://your-bedroom-1-photo.jpg',
    'https://your-bedroom-2-photo.jpg',
    'https://your-bathroom-photo.jpg',
    'https://your-dining-area-photo.jpg',
    'https://your-balcony-photo.jpg',
    'https://your-wardrobe-photo.jpg',
    'https://your-entrance-photo.jpg',
    'https://your-detail-shot-photo.jpg'
  ],
  videos: []
}
```

---

That's it! You're all set to add your beautiful project photos to your website! 🎉
