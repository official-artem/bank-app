import { FC, memo, useMemo } from "react";
import "./styles/Cards.scss";
import { formatCode } from "@/utils/formateCardCode";
import { links } from "@/data/card__links";
interface Props {
  name: string;
  surname: string;
  code: string;
}

export const Cards: FC<Props> = memo(({ name, surname, code }) => {
  const formattedCode = useMemo(() => formatCode(code), [code]);

  return (
    <article className="cards">
      <div className="cards__top-wrapper">
        <h2>Cards</h2>

        <a href="/showAll" className="cards__link--top">
          Show All
        </a>
      </div>

      <div className="cards__img-wrapper">
        <div className="cards__img--top">
          <h2 className="cards__user-name">
            {name} {surname}
          </h2>

          <div className="master-card-logo"></div>
        </div>

        <div className="cards__img--bottom">
          <div className="cards__card-code">{formattedCode}</div>

          <div className="cards__img-cvv">CVV</div>
        </div>
      </div>
      <div className="cards__link-wrapper">
        <ul className="cards__link-list">
          {links.map(({ id, img, title, url, arrow_img }) => (
            <li className="cards__item" key={id}>
              <div className="cards_link-item-wrapper">
                <img className="cards__link-icon" src={img} alt="1" />
                <a href={url}>{title}</a>
              </div>
              <img
                src={arrow_img}
                className="cards_arrow_img"
                alt="link arrow"
              ></img>
            </li>
          ))}
        </ul>

        <div className="cards__buttons-wrapper">
          <a className="cards__button cards__button--add" href="/">
            Add Card
          </a>
          <a className="cards__button cards__button--remove" href="/">
            Remove Card
          </a>
        </div>
      </div>
    </article>
  );
});
