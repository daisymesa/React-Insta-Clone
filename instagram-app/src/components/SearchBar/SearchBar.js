import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        //Main Container div for Search Bar
        <div className="search-bar-section">

            <div className="logo-image-section">

                <div className="logo-icon">
                    <img src="https://cdn.worldvectorlogo.com/logos/instagram-glyph-1.svg" alt="Instagram Icon" />
                </div>

                <div className="logo-text">
                    <img src="https://cdn.worldvectorlogo.com/logos/instagram-1.svg" alt="Instagram Logo" />
                </div>

            </div>


            <div className = "search-bar">
                <input type="text" placeholder="Search" />
            </div>


            <div className="search-bar-icons">


            <div className="icon">
                <img src="https://static.thenounproject.com/png/7039-200.png" alt="Compass Icon" />
                </div>

                <div className="icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt="Heart Icon" />
                </div>


                <div className="icon">
                <img src="https://image.flaticon.com/icons/png/512/23/23228.png" alt="User Icon" />
                </div>
            </div>

        </div>
        //Container div for Search Bar Ends Here
    );
};


export default SearchBar;