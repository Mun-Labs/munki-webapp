// Address
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Styles } from "../../uiStyles";
import { COLORS } from "../../colors";
import { AvatarDemo } from "../../demos/IconDemo";

const AddressStyled = styled.div.attrs({
  className: "AddressStyled",
})``;

interface IAddressProps extends ComponentProps<any> {
  address: string;
  chain?: "solana";
}

export const Address: FC<IAddressProps> = (props) => {
  const { style, address, chain } = props;
  return (
    <>
      <AddressStyled
        style={{
          ...style,
          ...Styles.h1,
          display: "flex",
          justifyContent: "space-around",
          color: COLORS.white80,
          backgroundColor: COLORS.white35,
          padding: "2px 10px",
          borderRadius: 13,
        }}
      >
        {chain && <AvatarDemo />}
        <div>{address}</div>
      </AddressStyled>
    </>
  );
};
