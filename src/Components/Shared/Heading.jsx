import React from 'react';

const Heading = ({children}) => {
    return (
        <div className="w-full grid place-items-center my-10">
        <h2 className="text-3xl font-semibold  border-b-4 border-secondary pb-1 inline-block ">
         {children}
        </h2>
      </div>
    );
};

export default Heading;