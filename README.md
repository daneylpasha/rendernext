This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

The site is hosted at **www.rendernext.io** via Vercel (project: `rendernext` under the `rendernextofficial-2831` account).

### Normal deploy (after first-time setup below)

```bash
git checkout main
git merge <your-branch>
git push origin main
vercel --prod
```

### First-time setup on a new machine

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Log in with the **rendernextofficial** Vercel account (not the personal `daniyal-5187` account):
   ```bash
   vercel login
   ```
   Use the credentials for `rendernextofficial-2831`.

3. Verify you're on the right account and can see the project:
   ```bash
   vercel whoami        # should print: rendernextofficial-2831
   vercel projects ls   # should list: rendernext → www.rendernext.io
   ```

4. Deploy to production:
   ```bash
   vercel --prod
   ```
   The `.vercel/project.json` in the repo already points to the correct project and org, so no re-linking needed.

### Troubleshooting

**"Could not retrieve Project Settings" error**
You're logged into the wrong Vercel account. Log out and log back in:
```bash
vercel logout
vercel login   # use rendernextofficial credentials
```

**Changes pushed to `main` but site not updated**
The Vercel–GitHub auto-deploy is not connected. Run `vercel --prod` manually until the Git integration is set up in Vercel → Project Settings → Git.
