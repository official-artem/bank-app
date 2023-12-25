import { FC, memo } from "react";
import { Cards } from "../Cards";
import { TotalBalance } from "../TotalBalance";
import { InviteBonusProgram } from "@/components/InviteBonusProgram";
import { RecentContacts } from "../RecentContacts";
import { TransactionsHistory } from "../TransactionsHistory";
import "./styles/Main.scss";

export const Main: FC = memo(() => {
  return (
    <main className="main">
      <Cards name="Artem" surname="Hrechuk" code="012345678910" />

      <TotalBalance balanceValue={29459.94} />

      <InviteBonusProgram inviteCode="artemhrechuk-jan2023" />

      <RecentContacts />

      <TransactionsHistory />
    </main>
  );
});

export default Main;
