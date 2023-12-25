import { FC } from "react";
import "./styles/TotalBalance.scss";

interface Props {
  balanceValue: number;
}

export const TotalBalance: FC<Props> = ({ balanceValue }) => {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 2,
  }).format(balanceValue);

  return (
    <article className="balance">
      <h3 className="balance__title">Total Balance</h3>
      <h2 className="balance__value">{formattedValue}</h2>
      <ul className="balance__bottom-wrapper">
        <li className="balance__item balance__item--send">
          <a className="balance__button" href="/">
            Send
          </a>
        </li>
        <li className="balance__item balance__item--request">
          <a className="balance__button" href="/">
            Request
          </a>
        </li>
        <li className="balance__item balance__item--top-up">
          <a className="balance__button" href="/">
            Top Up
          </a>
        </li>
      </ul>
    </article>
  );
};
