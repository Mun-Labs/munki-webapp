import { Flex } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { AvatarDemo } from "../../demos/IconDemo";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";

const AvatarWithTextStyled = styled.div.attrs({
  className: "AvatarWithTextStyled",
})``;

interface AvatarWithTextProps extends ComponentProps<any> {}

export const AvatarWithText: FC<AvatarWithTextProps> = (props) => {
  const { style } = props;
  return (
    <AvatarWithTextStyled style={{ ...style }}>
      <Flex align="center">
        <AvatarDemo size={40} />
        <div style={{ marginLeft: 12 }}>
          <div style={{ color: COLORS.magenta, ...Styles.h3 }}>INTERNS</div>
          <div style={{ color: COLORS.yellow }}>@Intern_ai</div>
        </div>
      </Flex>
    </AvatarWithTextStyled>
  );
};
