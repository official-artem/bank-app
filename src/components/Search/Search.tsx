import { FC } from "react";
import "./styles/Search.scss";

interface Props {
  name: string;
}

export const Search: FC<Props> = ({ name }) => {
  return (
    <label className="search-label" htmlFor="search">
      <div className="search__wrapper">
        <input
          id="search"
          className="search"
          type="text"
          placeholder={`Welcome back, ${name}!`}
        />
        <div className="search-underline"></div>
      </div>
    </label>
  );
};

export default Search;
