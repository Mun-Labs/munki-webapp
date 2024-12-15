import { Avatar } from "antd";
import { TextWithLabel } from "./TextWithLabel";
import { COLORS } from "../../colors";

export const TextWithLabelDemo = () => {
  return (
    <>
      <TextWithLabel text={"text"} label="label" right="^12%" />
      <TextWithLabel
        text="text 1"
        left={
          <Avatar
            size="small"
            src="/round-icon.png"
            style={{ border: `1px solid ${COLORS.white}` }}
          />
        }
        // left={<img src="/round-icon.png" />}
      />
    </>
  );
};
