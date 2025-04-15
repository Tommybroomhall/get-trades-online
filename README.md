# Get Trades Online

A professional website service platform for tradespeople (builders, plumbers, electricians, etc.) to easily create and manage their online presence.

## Overview

Get Trades Online helps tradespeople establish a professional web presence quickly. The platform offers:

- Fast website creation (within 72 hours)
- WhatsApp-based customer service and website management
- One-time payment with no monthly subscription fees
- Mobile-responsive professional websites tailored for trades

## Features

- **Personal Account Manager**: Each client gets a dedicated manager accessible via WhatsApp
- **Simple Website Updates**: Request changes anytime through WhatsApp
- **Performance Tracking**: Weekly website stats and visitor analytics
- **Portfolio Showcase**: Display completed work with professional images
- **Customer Reviews Integration**: Build trust with verified reviews
- **Mobile Optimization**: Fully responsive websites that work on all devices

## Technical Stack

- React.js with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Vite for build tooling
- Various React libraries including:
  - react-helmet-async for SEO
  - lucide-react for icons
  - react-router-dom for routing

## Environment Setup

1. Copy `.env.example` to `.env`
2. Update the values in `.env` with your own credentials
3. Never commit the `.env` file to version control

Required environment variables:
- REACT_APP_WHATSAPP_NUMBER: Your business WhatsApp number
- REACT_APP_SUPERCHAT_API_KEY: Your Superchat API key

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Structure

- `/src/components`: Reusable UI components
- `/src/pages`: Page components corresponding to routes
- `/src/services`: API and service functions
- `/src/assets`: Static assets like images
- `/src/data`: Data files and constants
- `/src/types`: TypeScript type definitions

## Contact

For questions or support, please reach out via WhatsApp at the number specified in your environment variables.

## License

[Add appropriate license information here]