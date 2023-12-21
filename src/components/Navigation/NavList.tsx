import { NavLinkType } from "@/data/types/navLinks.types";
import { FC, memo } from "react";
import "./styles/NavList.scss";

interface Props {
  links: NavLinkType[];
}

export const NavList: FC<Props> = memo(({ links }) => {
  return (
    <ul className="header__nav--list">
      {links.map(({ id, title, url }) => (
        <li className="header__item" key={id}>
          <a className="header__link" href={url}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
});

export default NavList;
