import { FC } from "react";
import "./styles/Search.scss";

interface Props {
  name: string;
}

export const Search: FC<Props> = ({ name }) => {
  return (
    <label className="header__search--label" htmlFor="header__search">
      <input
        id="header__search"
        className="header__search"
        type="text"
        placeholder={`Welcome back, ${name}!`}
      />
      <div className="header__search--underline"></div>
    </label>
  );
};

export default Search;
