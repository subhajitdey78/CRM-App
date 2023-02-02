import { CSidebar, CSidebarNav, CNavTitle, CNavItem } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilHome} from '@coreui/icons'
import '../styles/sidebar.css'
import { Link } from 'react-router-dom';
import React from 'react';
function Sidebar() {
    const logout = () => {
        localStorage.clear()
        window.location.href = "/"
    }

    return (
        <CSidebar unfoldable className= 'vh-100 bg-black'>
            <CSidebarNav>
                <CNavTitle className= 'text-light fw-normal'>
                     CRM App
                </CNavTitle>


                <CNavItem href='#'>
                <CIcon customeClassName="nav-icon" icon={cilHome}></CIcon>
                    <Link to= "/admin" className='text-decoration-none text-white mx-3'>Home</Link>
                </CNavItem>

                <div onClick={logout}>
                    <CNavItem href= "#">
                        <i className='bi bi-box-arrow-left text-white m-2'></i>
                        <div className='text-decoration-none text-white mx-3'>logout</div>
                    </CNavItem>
                </div>
            </CSidebarNav>
        </CSidebar>
    )
}

export default  Sidebar