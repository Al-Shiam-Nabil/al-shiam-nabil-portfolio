import React from 'react';
import { Link } from 'react-scroll';

const MyLink = ({children, to}) => {
    return (
        <div>
               <li>
            <Link to={to} smooth={true} duration={700} href="" className="relative  group  py-1.5 lg:px-2 ">
              <span className="absolute  bottom-0 left-0 w-0 h-0.5 rounded-full bg-primary group-hover:w-full group-hover:transition-all ease-in-out duration-300"></span>
              {children}
            </Link>
          </li>
        </div>
    );
};

export default MyLink;