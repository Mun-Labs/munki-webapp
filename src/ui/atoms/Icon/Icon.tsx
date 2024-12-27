// Icon
import { ComponentProps, FC } from "react";
import styled from "styled-components";

const IconStyled = styled.div.attrs({
  className: "IconStyled",
})`
  display: flex;
  align-items: center;
`;

interface IconProps extends ComponentProps<any> {
  src: string;
  size?: number;
  width?: number;
  height?: number;
}

export const Icon: FC<IconProps> = (props) => {
  const { style, src, size, width, height } = props;
  return (
    <IconStyled style={{ ...style }}>
      <div
        style={{
          display: "inline-block",
          width: width ?? size ?? 24,
          height: height ?? size ?? 24,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
        }}
      ></div>
    </IconStyled>
  );
};
