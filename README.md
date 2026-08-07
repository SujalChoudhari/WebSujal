<div align="center">

# 🔐 WebSujal Monorepo

**Private portfolio of personal web applications**

[![Astro](https://img.shields.io/badge/Blog-Astro%205.15-ff6900?logo=astro)](blog/README.md)
[![Vite](https://img.shields.io/badge/Portfolio-Vite%20%2B%20React-blue?logo=vite)](portfolio/README.md)
[![AI](https://img.shields.io/badge/SujalCorp-Next.js%2015%20%2B%20AI-9cf?logo=google)](sujalcorp/README.md)
[![Next.js](https://img.shields.io/badge/Art%20Gallery-Showcase-pink?logo=vercel)](art-gallery/README.md)

</div>

---

## 📋 Quick Navigation

- [📦 Overview](#-overview)
- [🗂️ Projects](#️-projects)
- [🛠️ Tech Stack](#️-tech-stack)
- [🔧 Maintenance](#-maintenance)
- [📜 Scripts](#-scripts)
- [🌐 Deployments](#-deployments)
- [⚠️ Notes](#️-notes)

---

## 📦 Overview

Private monorepo containing my personal web applications. Each project is a **Git submodule** with independent versioning, deployments, and configurations. This structure allows:

- ✅ Isolated development and deployments
- ✅ Shared content and utility scripts
- ✅ Independent dependency management
- ✅ Clean separation of concerns

**⚠️ Repository visibility varies by project**: Do not expose API keys or sensitive data.

---

## 🗂️ Projects

| Project | Framework | Purpose | Port |
|---------|-----------|---------|------|
| **Blog** | Astro 5 + React | Personal blog with MDX, search, SEO | 4321 |
| **Portfolio** | Vite + React | Personal portfolio and identity hub | — |
| **SujalCorp** | Next.js 15 + AI | Google AI Studio applet | 3000 |
| **Art Gallery** | Next.js | Interactive art showcase | 3000 |
| **FileShare** | Next.js | Anonymous file-sharing application | 3000 |

---

## 🛠️ Tech Stack

**Common Across Projects:**
- TypeScript (strict mode)
- Tailwind CSS (v3/v4)
- Radix UI / Shadcn components
- Lucide React icons
- Framer Motion / Motion

**Specialized:**
- **AI Integration**: `@google/genai` (SujalCorp)
- **Search**: Fuse.js (Blog)

---

## 🔧 Maintenance

### Initial Setup (First Time)

```bash
# 1. Clone with submodules
git clone --recursive https://github.com/sujal212004/WebSujal.git
cd WebSujal

# 2. If submodules weren't cloned
git submodule update --init --recursive

# 3. Install dependencies for all projects
./scripts/install-all.sh  # or manually:
for d in blog portfolio sujalcorp art-gallery fs; do
  cd "$d" && npm install && cd ..
done
```

### Daily Development

```bash
# Start all projects in development mode
./scripts/dev-all.sh

# Or individually:
cd blog && npm run dev      # → http://localhost:4321
cd portfolio && npm run dev
# ... etc
```

### Content Management

```bash
# After adding new blog posts (content/blog/*.mdx)
npm run blog   # Syncs to blog/src/content/posts/

# After updating blog content for portfolio search
npm run search # Generates portfolio/src/lib/content/allContent.ts
```

### Updating Submodules

```bash
# Enter each submodule and pull latest
for d in blog portfolio sujalcorp art-gallery fs; do
  cd "$d" && git pull && cd ..
done

# Commit updated submodule references
git add .
git commit -m "Update submodules"
```

---

## 📜 Scripts

**Root Level** (`package.json`):
- `npm run blog` → Syncs blog content from `content/` to blog project
- `npm run search` → Updates portfolio search index

**Helper Scripts** (create these):
- `scripts/install-all.sh` - Installs dependencies across all projects
- `scripts/dev-all.sh` - Starts all dev servers concurrently
- `scripts/build-all.sh` - Builds all projects for production

---

## 🌐 Deployments

| Project | Platform | Domain |
|---------|----------|--------|
| Blog | Netlify | https://blog.sujal.xyz |
| Portfolio | Vercel | https://sujal.xyz |
| SujalCorp | Vercel | https://corp.sujal.xyz |
| Art Gallery | Vercel | https://art.sujal.xyz |
| FileShare | Vercel | https://fs.sujal.xyz |

**Note**: Deployments are configured individually in each project's hosting platform.

---

## ⚠️ Notes

### Environment Variables
- **SujalCorp** requires `GEMINI_API_KEY` in `.env.local`
- Never commit `.env.local` files (already in `.gitignore`)

### Port Conflicts
- Next.js projects default to port 3000
- Run them one at a time or modify `next.config.js` to use different ports:
  ```js
  // next.config.js
  module.exports = {
    devIndicators: {
      port: 3001, // Change per project
    },
  }
  ```

### Submodule Updates
When a submodule has new commits:
```bash
git submodule update --remote
git add <submodule-folder>
git commit -m "Update <submodule> to latest"
```

### Backup Strategy
- Each submodule is independently backed up in its own repository
- The monorepo only tracks submodule commits (pointers)
- Content in `content/` should be backed up separately if not already versioned

---

<div align="center">

**Maintained by [Sujal Choudhari](https://sujal.xyz)**

<i>Private portfolio — Not open for contributions</i>

</div>