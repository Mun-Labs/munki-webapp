import styled from "styled-components";
import { COLORS } from "../../colors";
import "./TextWithLabel.css";
import { Flex } from "antd";
import { Styles } from "../../uiStyles";

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

interface ITextWithLabelProps {
  label: string;
  text: string;
  right?: string;
}

export const TextWithLabel = ({ label, text, right }: ITextWithLabelProps) => {
  return (
    <TextWithLabelContainer className="TextWithLabelContainer">
      <Label>{label} (i)</Label>
      <Flex align="center">
        <MainText>{text}</MainText>
        <Right>{right}</Right>
      </Flex>
    </TextWithLabelContainer>
  );
};
