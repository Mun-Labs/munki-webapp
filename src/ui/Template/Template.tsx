import { ComponentProps, FC } from "react";
import styled from "styled-components";

interface TemplateProps extends ComponentProps<any> {}

const TemplateStyled = styled.div.attrs({ className: "TemplateStyled" })``;

export const Template: FC<TemplateProps> = ({ style }) => {
  return (
    <TemplateStyled style={{ ...style }}>
      <div>Template</div>
    </TemplateStyled>
  );
};
