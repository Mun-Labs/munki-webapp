import styled from "styled-components";
import { COLORS } from "../../colors";
import { Flex } from "antd";
import { Styles } from "../../uiStyles";
import { ComponentProps, ReactNode } from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

const TextWithLabelContainer = styled.div`
  height: 100%;
  text-align: left;
`;

const Label = styled.div.attrs({ className: "Label" })`
  color: ${COLORS.white70};
  font-size: ${Styles.h3.fontSize as string};
`;

const MainText = styled.div`
  font-weight: 800;
  font-size: ${Styles.h2.fontSize as string};
  margin-right: 8px;
`;

const Right = styled.div.attrs({ className: "Right" })`
  color: ${COLORS.green};
  font-size: ${Styles.h3.fontSize as string};
`;

interface ITextWithLabelProps extends ComponentProps<any> {
  text: ReactNode;
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
      {label && (
        <Label>
          {label} <InfoCircleOutlined />
        </Label>
      )}
      <Flex align="center">
        {left && (
          <div
            style={{ marginRight: 9, display: "flex", alignItems: "center" }}
          >
            {left}
          </div>
        )}
        <Flex align="center" style={{ marginTop: 4 }}>
          <MainText>{text}</MainText>
          <Right>{right}</Right>
        </Flex>
      </Flex>
    </TextWithLabelContainer>
  );
};
