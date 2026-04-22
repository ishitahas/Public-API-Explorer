import { useState, useEffect } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUser = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://randomuser.me/api/');
            if (!response.ok) throw new Error('Failed to fetch user');
            const data = await response.json();
            setUser(data.results[0]);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <span style={{ fontSize: '1.5rem' }}>👤</span>
                <h2 className="card-title">User Profile</h2>
            </div>

            <div className="card-content">
                {loading ? (
                    <div className="spinner"></div>
                ) : error ? (
                    <div className="error-msg">{error}</div>
                ) : user ? (
                    <div className="user-profile">
                        <img
                            src={user.picture.large}
                            alt="Profile"
                            className="user-avatar"
                        />
                        <div className="user-info">
                            <p className="user-name">{`${user.name.first} ${user.name.last}`}</p>
                            <p className="user-email">{user.email}</p>
                            <p className="user-location">📍 {user.location.country}</p>
                            <p className="user-extra">Age: {user.dob.age} | Phone: {user.phone}</p>
                        </div>
                    </div>
                ) : null}
            </div>

            <button className="btn" onClick={fetchUser} disabled={loading} style={{ marginTop: '1rem' }}>
                {loading ? 'Searching...' : 'Get Random User'}
            </button>
        </div>
    );
};

export default UserProfile;
