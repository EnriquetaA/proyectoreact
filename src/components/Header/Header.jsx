import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <Header>
      <Link to={"/"}>LOGO</Link>
      <Nav />
    </Header>
  );
};