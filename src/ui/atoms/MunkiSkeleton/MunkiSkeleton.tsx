// MunkiSkeleton
import { Skeleton } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COL_DS } from "../../colors";

const MunkiSkeletonStyled = styled.div.attrs({
  className: "MunkiSkeletonStyled",
})`
  width: 100%;
  height: 100%;

  .ant-skeleton {
    --ant-skeleton-color-gradient-end: rgba(0, 0, 0, 0.35);
    --ant-skeleton-gradient-from-color: ${COL_DS.text1000};
    --ant-skeleton-gradient-to-color: rgba(0, 0, 0, 0.35);

    &.ant-skeleton-element {
      width: 100%;
      height: 100%;

      .ant-skeleton-button {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

interface IMunkiSkeletonProps extends ComponentProps<any> {}

export const MunkiSkeleton: FC<IMunkiSkeletonProps> = (props) => {
  const { children, style } = props;

  const content = children || (
    <MunkiSkeletonStyled style={style}>
      <Skeleton.Button active />
    </MunkiSkeletonStyled>
  );

  return <MunkiSkeletonStyled style={style}>{content}</MunkiSkeletonStyled>;
};
