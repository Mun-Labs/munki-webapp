import { Input } from "antd";
import styled from "styled-components";
import { UserOutlined } from "@ant-design/icons";

export const MunkiHero = () => {
  return (
    <div>
      <TopMunkiStyled>
        <img
          width={340}
          height={320}
          src="/munki-laught.gif"
          alt="Munki landing"
        />
      </TopMunkiStyled>
      <BigTitleStyled>Hi, I’m Munki Ai</BigTitleStyled>
      <Input
        size="large"
        style={{
          flex: 1,
          margin: "10px 0px 24px",
          backgroundColor: "#242424",
          color: "white",
          borderRadius: "8px",
        }}
        placeholder="search token"
        prefix={<UserOutlined />}
      />
    </div>
  );
};

const TopMunkiStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
