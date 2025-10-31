# Deploying to GitHub Pages

This Somnicore website is a static React application optimized for GitHub Pages deployment.

## Quick Start - Automated Deployment

The easiest way to deploy is using the included GitHub Actions workflow:

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository **Settings → Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**
   - Save the settings

3. **Automatic Deployment**
   - The workflow in `.github/workflows/deploy.yml` will automatically:
     - Detect if this is a user/org page or project page
     - Build your site with the correct base path
     - Deploy to GitHub Pages
     - Run on every push to `main` branch
   
4. **Access Your Site**
   - **For project pages**: `https://yourusername.github.io/your-repo-name/`
   - **For user/org pages** (repo named `username.github.io`): `https://yourusername.github.io/`
   - Wait 1-2 minutes for the initial deployment

## Manual Deployment (Alternative)

If you prefer manual control:

### Step 1: Build with Correct Base Path

**For repository pages** (e.g., `yourusername.github.io/somnicore`):
```bash
# Replace 'your-repo-name' with your actual repository name
npx vite build --base=/your-repo-name/
```

**For user/organization pages** (e.g., `yourusername.github.io`):
```bash
npx vite build --base=/
```

### Step 2: Deploy Built Files

**Option A: Using gh-pages package**
```bash
npm install -D gh-pages
npx gh-pages -d dist/public
```

**Option B: Using Git subtree**
```bash
git subtree push --prefix dist/public origin gh-pages
```

### Step 3: Configure GitHub Pages
- Go to **Settings → Pages**
- Set source to **Deploy from a branch**
- Select branch: `gh-pages` and folder: `/ (root)`
- Save

## Local Development

Run the development server:
```bash
npm run dev
```

Open http://localhost:5000 in your browser.

## Understanding Hash-Based Routing

This site uses hash-based URLs (e.g., `/#/about`, `/#/products`) which work perfectly with static hosting:

- ✅ No server configuration needed
- ✅ All routes work after page refresh
- ✅ Compatible with GitHub Pages, Netlify, Vercel, etc.
- ✅ Works in subdirectories without additional setup

## Deployment Checklist

Before deploying, ensure:

- [x] `.nojekyll` file exists in the root (prevents Jekyll processing)
- [x] Build command includes correct `--base` path for your deployment
- [x] Repository Settings → Pages is configured correctly
- [x] All environment variables (if any) are set in GitHub Secrets

## Troubleshooting

**Problem**: Assets return 404 errors
- **Solution**: Make sure you built with the correct `--base` path matching your repository name

**Problem**: Page shows 404 on refresh
- **Solution**: Hash routing (`/#/about`) should handle this automatically. If using path routing, you need a 404.html redirect (not needed for this site)

**Problem**: Styles not loading
- **Solution**: Clear browser cache, ensure CSS files are in `dist/public/assets/`

## Project Structure

```
dist/public/          # Built static files (deploy this folder)
├── index.html        # Entry point
├── assets/           # Bundled CSS, JS, and images
│   ├── index-*.js
│   ├── index-*.css
│   └── *.png
└── favicon.png

.github/workflows/    # GitHub Actions automation
└── deploy.yml        # Auto-deployment workflow

.nojekyll            # Prevents Jekyll processing
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Base Path Configuration](https://vitejs.dev/config/shared-options.html#base)
- [Wouter Hash-Based Routing](https://github.com/molefrog/wouter#routing-patterns)
