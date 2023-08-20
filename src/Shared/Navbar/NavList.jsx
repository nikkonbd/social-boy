import React from 'react';
import NavListMenu from './NavListMenu';
import { MenuItem, Typography } from '@material-tailwind/react';

import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
  } from "@heroicons/react/24/outline";

// nav list component
const navListItems = [
    {
      label: "Account",
      icon: UserCircleIcon,
    },
    {
      label: "Blocks",
      icon: CubeTransparentIcon,
    },
    {
      label: "Docs",
      icon: CodeBracketSquareIcon,
    },
  ];

const NavList = () => {
    return (
        <div>
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon },) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
        </div>
    );
};

export default NavList;