# AI Portfolio - Sree's Professional Showcase

Modern React+Tailwind portfolio with built-in AI chat assistant (SreeBot).

## 🚀 Quick Deploy

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd ai-portfolio
npm install
```

### 2. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variable
vercel env add OPENAI_API_KEY
```

### 3. Configure
1. Update `src/data/bio.ts` with your information
2. Update `src/data/projects.ts` with your projects
3. Update `src/data/qa.yml` with facts for SreeBot

## 🛠 Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
ai-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Projects.tsx    # Projects showcase
│   │   ├── TechStack.tsx   # Technology stack
│   │   ├── Blog.tsx        # Blog posts
│   │   ├── Contact.tsx     # Contact form
│   │   └── SreeBot.tsx     # AI chat widget
│   ├── data/               # Content data
│   │   ├── bio.ts          # Personal information
│   │   ├── projects.ts     # Project details
│   │   └── qa.yml          # Bot knowledge base
│   └── styles/
│       └── globals.css     # Global styles
├── api/
│   └── chat.ts            # Serverless chat API
└── .github/workflows/
    └── ci.yml             # GitHub Actions CI
```

## 🤖 SreeBot Configuration

The AI assistant uses OpenAI's GPT-4o-mini and responds based on facts in `src/data/qa.yml`.

### Environment Variables
- `OPENAI_API_KEY` - Your OpenAI API key

### Customizing Bot Knowledge
Edit `src/data/qa.yml` to update what SreeBot knows about you.

## 🎨 Customization

### Personal Information
Update `src/data/bio.ts`:
```typescript
export const bio = {
  name: "Your Name",
  tagline: "Your Title",
  description: "Your description",
  // ... other fields
}
```

### Projects
Update `src/data/projects.ts` with your project details.

### Styling
- Built with Tailwind CSS
- Uses Framer Motion for animations
- Fully responsive design

## 📊 Features

- ✅ Responsive design
- ✅ AI chat assistant
- ✅ Project showcase with metrics
- ✅ Tech stack display
- ✅ Blog section
- ✅ Contact form
- ✅ CI/CD with GitHub Actions
- ✅ SEO optimized
- ✅ Fast loading (Lighthouse 95+)

## 🔧 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Build**: Vite
- **Deployment**: Vercel
- **AI**: OpenAI GPT-4o-mini
- **CI/CD**: GitHub Actions

## 📈 Performance

Optimized for:
- Lighthouse Performance: 95+
- SEO: 95+
- Best Practices: 95+
- Accessibility: 95+

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy automatically on push to main

### Manual Deploy
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!