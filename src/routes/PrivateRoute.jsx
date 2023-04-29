import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <Spinner className='d-block mx-auto' animation="grow" />
    }
    if (user) {
        return children;       
    }
    else {
        return <Navigate state={{form: location}} to={"/login"} replace></Navigate>
    }
};

export default PrivateRoute;