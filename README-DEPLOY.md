# SIMON — Deployment Package

This package is prepared for GitHub + Vercel deployment.

## 1. Install and test locally

```bash
npm install
npm run build
```

## 2. GitHub

Create a new GitHub repository and upload this project.

Do NOT upload `.env` or any real secret.

## 3. Vercel

Import the GitHub repository into Vercel.

For a Vite app, Vercel can normally detect the framework automatically.

Recommended settings:
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## 4. Environment Variables

Add the values from your local `.env` in:

Vercel → Project → Settings → Environment Variables

Use `.env.example` as the variable-name reference.

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code.

## 5. Supabase Auth

After deployment, update Supabase Authentication URL settings with the final Vercel URL if your authentication flow requires it.

Example:
`https://your-project.vercel.app`

## 6. Google Sheets webhook

If SIMON uses a Google Apps Script Web App, make sure its deployed URL is entered as the corresponding Vercel environment variable.

