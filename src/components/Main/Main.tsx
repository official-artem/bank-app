import { FC } from "react";
import { Cards } from "../Cards";
import { TotalBalance } from "../TotalBalance";
import { InviteBonusProgram } from "@/InviteBonusProgram";
import { RecentContacts } from "../RecentContacts";
import { TransactionsHistory } from "../TransactionsHistory";

export const Main: FC = () => {
  return (
    <main>
      <Cards />

      <TotalBalance />

      <InviteBonusProgram />

      <RecentContacts />

      <TransactionsHistory />
    </main>
  );
};

export default Main;
