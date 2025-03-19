// SearchWithDropdown
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";

interface ISearchWithDropdownProps extends ComponentProps<any> {}

export const SearchWithDropdown: FC<ISearchWithDropdownProps> = () => {
  return (
    <>
      <SearchWithDropdownStyled
        size="large"
        placeholder="Search ticker, name, ca..."
        prefix={<SearchOutlined />}
      />
    </>
  );
};

const SearchWithDropdownStyled = styled(Input).attrs({
  className: "SearchWithDropdownStyled",
})`
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
