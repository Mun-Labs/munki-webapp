// SocialMediaSegment
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon/Icon";
import { IIconMap, SocialKeys } from "../../../domain/types/Types";

const SocialMediaSegmentStyled = styled.div.attrs({
  className: "SocialMediaSegmentStyled",
})`
  display: flex;
`;

const iconMap: IIconMap = {
  website: { src: "/icons/website.svg" },
  web: { src: "/icons/website.svg" },
  telegram: { src: "/icons/telegram.svg", height: 20 },
  x: { src: "/icons/x.svg" },
};

interface SocialMediaSegmentProps extends ComponentProps<any> {
  socials?: SocialKeys[];
}

const defaultSocialMediaSegmentProps: SocialMediaSegmentProps = {
  socials: ["website", "telegram", "x"],
};

export const SocialMediaSegment: FC<SocialMediaSegmentProps> = (
  props = defaultSocialMediaSegmentProps,
) => {
  if (Object.keys(props).length === 0) props = defaultSocialMediaSegmentProps;
  const { style, socials } = props;

  if (!socials) return null;

  return (
    <SocialMediaSegmentStyled style={{ ...style }}>
      {socials.map((social) => (
        <Icon
          key={social}
          src={iconMap[social].src}
          width={iconMap[social].width}
          height={iconMap[social].height}
          style={{ marginRight: 8 }}
        />
      ))}
    </SocialMediaSegmentStyled>
  );
};
