import { UserPill } from "@privy-io/react-auth/ui";

import { ComponentProps, FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { COL_DS } from "../../colors";

const MunkiLoginStyled = styled.div.attrs({
  className: "MunkiLoginStyled",
})`
  Button {
    margin-left: 20px;
    padding: 8px 23px;
    border: 2px solid ${COL_DS.secondary};
    border-radius: 16px;
    color: ${COL_DS.secondary};
    background: ${COL_DS.primary400};
    cursor: pointer;
  }
`;

interface IMunkiLoginProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {}

export const MunkiLogin: FC<IMunkiLoginProps> = (props) => {
  const { style } = props;
  return (
    <>
      <MunkiLoginStyled style={{ ...style }}>
        <UserPill />
      </MunkiLoginStyled>
    </>
  );
};
