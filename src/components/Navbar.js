import { useState, useRef } from "react";
import { useOnclick } from "../useOnclick";

const Navbar = () => {
  const ref = useRef();
  const [dropDown, setDropDown] = useState(false);

  useOnclick(ref,dropDown, ()=> setDropDown(false))


  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button onClick={() => setDropDown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropDown && (
             <ul>
             <li>Design</li>
             <li>Development</li>
           </ul>
          )}

        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
