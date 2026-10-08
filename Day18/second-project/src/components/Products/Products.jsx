import { useState, useEffect } from 'react';
import {Outlet,NavLink} from 'react-router-dom';

export default function Products() {
    let [Count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted or updated");

        return () => {
            console.log("Component will unmount");
        };
    }, []);

    useEffect(() => {
        if(Count === 0) {
            return;
        }
        console.log(`products Component Did Update`);
    }, [Count]);

    function updateCount() {
        setCount(Count + 1);
    }
    return (
        <>
            <div className="container-fluid text-2xl bg-primary p-4 mt-3 text-center text-light">
                <h2>Gallery</h2>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href='#'>Products</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`/product`}>Product Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to={`allProduct`}>Products</NavLink>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
            <Outlet />
        </>
    );
}
