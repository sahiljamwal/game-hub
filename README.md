# Game Hub

A modern game discovery web app built with React that helps you find new and interesting games to play. Browse games by platform, genre, and more.

## Features

- 🎮 Browse games from RAWG API
- 🔍 Search games by title
- 🎯 Filter games by platform
- 📂 Sort games by different criteria
- 🎨 Dark/Light mode support
- 🎭 Genre-based filtering
- 💯 Metacritic scoring
- 📱 Responsive design

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Styling:** Chakra UI
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Build Tool:** Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd game-hub
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your RAWG API key:

```env
VITE_RAWG_API_KEY=your_api_key_here
VITE_RAWG_BASE_URL=https://api.rawg.io/api
```

4. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # React components
├── hooks/           # Custom React hooks
├── services/        # API and other services
└── theme.ts         # Chakra UI theme configuration
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
