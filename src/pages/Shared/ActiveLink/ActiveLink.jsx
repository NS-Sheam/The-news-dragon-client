import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive
                    ? "text-primary text-decoration-none container"
                    : "text-dark text-decoration-none container"

            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;