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
    <li className="font-bold hover:bg-slate-100 px-2 py-1 rounded-sm transition duration-75 hover:text-slate-800" key={item}><a href={`#${item}`}>{item}</a></li>
  );

  return (
    <nav className="w-full bg-slate-900 text-slate-50">
      <ul className="flex gap-6 px-6 py-1 ">{navItems}</ul>
    </nav>
  );
}

export default Nav;
