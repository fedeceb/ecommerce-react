import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dropdown.scss";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className={dropdown ? 'sub-marcas clicked' : 'sub-marcas'} onClick={() => setDropdown(!dropdown)}>
        <Link to="/category/adidas" onClick={() => setDropdown(!dropdown)} ><li><button>Adidas</button></li></Link>
        <Link to="/category/converse" onClick={() => setDropdown(!dropdown)} ><li><button>Converse</button></li></Link>
        <Link to="/category/new-balance" onClick={() => setDropdown(!dropdown)} ><li><button>New Balance</button></li></Link>
        <Link to="/category/nike" onClick={() => setDropdown(!dropdown)} ><li><button>Nike</button></li></Link>
        <Link to="/category/puma" onClick={() => setDropdown(!dropdown)} ><li><button>Puma</button></li></Link>
        <Link to="/category/vans" onClick={() => setDropdown(!dropdown)} ><li><button>Vans</button></li></Link>
      </ul>
    </>
  );
}

export default Dropdown;