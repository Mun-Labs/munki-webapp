// SocialMediaSegment
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon/Icon";
import { IIconMap, SocialMedia } from "../../../domain/types/Types";

const SocialMediaSegmentStyled = styled.div.attrs({
  className: "SocialMediaSegmentStyled",
})`
  display: flex;
`;

const iconMap: IIconMap = {
  website: { src: "/icons/website.svg" },
  web: { src: "/icons/website.svg" },
  telegram: {
    src: "/icons/telegram.svg",
    width: 25,
    height: 20,
    style: { marginTop: 1 },
  },
  x: { src: "/icons/x.svg" },
};

interface SocialMediaSegmentProps extends ComponentProps<any> {
  socials?: SocialMedia[];
}

const defaultSocialMediaSegmentProps: SocialMediaSegmentProps = {
  socials: [
    { name: "Website", type: "website", url: "https://example.com" },
    { name: "Telegram", type: "telegram", url: "https://t.me/example" },
    { name: "X", type: "x", url: "https://x.com/example" },
  ],
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
        <a
          key={social.type}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Icon
            key={social.type}
            src={iconMap[social.type].src}
            width={iconMap[social.type].width}
            height={iconMap[social.type].height}
            style={{ marginRight: 8, ...iconMap[social.type].style }}
          />
        </a>
      ))}
    </SocialMediaSegmentStyled>
  );
};
