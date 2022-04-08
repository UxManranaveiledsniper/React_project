import React from 'react';

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-md bg-light text-darl">
            <div className='container'>
                <a className="navbar-brand" href="#">Intelligence</a>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Hunting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Graph</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">API</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className="nav-item">
                            <a className="nav-link" href="#">login</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div> */}
                {/* <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-danger">Sign in</button>
                <button type="button" class="btn btn-dark">Sign up</button>
            </div> */}
        </nav>
    );
}

export default Navbar;