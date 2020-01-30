import React from 'react';
import './SideMenu.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faClock,
    faUsers,
    faUser,
    faBell 
} from '@fortawesome/free-solid-svg-icons'

//const showText = true;

function SideMenu(props) {
    return <React.Fragment>
       
            <nav className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <h3>VariyasLabs.com</h3>
                </div>

                <ul className="list-unstyled components">
                    {/* <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse"
                          aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                            <li><a>Home One</a></li>
                        </ul>
                    </li> */}

                    <li>
                        <NavLink exact to="/" activeClassName="active">
                            <FontAwesomeIcon icon={faClock} /> <span>Attendance</span>
                            {/* {props.showText && <span>Attendance</span>} */}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/addmembers" activeClassName="active">
                             <FontAwesomeIcon icon={faUser} /> <span>Add Members</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/membersList" activeClassName="active">
                        <FontAwesomeIcon icon={faUsers} /> <span>Members List</span>
                        </NavLink>
                    </li>
                   
                    <li>
                        <NavLink exact to="/notification" activeClassName="active">
                        <FontAwesomeIcon icon={faBell} /> <span>Notification</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </nav>
            
            
  
    </React.Fragment>
}

// https://www.techiediaries.com/react-bootstrap/
// https://bootstrapious.com/tutorial/sidebar/index4.html#
// https://github.com/FortAwesome/react-fontawesome


export default SideMenu;
