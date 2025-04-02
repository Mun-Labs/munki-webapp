// MunkiDialog
import { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { COL_DS } from "../../colors";

const MunkiDialogStyled = styled.div.attrs({
  className: "MunkiDialogStyled",
})`
  width: 640px;
  height: 360px;
  position: relative;
  top: 100px;
  border-radius: 14.71px;
  padding: 38px 10px;

  background: #0b0b0b;

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #242424;
  box-shadow: 0 0 21.4px 0 #ee1b8470;
  background: linear-gradient(${COL_DS.card} 0 0) padding-box,
    linear-gradient(to right, #ee1b84, #ee1b84) border-box;

  display: flex;
  gap: 32px;
`;

interface IMunkiDialogProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

export const MunkiDialog: FC<IMunkiDialogProps> = (props) => {
  const { style, children, ...rest } = props;
  return (
    <MunkiDialogStyled style={{ ...style }} {...rest}>
      {children || "MunkiDialog"}
    </MunkiDialogStyled>
  );
};
