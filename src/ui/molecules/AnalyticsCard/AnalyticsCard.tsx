import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";

const LABEL_HEIGHT = 54;
const PADDING = 14;

const AnalyticsCardStyled = styled.div.attrs({
  className: "AnalyticsCardStyled",
})`
  height: 100%;
  border: 1px solid ${COLORS.magenta};
`;

interface AnalyticsCardProps extends ComponentProps<any> {
  label?: string;
  bottom?: ReactNode;
}

export const AnalyticsCard: FC<AnalyticsCardProps> = (props) => {
  const { children, style, label, bottom } = props;
  return (
    <AnalyticsCardStyled style={{ ...style }}>
      {label && (
        <div
          style={{
            height: LABEL_HEIGHT,
            padding: `4px ${PADDING}px`,
            borderBottom: `1px solid ${COLORS.magenta}`,
            ...Styles.h2,
            background: COLORS.black14,
          }}
        >
          {label}
        </div>
      )}
      <Flex
        vertical
        style={{ height: `calc(100% - ${LABEL_HEIGHT}px)`, padding: PADDING }}
      >
        <div style={{ width: "100%", height: "100%" }}>{children}</div>
        {bottom && (
          <div style={{ color: COLORS.white70, marginTop: "auto" }}>
            {bottom}
          </div>
        )}
      </Flex>
    </AnalyticsCardStyled>
  );
};
