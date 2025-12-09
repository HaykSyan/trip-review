# Trip Review

A React application for browsing and customizing ski trip packages. Users can view available resorts, select trips, customize options (room, insurance, add-ons), and see real-time price calculations.

## 🚀 Quick Start

### Prerequisites
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── api/              # API calls and mock data
├── components/       # React components
│   ├── atoms/       # Basic UI components (Button, Card, etc.)
│   ├── molecules/   # Composite components (PriceSummary, TripCustomizer, etc.)
│   └── organisms/   # Complex components (TripOverviewPanel, etc.)
├── hooks/           # Custom React hooks
├── layouts/         # Page layouts
├── pages/           # Page components (Resorts, Overview)
├── router/          # React Router configuration
├── stores/          # Zustand state management
├── types/           # TypeScript type definitions
└── utils/           # Utility functions (currency formatting, etc.)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🏗️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Routing
- **Zustand** - State management
- **React Query** - Data fetching and caching
- **Tailwind CSS** - Styling
- **Vitest** - Testing framework

## 💡 How It Works

1. **Browse Resorts** (`/`) - View available ski trip packages
2. **Select Trip** - Click "Reserve" to view trip details
3. **Customize** (`/overview/:id`) - Modify:
   - Room options
   - Insurance
   - Add-ons
4. **Price Calculation** - Real-time price updates as you customize
5. **Checkout** - Ready for payment integration

## 🔄 State Management

The app uses **Zustand** to manage trip selection and customizations:
- React Query fetches trip data from the API
- Zustand stores the selected trip and user customizations
- Components read from Zustand for calculations and display
- Price calculations update automatically when options change

## 🧪 Testing

Tests are located in `src/__tests__/`. Run tests with:

```bash
npm run test
```

## 📝 Notes

- Currently uses mock data (see `src/api/mock.ts`)
- All prices are calculated in real-time based on selected options
