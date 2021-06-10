import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header areas">
                <img src="https://api.freelogodesign.org/assets/thumb/logo/21888881_400.png"
                     alt="logo"
                     className="headerLogo"/>
            </header>
            <nav className="nav areas">
                <div>Profile</div>
                <div>Message</div>
                <div>News</div>
                <div>Music</div>
            </nav>
            <div className="content areas">Main content</div>
        </div>
    );
}

export default App;
