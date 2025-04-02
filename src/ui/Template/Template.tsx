// Template
import { ComponentProps, FC, HTMLAttributes } from "react";
import styled from "styled-components";

const TemplateStyled = styled.div.attrs({
  className: "TemplateStyled",
})``;

interface ITemplateProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {}

export const Template: FC<ITemplateProps> = (props) => {
  const { style } = props;
  return (
    <>
      <TemplateStyled style={{ ...style }}>Template</TemplateStyled>
    </>
  );
};
