import styled from "styled-components";
import { Flex } from "antd";
import { Styles } from "../../uiStyles";
import { ComponentProps, ReactNode } from "react";
import { COLORS } from "../../colors";

const TextWithDescriptionContainer = styled.div`
  height: 100%;
  text-align: left;
`;

const MainText = styled.div`
  font-weight: 800;
  font-size: ${Styles.h3.fontSize as string};
  margin-right: 8px;
`;

const Description = styled.div.attrs({ className: "Right" })`
  color: ${COLORS.grey70};
  font-size: ${Styles.textSm.fontSize as string};
  font-family: ${Styles.fontSansSerif.fontFamily as string} !important;
`;

interface ITextWithDescriptionProps extends ComponentProps<any> {
  text: ReactNode;
  mainTextStyles?: React.CSSProperties;
  description?: ReactNode;
  right?: ReactNode;
  left?: ReactNode;
  leftIcon?: ReactNode;
}

export const TextWithDescription = (props: ITextWithDescriptionProps) => {
  const { style, mainTextStyles, text, description, left } = props;

  return (
    <TextWithDescriptionContainer
      className="TextWithDescriptionContainer"
      style={{ ...style }}
    >
      <Flex align="center">
        {left && (
          <div
            style={{ marginRight: 9, display: "flex", alignItems: "center" }}
          >
            {left}
          </div>
        )}
        <div>
          <MainText style={{ ...Styles.ellipsis, ...mainTextStyles }}>
            {text}
          </MainText>
          <Description>{description}</Description>
        </div>
      </Flex>
    </TextWithDescriptionContainer>
  );
};
