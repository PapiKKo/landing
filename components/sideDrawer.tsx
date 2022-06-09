import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
        <AnchorLink href='#vision' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Vision</AnchorLink>
        <AnchorLink href='#action' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Action</AnchorLink>
        <AnchorLink href='#roadmap' className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">RoadMap</AnchorLink>

        <a href="https://doc.exploratrium.io" className="menu-item ml-3 text-xl hover:text-gray-600 border-gray-800 hover:border-b-2">Lite Paper</a>

    </Menu>
  );
};