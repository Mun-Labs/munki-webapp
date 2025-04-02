import { Address, SimpleAddress } from "./Address";

export const AddressDemo = () => {
  return (
    <div style={{ width: 300, height: 100 }}>
      <SimpleAddress address="0x123456789ABCDEFGH"></SimpleAddress>
      <Address address="0x123456789ABCDEFGH"></Address>
    </div>
  );
};
