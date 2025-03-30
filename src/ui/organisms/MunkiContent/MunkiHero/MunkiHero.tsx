import styled from "styled-components";
import { TokenSearchWithDropdown } from "../../../molecules/TokenSearchWithDropdown/TokenSearchWithDropdown";
import { Typography } from "antd";
import { motion } from "framer-motion";

export const MunkiHero = () => {
  return (
    <Container>
      <BigTitleStyled
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Hi, I'm Munki
      </BigTitleStyled>
      <TopMunkiStyled>
        <motion.img
          width={340}
          height={320}
          src="/munki-laught.gif"
          alt="Munki landing"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            type: "spring",
            stiffness: 160,
            damping: 30,
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        />
      </TopMunkiStyled>
      <BigTitleStyled
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <StyledTitle level={1}>
          🚀 <span>Enter a Token Address & Discover Insights</span> 🚀
        </StyledTitle>
      </BigTitleStyled>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 24,
        }}
      >
        <TokenSearchWithDropdown />
      </motion.div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BigTitleStyled = styled(motion.div).attrs({
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
