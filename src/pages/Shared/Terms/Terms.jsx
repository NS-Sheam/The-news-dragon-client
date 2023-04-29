import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa repudiandae neque numquam quia vitae architecto eligendi mollitia qui eveniet repellendus illum veritatis in, ipsam minima molestiae ratione cupiditate pariatur reprehenderit tenetur deserunt. Odit atque id beatae a tempora vel. Repellat atque veritatis, aliquid molestiae possimus odio? Harum fugiat dicta vitae!</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;