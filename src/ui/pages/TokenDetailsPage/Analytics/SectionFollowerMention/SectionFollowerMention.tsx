import { ComponentProps, FC } from "react";
import styled from "styled-components";

interface FollowerMentionProps extends ComponentProps<any> {}

export const SectionFollowerMention: FC<FollowerMentionProps> = (props) => {
  return (
    <SectionFollowerMentionStyled>
      <h3 className="title">Analytics</h3>
    </SectionFollowerMentionStyled>
  );
};

const SectionFollowerMentionStyled = styled.div.attrs({
  className: "SectionFollowerMentionStyled",
})`
  .title {
    font-size: 38px;
    margin-bottom: 12px;
    margin-top: 24px;
  }
`;
