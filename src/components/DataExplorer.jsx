import { useState, useEffect } from 'react';

const DataExplorer = () => {
    const [data, setData] = useState([]);
    const [resource, setResource] = useState('posts');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const folders = ['posts', 'comments', 'albums', 'photos'];

    const fetchData = async (targetResource) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${targetResource}?_limit=5`);
            if (!response.ok) throw new Error('Failed to fetch data');
            const json = await response.json();
            setData(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(resource);
    }, [resource]);

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ fontSize: '1.5rem' }}>📊</span>
                <h2 className="card-title">JSONPlaceholder Explorer</h2>
            </div>

            <div className="card-content">
                <div className="resource-tabs">
                    {folders.map(f => (
                        <button
                            key={f}
                            className={`tab-btn ${resource === f ? 'active' : ''}`}
                            onClick={() => setResource(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="spinner"></div>
                ) : error ? (
                    <div className="error-msg">{error}</div>
                ) : (
                    <ul className="explorer-list">
                        {data.map(item => (
                            <li key={item.id} className="explorer-item">
                                {item.title || item.name || item.body.substring(0, 50) + '...'}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button className="btn" onClick={() => fetchData(resource)} disabled={loading} style={{ marginTop: '1rem' }}>
                Refresh {resource}
            </button>
        </div>
    );
};

export default DataExplorer;
