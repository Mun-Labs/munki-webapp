import styled from "styled-components";
import { COLORS } from "../../colors";

interface IMunkiBadge {
  color?: string;
}

export const MunkiBadge = ({
  children,
  color = "",
}: IMunkiBadge & React.PropsWithChildren) => {
  return <MunkiBadgeStyled color={color}>{children}</MunkiBadgeStyled>;
};

interface IPropStyled {
  color: string;
}

const MunkiBadgeStyled = styled.div.attrs<IPropStyled>({
  className: "MunkiBadgeStyled",
})`
  display: inline-block;
  // margin: auto;
  padding: 12px;
  border-radius: 12px;
  background: ${(props) => props?.color || COLORS.japanese_laurel};
`;
