import DogFinder from './components/DogFinder';
import JokeGenerator from './components/JokeGenerator';
import UserProfile from './components/UserProfile';
import DataExplorer from './components/DataExplorer';

/**
 * Main App Component
 * Renders the Public API Playground dashboard with a grid of interactive API cards.
 */

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Public API Playground</h1>
      </header>

      <main className="dashboard-grid">
        {/* Card for fetching and displaying random dog images */}
        <DogFinder />

        {/* Card for generating random jokes with punchline toggle */}
        <JokeGenerator />

        {/* Card for displaying random user profiles with contact details */}
        <UserProfile />

        {/* Card for exploring various resources from JSONPlaceholder */}
        <DataExplorer />
      </main>

      <footer style={{ marginTop: '4rem', textAlign: 'center', color: '#94a3b8', fontSize: '0.875rem' }}>
        <p>Built with ❤️ using Google Antigravity & React</p>
      </footer>
    </div>
  );
}

export default App;
