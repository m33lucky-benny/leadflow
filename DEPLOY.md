# Deploy LeadFlow to GitHub Pages

## Method 1: GitHub Actions (Recommended - No Token Needed)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `leadflow-website`
3. Make it **Public**
4. Don't initialize with README (we have our own)
5. Click **Create repository**

### Step 2: Push Your Code

```bash
cd /root/.openclaw/workspace/leadflow-website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial LeadFlow website"

# Add remote (replace with your actual username)
git remote add origin https://github.com/m33lucky-benny/leadflow-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. The workflow will automatically run and deploy!

### Step 4: Wait for Deployment
- Go to **Actions** tab in your repo
- Wait for the workflow to complete (2-3 minutes)
- Your site will be live at: `https://m33lucky-benny.github.io/leadflow-website/`

---

## Method 2: Manual Upload (No Git Required)

If you don't want to use git at all:

1. Go to https://github.com/new
2. Create repository `leadflow-website`
3. Click **Upload files**
4. Drag and drop all files from `/root/.openclaw/workspace/leadflow-website/`
5. Commit changes
6. Go to Settings → Pages → GitHub Actions
7. Done!

---

## Method 3: GitHub Desktop (Easiest GUI)

1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add local repository → Select `/root/.openclaw/workspace/leadflow-website`
4. Publish repository to GitHub
5. Go to repository Settings → Pages → GitHub Actions

---

## Custom Domain (Optional)

To use `leadflow.ebiya.sg` instead of GitHub's domain:

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter: `leadflow.ebiya.sg`
3. Click **Save**
4. Add DNS record at your domain provider:
   - Type: CNAME
   - Name: leadflow
   - Value: m33lucky-benny.github.io

---

## Troubleshooting

### Build fails?
- Check the **Actions** tab for error messages
- Make sure `Gemfile` and `_config.yml` are present

### Site not showing?
- It takes 2-5 minutes after first push
- Check Settings → Pages for the live URL

### Changes not updating?
- Changes take 1-2 minutes to deploy
- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)

---

## What's Automated?

✅ Every time you push to `main` branch:
- Jekyll builds the site
- Assets are optimized
- Site deploys automatically
- No manual steps needed!

---

## Next Steps After Deployment

1. ✅ Test all forms (they'll need Formspree endpoints)
2. ✅ Add Google Analytics ID to `_config.yml`
3. ✅ Create privacy policy and terms pages
4. ✅ Set up custom domain (if desired)
5. ✅ Share your new site!
