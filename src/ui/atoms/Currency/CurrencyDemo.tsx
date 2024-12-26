import { Currency } from "./Currency";

export const CurrencyDemo = () => {
  return (
    <div style={{ width: 100, height: 100 }}>
      <Currency value={1056}></Currency>
      <Currency value={810505}></Currency>
      <Currency value={8105050}></Currency>
      <Currency value={50868687878}></Currency>
    </div>
  );
};
