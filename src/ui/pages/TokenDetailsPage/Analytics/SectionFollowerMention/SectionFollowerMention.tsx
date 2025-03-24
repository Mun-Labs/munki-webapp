import { ComponentProps, FC } from "react";
import styled from "styled-components";
import Follower from "./Follower/Follower";
import Mention from "./Mention/Mention";
import { COLORS } from "../../../../colors";

interface FollowerMentionProps extends ComponentProps<any> {}

export const SectionFollowerMention: FC<FollowerMentionProps> = (_props) => {
  return (
    <SectionFollowerMentionStyled>
      <div className="grid">
        <div className="follower">
          <Follower />
        </div>
        <div className="mention">
          <Mention />
        </div>
      </div>
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

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .follower {
      border-left: 1px solid ${COLORS.magenta};
      border-right: 1px solid ${COLORS.magenta};
      border-bottom: 1px solid ${COLORS.magenta};
    }
    .mention {
      border-right: 1px solid ${COLORS.magenta};
      border-bottom: 1px solid ${COLORS.magenta};
    }

    @media (max-width: 985px) {
      grid-template-columns: 1fr;

      .mention {
        border-left: 1px solid ${COLORS.magenta};
      }
    }
  }
`;
