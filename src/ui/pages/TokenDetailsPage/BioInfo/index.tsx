import { ComponentProps, FC } from "react";
// import { useParams } from "react-router";
import styled from "styled-components";
import { MunkiBadge } from "../../../atoms/MunkiBadge";
import { COLORS } from "../../../colors";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const BioInfo: FC<TokenDetailsPageProps> = (_props) => {
  // const { style } = props;
  // const params = useParams<{ tokenName: string }>();

  return (
    <BioInfoStyled>
      <div className="wrap-bio">
        <h3>Bio</h3>
        <p>
          $LUX The Multiplayer Internet, A Unified Way to Navigate the Internet.
          Unlock Multiplayer Browsing. CA:
          BmXfbamFqrBzrqihr9hbSmEsfQUXMVaqshAjgvZupump
        </p>
      </div>
      <div className="wrap-bio">
        <h3>Info</h3>
        <MunkiBadge color={COLORS.magenta}>Project</MunkiBadge>
        <p>
          <span className="cl-greed">Discovered: </span>
          <span>2 Nov 2024, 45 Followers</span>
        </p>
        <p>
          <span className="cl-ex-fear">Created: </span>
          <span>2 Nov 2024</span>
        </p>
        <p>
          <span className="cl-old-silver">Tweets: </span>
          <span>114 316</span>
        </p>
        <p>
          <span className="cl-old-silver">Category: </span>
          <span>Meme coin</span>
        </p>
        <p>
          <span className="cl-old-silver">Chain: </span>
          <span>L1</span>
        </p>
      </div>
    </BioInfoStyled>
  );
};

const BioInfoStyled = styled.div.attrs({ className: "BioInfoStyled" })`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 280px;
  gap: 12px;

  .wrap-bio {
    padding: 12px;
    border: 1px solid ${COLORS.white};
    border-radius: 12px;

    h3 {
      font-size: 24px;
      margin-top: 8px;
    }

    p {
      margin-top: 4px;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 600px;
    justify-content: center;
    grid-template-rows: 280px;
    white-space: normal;
    word-break: break-all;
  }

  @media (max-width: 640px) {
    grid-template-columns: 100%;
  }
`;
