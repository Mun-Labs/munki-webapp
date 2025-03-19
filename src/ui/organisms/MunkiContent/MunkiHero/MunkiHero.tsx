import styled from "styled-components";
import { SearchWithDropdown } from "../../../molecules/SearchWithDropdown/SearchWithDropdown";
import { Typography } from "antd";

export const MunkiHero = () => {
  return (
    <div>
      <BigTitleStyled>Hi, I’m Munki Ai</BigTitleStyled>
      <TopMunkiStyled>
        <img
          width={340}
          height={320}
          src="/munki-laught.gif"
          alt="Munki landing"
        />
      </TopMunkiStyled>
      <BigTitleStyled>
        <StyledTitle level={1}>
          🚀 <span>Enter a Token Address & Discover Insights</span> 🚀
        </StyledTitle>
      </BigTitleStyled>
      <SearchWithDropdown />
    </div>
  );
};

const BigTitleStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
  text-align: center;
  font-size: 80px;
  padding: 18px 0;

  @media (max-width: 767px) {
    text-align: center;
    padding: 12px;
  }
`;

const TopMunkiStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled(Typography.Title)`
  margin-top: 19px;
  span {
    text-shadow: 0 1px 14.2px #ffee64;
    background: linear-gradient(to bottom, white, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
