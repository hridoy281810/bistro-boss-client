import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart,FaWallet,FaCalendarAlt,FaHome, FaBars, FaShoppingBag, FaMailBulk, FaBook} from "react-icons/fa";
import useCart from '../Hooks/useCart';
import { ImList2, ImSpoonKnife } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import useAdmin from '../Hooks/useAdmin';
const Dashboard = () => {
    const [cart] = useCart()
    //  TODO: load data from the server to have dynamic isAdmin based on data 
    // const isAdmin = true;
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" ml-8 drawer-content ">
          {/* <!-- Page content here -->
           */}
           <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-[#D1A054]">
            {
              isAdmin ? <>
                <li><NavLink to='/dashboard/adminHome'><FaHome/> Admin Home</NavLink></li>
            <li><NavLink to='/dashboard/addItem'><ImSpoonKnife /> Add an Item</NavLink></li>
            <li><NavLink to='/dashboard/manageItems'><ImList2 /> Manage Items</NavLink></li>
            <li ><NavLink to='/dashboard/mycart'><FaBook/>Manage Booking</NavLink>
           
            </li>
            <li ><NavLink to='/dashboard/allusers'><HiUserGroup />All Users</NavLink>
            </li>

              </>: <>
                <li><NavLink to='/dashboard/userHome'><FaHome/> User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'><FaCalendarAlt /> Reservation</NavLink></li>
            <li><NavLink to='/dashboard/history'><FaWallet /> Payment History</NavLink></li>
            <li ><NavLink to='/dashboard/mycart'><FaShoppingCart /> My Cart   <span className="badge  badge-secondary">+{cart?.length || 0}</span></NavLink>
           
            </li>
              </>
            }
            {/* <!-- Sidebar content here --> */}
           
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome/>Home</NavLink></li>
            <li><NavLink to='/menu'><FaBars/>Menu</NavLink></li>
            <li><NavLink to='/order/salad'><FaShoppingBag/>Shop</NavLink></li>
            <li><NavLink to='/'><FaMailBulk/>Contact</NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;