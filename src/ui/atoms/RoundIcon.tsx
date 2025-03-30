import { Avatar } from "antd";
import { COLORS } from "../colors";
import { ComponentProps, FC } from "react";
import { AvatarProps } from "antd/es/skeleton/Avatar";

interface IconDemoProps extends ComponentProps<any> {
  src: string | undefined;
  size?: AvatarProps["size"];
}

export const RoundIcon: FC<IconDemoProps> = (props) => {
  const { src, size, style } = props;
  return (
    <Avatar
      size={size ?? 45}
      src={src ?? "/round-icon.png"}
      style={{ border: `1px solid ${COLORS.blue75}`, ...style }}
    />
  );
};
