import { ComponentProps, FC } from "react";
import styled from "styled-components";

const TemplateStyled = styled.div.attrs({ className: "TemplateStyled" })``;

interface TemplateProps extends ComponentProps<any> {}

export const Template: FC<TemplateProps> = (props) => {
  const { style } = props;
  return (
    <TemplateStyled style={{ ...style }}>
      <div>Template</div>
    </TemplateStyled>
  );
};
