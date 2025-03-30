import { Flex } from "antd";
import { ComponentProps, FC } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { COLORS } from "../../../colors";
interface TokenDetailsPageProps extends ComponentProps<any> {}

export const Head: FC<TokenDetailsPageProps> = (_props) => {
  // const { style } = props;
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;
  const navigate = useNavigate();

  return (
    <Flex style={{ fontSize: "34px" }} gap={12} wrap>
      <div
        style={{
          borderRadius: "50%",
          background: "#323232",
          width: "55px",
          height: "55px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <ArrowLeftOutlined onClick={() => navigate("/")} />
      </div>
      <p>mun.analytics/</p>
      <p style={{ color: COLORS.white60 }}>{tokenName}</p>
    </Flex>
  );
};
