import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./LeftNav.css";

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4>All Catagory </h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p
                        key={category.id}
                        className='category p-2'
                    >
                        <Link 
                        to={`/category/${category.id}`}
                        className='text-decoration-none text-black bg-light catagory-link'
                        >{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;