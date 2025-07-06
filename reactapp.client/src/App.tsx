import './App.css';
import { useState } from 'react';

function App() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="main-container">
            <div className="card">
                <h2 className="title">{isLogin ? 'Login' : 'Registrieren'}</h2>
                <form className="form">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Benutzername"
                            className="input"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="E-Mail"
                        className="input"
                    />
                    <input
                        type="password"
                        placeholder="Passwort"
                        className="input"
                    />
                    <button type="submit" className="btn">
                        {isLogin ? 'Einloggen' : 'Registrieren'}
                    </button>
                </form>
                <p className="switch" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin
                        ? 'Noch kein Konto? Jetzt registrieren'
                        : 'Schon registriert? Jetzt einloggen'}
                </p>
            </div>
        </div>
    );
}

export default App;
