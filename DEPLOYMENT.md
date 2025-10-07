# Deployment Guide - Railway

## Quick Deploy to Railway

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Prepare for Railway deployment"
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect the configuration and deploy

3. **Your site will be live!**
   - Railway will provide you with a URL like `https://your-project.up.railway.app`

### Option 2: Deploy via Railway CLI

1. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login to Railway:**
   ```bash
   railway login
   ```

3. **Initialize and Deploy:**
   ```bash
   railway init
   railway up
   ```

4. **Open your deployment:**
   ```bash
   railway open
   ```

## What's Included

The following files have been added for Railway deployment:

- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server to serve static files
- `railway.json` - Railway configuration
- `.gitignore` - Excludes node_modules and other files

## Local Testing

Before deploying, you can test locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Environment Variables

No environment variables are required for this static site deployment.

## Custom Domain

To add a custom domain on Railway:

1. Go to your project settings
2. Click on "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

## Troubleshooting

**Issue: Site not loading**
- Check Railway logs: `railway logs`
- Ensure all files are committed to git
- Verify `npm start` works locally

**Issue: 404 errors**
- The server.js is configured to handle all routes
- All HTML files should be accessible directly

**Issue: Images not loading**
- Ensure all images are in the `public/` folder
- Check that paths in HTML use `public/` prefix

## Support

For Railway-specific issues, see:
- [Railway Documentation](https://docs.railway.app)
- [Railway Discord](https://discord.gg/railway)
