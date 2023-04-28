import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveCategory = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "active-category text-decoration-none text-black d-block p-2 mb-2"
                    : "text-decoration-none text-black bg-light d-block bg-transparent p-2 mb-2"

            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveCategory;