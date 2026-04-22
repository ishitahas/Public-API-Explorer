import { useState, useEffect } from 'react';

const JokeGenerator = () => {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPunchline, setShowPunchline] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        setShowPunchline(false);
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            if (!response.ok) throw new Error('Failed to fetch joke');
            const data = await response.json();
            setJoke(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ fontSize: '1.5rem' }}>😂</span>
                <h2 className="card-title">Joke Generator</h2>
            </div>

            <div className="card-content">
                {loading ? (
                    <div className="spinner"></div>
                ) : error ? (
                    <div className="error-msg">{error}</div>
                ) : joke ? (
                    <div className="joke-container">
                        <p className="joke-setup">{joke.setup}</p>
                        {showPunchline ? (
                            <p className="joke-punchline">{joke.punchline}</p>
                        ) : (
                            <button
                                className="btn btn-secondary"
                                style={{ marginTop: '1rem', width: 'auto' }}
                                onClick={() => setShowPunchline(true)}
                            >
                                Show Punchline
                            </button>
                        )}
                    </div>
                ) : null}
            </div>

            <button className="btn" onClick={fetchJoke} disabled={loading} style={{ marginTop: '1rem' }}>
                {loading ? 'Thinking...' : 'Next Joke'}
            </button>
        </div>
    );
};

export default JokeGenerator;
