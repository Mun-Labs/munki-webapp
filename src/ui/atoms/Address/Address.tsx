// Address
import { ComponentProps, CSSProperties, FC } from "react";
import styled from "styled-components";
import { Styles } from "../../uiStyles";
import { COLORS } from "../../colors";
import { AvatarDemo } from "../../demos/IconDemo";
import { Tooltip } from "antd";
import { useCopyText } from "../../../domain/hooks/useCopyText";

const AddressStyled = styled.div.attrs({
  className: "AddressStyled",
})``;

interface IAddressProps extends ComponentProps<any> {
  address: string;
  chain?: "solana";
  styles?: {
    text?: CSSProperties;
  };
}

export const Address: FC<IAddressProps> = (props) => {
  const { style, styles, address, chain } = props;
  const { onCopyText, isCopy } = useCopyText();
  const shortAdress = address.slice(0, 6) + "..." + address.slice(-4);

  return (
    <>
      <AddressStyled
        style={{
          ...Styles.h1,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: COLORS.white80,
          backgroundColor: COLORS.white35,
          padding: "2px 10px",
          borderRadius: 13,
          ...style,
        }}
      >
        {chain && <AvatarDemo />}
        <Tooltip
          title={address}
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ ...styles?.text }}>{shortAdress}</span>
        </Tooltip>
        <img
          style={{
            cursor: "pointer",
          }}
          onClick={() => onCopyText(address)}
          src={isCopy ? "/checked.svg" : "/icon-copy.png"}
          width={40}
          height={40}
        />
      </AddressStyled>
    </>
  );
};

export const SimpleAddress: FC<IAddressProps> = (props) => {
  const { address } = props;

  return (
    <Address
      address={address}
      style={{ background: "unset" }}
      styles={{
        text: {
          ...Styles.fontSansSerif,
          ...Styles.h3,
          textDecoration: "underline",
        },
      }}
    />
  );
};
