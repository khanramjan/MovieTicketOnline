# Easy Movie Ticket - Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel Web Interface (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import from Git**:
   - Connect your GitHub account
   - Select the `MovieTicketOnline` repository
   - Choose the `main` branch

4. **Configure Project Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `client` (IMPORTANT!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Click "Deploy"**

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Navigate to client folder**:
   ```bash
   cd client
   ```

4. **Deploy**:
   ```bash
   vercel --prod
   ```

### Important Configuration

✅ **Root Directory**: Make sure to set `client` as the root directory in Vercel settings
✅ **Framework**: Select "Vite" as the framework preset
✅ **Build Settings**: Use default Vite build settings

### Environment Variables (if needed)

Currently, your app uses static data, so no environment variables are required. If you add external APIs later, add them in:
- Vercel Dashboard → Project → Settings → Environment Variables

### Post-Deployment

After deployment, your app will be available at:
- `https://your-project-name.vercel.app`

### Troubleshooting

**Common Issues:**

1. **Permission denied error (vite build)**:
   - **Solution**: Use `npx vite build` instead of `vite build`
   - **Fixed in**: Updated package.json and vercel.json

2. **404 on refresh**: 
   - **Solution**: Fixed by `vercel.json` rewrites configuration

3. **Build fails**: 
   - **Solution**: Ensure you're deploying from the `client` folder
   - **Check**: Root directory is set to `client` in Vercel settings

4. **Assets not loading**: 
   - **Solution**: Check that paths are relative, not absolute

5. **Build timeout**:
   - **Solution**: Try deploying again, sometimes it's a temporary issue

**If deployment still fails:**
1. Try deploying via Vercel CLI instead of web interface
2. Check build logs for specific error messages
3. Ensure all dependencies are properly listed in package.json

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 📝 Deployment Checklist

- [x] Created `vercel.json` configuration
- [x] Added `.vercelignore` file
- [x] Verified build command works locally
- [x] Set correct root directory (`client`)
- [ ] Deploy to Vercel
- [ ] Test all routes work after deployment
- [ ] Verify movie booking functionality
- [ ] Check responsive design on deployed site

## 🎯 Ready to Deploy!

Your Easy Movie Ticket application is now ready for Vercel deployment. Follow Method 1 above for the easiest deployment process.