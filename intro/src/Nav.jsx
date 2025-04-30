import "./Navbar.css";

function Nav() {
    return (
        <div id="navbar">
            <div><h1>Akhil Solution</h1></div>
            <div id="child2">
                <p className="nav-item">Home</p>
                <p className="nav-item">About</p>
                <p className="nav-item">Contact</p>
            </div>
            <div><h3>Login</h3></div>
        </div>
    );
}

export default Nav;
