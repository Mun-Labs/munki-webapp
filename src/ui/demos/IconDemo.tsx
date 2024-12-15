import { Avatar } from "antd";
import { COLORS } from "../colors";

export const IconDemo = () => {
  return (
    <>
      <Avatar
        size="small"
        src="/round-icon.png"
        style={{ border: `1px solid ${COLORS.white}` }}
      />
    </>
  );
};
