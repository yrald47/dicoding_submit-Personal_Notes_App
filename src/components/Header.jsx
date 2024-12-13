import React, { useState } from "react";

// Membuat komponen HeaderApp dengan komponen fungsional
const HeaderApp = ({ searchQuery, onSearchHandler }) => {
    return (
        <div className="app_header">
            <h1>Notes App</h1>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search your note here ..."
                    value={searchQuery}
                    onChange={onSearchHandler}
                />
            </div>
        </div>
    );
};

export default HeaderApp;
