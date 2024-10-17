import React, { createContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Menubar from './Menubar';
import Home from './Home';
import Footer from './Footer';

// Create the context
export const AppContext = createContext();

const Main = () => {
    // State management for products, search, and menu
    const [prod, setProd] = useState([]);
    const [search, setSearch] = useState("");
    const [menu, setMenu] = useState("");
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch products from the API
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(json => {
                setProd(json);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        // Provide the state to the rest of the components
        <AppContext.Provider value={{ prod, search, setSearch, menu, setMenu }}>
            <div>
                <Navbar />
                <Menubar />
                {loading ? <p>Loading products...</p> : <Home />}
                <Footer />
                
            </div>
        </AppContext.Provider>
    );
};

export default Main;
