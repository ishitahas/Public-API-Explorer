import { useState, useEffect } from 'react';

const DogFinder = () => {
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    /**
     * Fetches a random dog image from the Dog CEO API
     */
    const fetchDog = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            if (!response.ok) throw new Error('Failed to fetch dog');
            const data = await response.json();
            setDog(data.message);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const extractBreed = (url) => {
        if (!url) return '';
        // Format: https://images.dog.ceo/breeds/spaniel-cocker/n02102318_7227.jpg
        const parts = url.split('/breeds/');
        if (parts.length < 2) return 'Unknown';
        const breedPart = parts[1].split('/')[0];
        return breedPart.replace('-', ' ');
    };

    const copyToClipboard = () => {
        if (dog) {
            navigator.clipboard.writeText(dog);
            alert('Image URL copied to clipboard!');
        }
    };

    useEffect(() => {
        fetchDog();
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ fontSize: '1.5rem' }}>🐕</span>
                <h2 className="card-title">Dog Finder</h2>
            </div>

            <div className="card-content">
                <div className="dog-img-container">
                    {loading ? (
                        <div className="spinner"></div>
                    ) : error ? (
                        <div className="error-msg">{error}</div>
                    ) : (
                        <img src={dog} alt="Random Dog" className="dog-img" />
                    )}
                </div>

                {!loading && !error && dog && (
                    <>
                        <p className="breed-label">Breed: {extractBreed(dog)}</p>
                        <button className="btn btn-secondary" onClick={copyToClipboard}>
                            Copy Image URL
                        </button>
                    </>
                )}
            </div>

            <button className="btn" onClick={fetchDog} disabled={loading} style={{ marginTop: '1rem' }}>
                {loading ? 'Fetching...' : 'Get New Dog'}
            </button>
        </div>
    );
};

export default DogFinder;
