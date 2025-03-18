import { debugStyles } from "../../uiStyles";
import "./MunkiDebug.css";
import { ComponentProps, FC, PropsWithChildren } from "react";

interface MunkiDebugProps {}

export const Munki___Debug___: FC<
  PropsWithChildren<MunkiDebugProps> & ComponentProps<any>
> = ({ style, children }) => {
  return <div style={{ ...debugStyles, ...style }}>{children}</div>;
};
