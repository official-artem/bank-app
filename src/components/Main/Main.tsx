import { FC, memo } from "react";
import { Cards } from "../Cards";
import { TotalBalance } from "../TotalBalance";
import { InviteBonusProgram } from "@/components/InviteBonusProgram";
import { RecentContacts } from "../RecentContacts";
import { TransactionsHistory } from "../TransactionsHistory";

export const Main: FC = memo(() => {
  return (
    <main>
      <Cards name="Artem" surname="Hrechuk" code="012345678910" />

      <TotalBalance />

      <InviteBonusProgram />

      <RecentContacts />

      <TransactionsHistory />
    </main>
  );
});

export default Main;
