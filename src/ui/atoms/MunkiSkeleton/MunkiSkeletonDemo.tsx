import { Skeleton } from "antd";
import { MunkiSkeleton } from "./MunkiSkeleton";

export const MunkiSkeletonDemo = () => {
  return (
    <>
      <div style={{ width: 300, height: 100 }}>
        <MunkiSkeleton>
          <Skeleton active />
        </MunkiSkeleton>
      </div>
      <div style={{ width: 300, height: 100 }}>
        <MunkiSkeleton></MunkiSkeleton>
      </div>
    </>
  );
};
