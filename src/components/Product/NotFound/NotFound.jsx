import NotfoundStyle from './NotFound.module.css'
import React from 'react';

const NotFound = () => {
    return (
        <div className={NotfoundStyle.error}>
            <img src="https://httpstatusdogs.com/img/404.jpg" alt="" />
        </div>
    );
};

export default NotFound;
