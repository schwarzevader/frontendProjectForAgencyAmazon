import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as OiIcons from "react-icons/io";
import {Link} from "react-router-dom";
import React, {useState, useEffect, useRef} from "react";
import "./Navbar.css"
import {IconContext} from 'react-icons';

export function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const showSidebar = () => setSidebar(!sidebar);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setSidebar(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebar]);

    return (
        <>
            <IconContext.Provider value={{ color: '#050505' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars' onClick={showSidebar}>
                        <FaIcons.FaBars />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'} ref={sidebarRef}>
                    <ul className='nav-menu-items' onClick={(e) => e.stopPropagation()}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars' onClick={showSidebar}>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        <li className='navbar-toggle'>
                            <Link to="/">
                                <OiIcons.IoMdHome onClick={showSidebar} />
                            </Link>
                        </li>
                        <li  className='navbar-toggle'>

                            <Link to="/all">
                                <OiIcons.IoMdPeople onClick={showSidebar} />
                            </Link>
                        </li>
                        {/*{SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}*/}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}


// function Navbar(){
//     const [sidebar,setSidebar]= useState(false);
//
//     const showSidebar=()=>{setSidebar(!sidebar)};
//     return(
//         <>
//             <div className="navbarContainer">
//                 <Link to='#' className='menu-bars'>
//                     <FaIcons.FaBars onClick={showSidebar}/>
//                 </Link>
//             </div>
//             <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
//                 <ul className='nav-menu-items'  onClick={showSidebar}>
//                     <li className="navbar-toggler">
//                         <Link to="#" className="menu-bars">
//                             <AiIcons.AiOutlineClose/>
//                         </Link>
//                     </li>
//                     <li><Link to="/all" data-bs-dismiss="offcanvas">
//                         <OiIcons.IoMdPeople/>
//                     </Link></li>
//                 </ul>
//             </nav>
//         </>
//     );
// }