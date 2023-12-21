import Navigation from "../Navigation/NavList";
import Search from "../Search/Search";
import { navLinks } from "@/data/links";
import "./styles/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Search name="Artem" />

      <Navigation links={navLinks} />
    </header>
  );
};

export default Header;
