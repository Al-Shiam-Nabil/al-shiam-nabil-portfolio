import React from 'react';

const MyLink = ({children}) => {
    return (
        <div>
               <li>
            <a href="" className="relative  group  py-1.5 lg:px-2 ">
              <span class="absolute  bottom-0 left-0 w-0 h-0.5 rounded-full bg-primary group-hover:w-full group-hover:transition-all ease-in-out duration-300"></span>
              {children}
            </a>
          </li>
        </div>
    );
};

export default MyLink;