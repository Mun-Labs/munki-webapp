import { Avatar } from "antd";
import { TextWithLabel } from "./TextWithLabel";
import { COLORS } from "../../colors";
import { COIN_MAP } from "../../../api/MockData";
import { AvatarDemo } from "../../demos/IconDemo";
import { Percentage } from "../../atoms/Percentage/Percentage";

export const TextWithLabelDemo = () => {
  const token = COIN_MAP.chillGuy;
  return (
    <>
      <TextWithLabel
        label="testi"
        key={token.name}
        text={token.name}
        left={<AvatarDemo />}
        right={<Percentage value={token.twentyFourHourPercentage} />}
        style={{ padding: "12px 16px" }}
      ></TextWithLabel>

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
