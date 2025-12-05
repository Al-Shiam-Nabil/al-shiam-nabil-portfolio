import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={`${className} max-w-[1400px] mx-auto px-3 sm:px-5 md:px-7 lg:px-8`}>
            {children}
        </div>
    );
};

export default Container;