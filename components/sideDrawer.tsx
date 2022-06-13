import React, { FC, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from "react-burger-menu";
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: black;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: black;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
`;

const NavIcon = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    font-size: 2rem;
    margin-left: 2rem;
`;

const SidebarWrap = styled.div``;


const SideDrawer: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavIcon to="#" onClick={showSidebar}>
                <AiOutlineMenu />
            </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineClose />
                </NavIcon>
                <AnchorLink href='#vision' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Vision</AnchorLink>
            <AnchorLink href='#action' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Action</AnchorLink>
            <AnchorLink href='#roadmap' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">RoadMap</AnchorLink>

            <a href="https://doc.exploratrium.io" className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Lite Paper</a>
            </SidebarWrap>
        </SidebarNav>
    </IconContext.Provider>
  );
};

export default SideDrawer;

