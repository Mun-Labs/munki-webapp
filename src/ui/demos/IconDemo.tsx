import { Avatar } from "antd";
import { COLORS } from "../colors";
import { ComponentProps, FC } from "react";
import { AvatarProps } from "antd/es/skeleton/Avatar";

interface IconDemoProps extends ComponentProps<any> {
  size?: AvatarProps["size"];
}

export const AvatarDemo: FC<IconDemoProps> = (props) => {
  const { size } = props;
  return (
    <>
      <Avatar
        size={size ?? "large"}
        src="/round-icon.png"
        style={{ border: `1px solid ${COLORS.blue75}` }}
      />
    </>
  );
};
