import React from 'react';

// TAILWIND STYLE : nav 
const navStyle = ""

// TAILWIND STYLE : ul 
const ulStyle = ""

// TAILWIND STYLE : LI 
const liStyle = ""


// Nav function
function Nav(props) {
  const items = props.items;
  const navItems = items.map((item) =>
    <li className="font-bold hover:bg-blue-500 px-2 py-1 rounded-sm transition duration-75 hover:text-white" key={item}><a href={`#${item}`}>{item}</a></li>
  );

  return (
    <nav className="w-full text-slate-900">
      <ul className="flex gap-6 px-6 py-3 ">{navItems}</ul>
    </nav>
  );
}

export default Nav;
