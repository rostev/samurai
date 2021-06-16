import "./navBar.module.css";

const NavBar = () => {
    return (
        <nav className="nav areas">
            <div className="mainMenuItem"><a href="">Profile</a></div>
            <div className="mainMenuItem"><a href="">Message</a></div>
            <div className="mainMenuItem"><a href="">News</a></div>
            <div className="mainMenuItem"><a href="">Music</a></div>
            <div className="mainMenuItem"><a href="">Settings</a></div>
        </nav>
    );
};

export default NavBar;

