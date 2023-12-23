import Navigation from "../Navigation/NavList";
import Search from "../Search/Search";
import { navLinks } from "@/data/header_links";
import "./styles/Header.scss";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="header">
      <Search name="Artem" />

      <Navigation links={navLinks} />
    </header>
  );
});
