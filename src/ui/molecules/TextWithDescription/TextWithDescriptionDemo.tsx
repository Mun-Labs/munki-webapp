import { COIN_MAP } from "../../../api/MockData";
import { AvatarDemo } from "../../demos/IconDemo";
import { TextWithDescription } from "./TextWithDescription";

export const TextWithDescriptionDemo = () => {
  const token = COIN_MAP.chillGuy;
  return (
    <div style={{ width: 300, height: 100 }}>
      <TextWithDescription
        label="testi"
        key={token.name}
        text={token.name}
        description={token.name}
        left={<AvatarDemo size={45} />}
        style={{ padding: "12px 16px" }}
      ></TextWithDescription>
    </div>
  );
};
