import { Input, Typography } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { COLORS } from "../../../colors";

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
      <StyledInput
        size="large"
        placeholder="Search ticker, name, ca..."
        prefix={<SearchOutlined />}
      />
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

const StyledInput = styled(Input)`
  &.ant-input-css-var {
    --ant-input-active-border-color: #ee1b84;
    --ant-input-hover-border-color: #ee1b84;
  }

  flex: 1;
  display: flex;
  width: 60%;
  height: 50px;
  padding: 0 20px;
  margin: 10px auto;
  margin-bottom: 50px;
  color: ${COLORS.white35};
  background-color: #242424;
  box-shadow: 0 0 21.4px 0 #ffee64;

  background: linear-gradient(${COLORS.raisin_black} 0 0) padding-box,
    /*this is your grey background*/ linear-gradient(to right, #fbe892, #ee1b84)
      border-box;
  border: 1px solid transparent;
  border-radius: 8px;

  &.ant-input-outlined:hover {
    // border-color: unset;
  }

  input.ant-input::placeholder {
    color: ${COLORS.white60} !important; // TODO: please remove global css rules, eg MunkiContent.css
  }
`;
