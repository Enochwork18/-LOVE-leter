# 📤 How to Push to GitHub

Follow these steps to push your love letter project to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon (top right) and select **New repository**
3. Name your repository (example: `love-letter-for-yvette`)
4. Add a description (optional)
5. Choose **Public** or **Private** (Private is recommended for personal projects)
6. **Do NOT** initialize with README (we already have one)
7. Click **Create repository**

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you instructions. Run these commands in PowerShell/Terminal:

### Option A: Using HTTPS (Easier for beginners)

```bash
# Navigate to your project folder
cd "C:\Users\DELL\Desktop\from Enoch Oluwatunmise Bismark TO Yvette Dumoteim Tonye Williams Dokubo LOVE leter"

# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/love-letter-for-yvette.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### Option B: Using SSH (More secure, requires setup)

```bash
# Add the remote repository
git remote add origin git@github.com:YOUR-USERNAME/love-letter-for-yvette.git

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify It's Live

1. Go to your GitHub repository URL
2. You should see all your files (HTML, JS, CSS, images, README, etc.)
3. Share the GitHub link with anyone!

## 📱 Viewing Your Project Online

After pushing to GitHub, you can view your project online:

### Option 1: GitHub Pages (Free hosting)

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under "Build and deployment", select:
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**)
   - Folder: **/ (root)**
4. Click **Save**
5. Wait a few minutes, then visit: `https://YOUR-USERNAME.github.io/love-letter-for-yvette`

### Option 2: View on GitHub
Simply visit your repository on GitHub and people can see the code.

## 🔄 Making Updates After First Push

Once you've pushed to GitHub, here's how to make and push changes:

```bash
# Make your changes to files...

# Check what changed
git status

# Stage your changes
git add .

# Commit with a message
git commit -m "Update: describe your changes here"

# Push to GitHub
git push
```

## 🆘 Troubleshooting

### "Permission denied (publickey)"
- You're using SSH but haven't set up SSH keys
- Solution: Use HTTPS method instead, or set up SSH keys in GitHub settings

### "fatal: remote origin already exists"
- You already have a remote set up
- Solution: Remove it first with `git remote remove origin`, then add the new one

### Can't push after first time?
- Make sure you're in the correct folder
- Run `git remote -v` to verify the remote URL is correct

## 🎉 Success!

Your love letter is now on GitHub! You can:
- Share the link with anyone
- Use GitHub Pages to host it for free
- Collaborate with others if you make it public
- Version control your updates

---

**Need help?** Check out GitHub's documentation: https://docs.github.com/en
