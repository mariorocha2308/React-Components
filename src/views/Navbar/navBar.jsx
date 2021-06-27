import './navBar.css'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className='navBar'>
            <div className= 'navBar-logo'>
               <label >
                ReactWeb
               </label> 
            </div>
            
            <div className= 'navBar-routes'>
                <NavLink exact to ='/' style={{textDecoration: 'none'}}
                >
                    <span>
                        Func
                    </span>
                </NavLink>
                <NavLink  exact to ='/State' style={{textDecoration: 'none'}}>
                    <span>
                        Class
                    </span>
                </NavLink> 
                
            </div>
        </div> 
    );
}
 
// activeClassName='active'  className='active-line'
export default NavBar;