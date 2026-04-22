# 🚀 Public API Playground

A premium, interactive dashboard that explores four different public APIs. Built with **React** and **Vite**, featuring a sleek dark-mode design with glassmorphism effects.

## ✨ Features

- **🐕 Dog Finder**: Fetch random dog images and see the breed parsed directly from the URL. Includes a "Copy Image URL" feature.
- **😂 Joke Generator**: Get random jokes with a toggleable punchline for a bit of suspense.
- **👤 User Profile**: Generate random user profiles with name, photo, email, country, age, and phone number.
- **📊 JSONPlaceholder Explorer**: Explore various resources like Posts, Comments, Albums, and Photos from the JSONPlaceholder API.

## 🛠️ Technical Implementation

- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (Premium Custom Design)
- **Data Fetching**: Native `fetch()` API with `async/await`.
- **Modularity**: Each API section is a separate React component.
- **Responsive**: Fully responsive grid layout for desktop and mobile.
- **SEO**: Meta tags and semantic HTML hierarchy.

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## 🌐 Public Deployment

### Option 1: Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New"** > **"Project"**.
4. Import your repository.
5. Vercel will automatically detect Vite and set the build command to `npm run build` and output directory to `dist`.
6. Click **"Deploy"**.

### Option 2: Netlify
1. Build the project locally:
   ```bash
   npm run build
   ```
2. Drag and drop the `dist` folder into the Netlify "Drop" area, or connect your GitHub repository for automatic deployments.

---
*Built for Lab 07-1*
