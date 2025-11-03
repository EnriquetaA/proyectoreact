import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
  const {getTotalItems} = useCartContext();

  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/category/electronica"}>Electronica</Link>
        </li>
        <li>
          <link>Carrito</link>
          {getTotalItems() > 0 && (
            <span  clasName="in-cart">{getTotalItems()}</span>
          )}
       </li>
      </ul>
    </nav> 
        );
 };

    