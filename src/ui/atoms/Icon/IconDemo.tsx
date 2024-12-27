import { Icon } from "./Icon";

export const IconDemo = () => {
  return (
    <div style={{ width: 300, height: 100 }}>
      <Icon src="/icons/website.svg" size={18}></Icon>
      <Icon src="/icons/website.svg"></Icon>
      <Icon src="/icons/website.svg" size={32}></Icon>
    </div>
  );
};
