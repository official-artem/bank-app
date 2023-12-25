import { FC, memo, useMemo, useRef, useState } from "react";
import clipboardCopy from "clipboard-copy";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";

import "./styles/InviteBonusProgram.scss";

interface Props {
  inviteCode: string;
}
export const InviteBonusProgram: FC<Props> = memo(({ inviteCode }) => {
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
  const nodeRef = useRef(null);

  const handleCopyClick = useMemo(() => {
    return () => {
      clipboardCopy(inviteCode)
        .then(() => {
          setIsShowMessage((prevState) => {
            setMessage("Text successfully copied");
            return !prevState;
          });
        })
        .catch(() => {
          setMessage("Something went wrong");
          setIsError((prevState) => !prevState);
          setIsShowMessage((prevState) => !prevState);
        });
    };
  }, [inviteCode]);

  return (
    <article className="invite-block">
      <p className="invite-block__message">
        Invite a friend with code below and redeem special bonus USD 15 from us!
      </p>

      <div className="invite-block__input-wrapper">
        <input
          className="invite-block__invite-code"
          type="text"
          disabled
          value={inviteCode || "artemhrechuk-jan2023"}
        />

        <button
          onClick={handleCopyClick}
          className="invite-block__copy-icon"
        ></button>
      </div>

      <CSSTransition
        in={isShowMessage}
        nodeRef={nodeRef}
        timeout={2000}
        className={cn("alert", { "alert--error": isError })}
        unmountOnExit
        onEnter={() => {
          setIsShowMessage(false);
        }}
      >
        <div ref={nodeRef}>{message}</div>
      </CSSTransition>
    </article>
  );
});
