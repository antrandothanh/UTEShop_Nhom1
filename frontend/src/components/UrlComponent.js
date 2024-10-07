import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const UrlComponent = ({sendLocationToParent}) => {
    const location = useLocation();
    useEffect(() => {
        sendLocationToParent(location.pathname);
    }, [location]);
}

export default UrlComponent;