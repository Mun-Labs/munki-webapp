// MunkiHoverCard
import { ComponentProps, FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { COL_DS } from "../../colors";

const MunkiHoverCardStyled = styled.div.attrs({
  className: "MunkiHoverCardStyled",
})`
  width: 100%;
  padding: 43px 59px;

  border: 1px solid transparent;
  border-radius: 65px;
  background-color: ${COL_DS.baseBlack};
  box-shadow: 0 0 21.4px 0 #ffee64;
  background: linear-gradient(${COL_DS.baseBlack} 0 0) padding-box,
    linear-gradient(to right, #fbe892, #ee1b84) border-box;
`;

interface IMunkiHoverCardProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {}

export const MunkiHoverCard: FC<IMunkiHoverCardProps> = (props) => {
  const { style, children } = props;
  return (
    <>
      <MunkiHoverCardStyled style={{ ...style }}>
        {children}
      </MunkiHoverCardStyled>
    </>
  );
};
