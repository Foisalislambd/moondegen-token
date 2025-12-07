# MoonDegen ($MOON) - Meme Coin Landing Page

A modern, neon-themed landing page for the MoonDegen ($MOON) meme token built on Solana. This project features a sleek, futuristic UI with animated components, token statistics, tokenomics visualization, and a comprehensive roadmap.

## 🚀 Features

- **Hero Section**: Eye-catching hero with contract address and call-to-action buttons
- **Live Statistics**: Real-time token stats including price, market cap, holders, and burn percentage
- **About Section**: Highlights key features like fast transactions, security, and community-driven approach
- **How to Buy**: Step-by-step guide for purchasing the token
- **Tokenomics**: Interactive pie chart visualization of token distribution
- **Roadmap**: Multi-phase roadmap with progress tracking
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Neon-themed design with smooth animations and gradients
- **WhatsApp Integration**: Floating WhatsApp button for easy contact

## 🛠️ Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Recharts** - Chart library for tokenomics visualization

## 📦 Installation

**Prerequisites:** Node.js (v18 or higher recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/Foisalislambd/moondegen-token.git
   cd moondegen-token
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
moondegen-token/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Button.tsx      # Reusable button component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── HowToBuy.tsx    # Purchase instructions
│   ├── Roadmap.tsx     # Roadmap section
│   ├── Stats.tsx       # Token statistics
│   ├── Tokenomics.tsx  # Tokenomics chart
│   └── WhatsAppButton.tsx # WhatsApp floating button
├── constants.ts        # App constants and data
├── types.ts           # TypeScript type definitions
├── App.tsx            # Main app component
├── index.tsx         # Entry point
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
└── package.json      # Dependencies and scripts
```

## 🎨 Customization

### Update Token Information

Edit `constants.ts` to update:
- Token name and ticker
- Contract address
- Statistics
- Roadmap items
- Tokenomics data

### Styling

The project uses Tailwind CSS with custom colors defined in `index.html`:
- `neon-purple`: #b026ff
- `neon-green`: #39ff14
- `neon-blue`: #04d9ff
- `deep-space`: #0b001a
- `surface`: #1a102e

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## ⚠️ Disclaimer

This is a meme coin project for entertainment purposes only. Not financial advice. Always do your own research (DYOR) before investing in any cryptocurrency.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Foisalislambd/moondegen-token](https://github.com/Foisalislambd/moondegen-token)
- **Live Demo**: [moondegen-token.vercel.app](https://moondegen-token.vercel.app)

## 📄 License

This project is private and proprietary.
