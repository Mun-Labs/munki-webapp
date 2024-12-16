import styled from "styled-components";
import { COLORS } from "../../colors";
import { Flex } from "antd";
import { Styles } from "../../uiStyles";
import { ComponentProps, ReactNode } from "react";

const TextWithLabelContainer = styled.div`
  height: 100%;
  text-align: left;
`;

const Label = styled.div`
  color: ${COLORS.white70};
`;

const MainText = styled.div`
  font-weight: 800;
  font-size: ${Styles.h2.fontSize as string};
  margin-right: 8px;
`;

const Right = styled.div`
  color: ${COLORS.green};
`;

interface ITextWithLabelProps extends ComponentProps<any> {
  text: string;
  label?: string;
  right?: ReactNode;
  left?: ReactNode;
  leftIcon?: ReactNode;
}

export const TextWithLabel = (props: ITextWithLabelProps) => {
  const { style, label, text, left, right } = props;

  return (
    <TextWithLabelContainer
      className="TextWithLabelContainer"
      style={{ ...style }}
    >
      {label && <Label>{label} (i)</Label>}
      <Flex align="center">
        {left && (
          <div
            style={{ marginRight: 8, display: "flex", alignItems: "center" }}
          >
            {left}
          </div>
        )}
        <MainText>{text}</MainText>
        <Right>{right}</Right>
      </Flex>
    </TextWithLabelContainer>
  );
};
