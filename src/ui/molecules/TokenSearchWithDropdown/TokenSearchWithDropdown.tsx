// TokenSearchWithDropdown
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ComponentProps, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { useTokenApi } from "../../../api/hooks/useTokenApi";
import { MunkiTokenList } from "../MunkiTokenList/MunkiTokenList";
import { debounce } from "../../../common/modules/debounce";
import { MOCK_DATA_TOKEN } from "../../../api/MockData";
import { Token } from "../../../api/apiTypes";

interface ITokenSearchWithDropdownProps extends ComponentProps<any> {}

export const TokenSearchWithDropdown: FC<
  ITokenSearchWithDropdownProps
> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");

  const shouldFetch = Boolean(searchTerm && inputValue);
  const { data, isLoading } = useTokenApi(
    shouldFetch ? { q: searchTerm } : null,
    shouldFetch ? MOCK_DATA_TOKEN : ({ data: [] } as any),
  );

  let tokens: Token[] = [];
  if (data) {
    tokens = data.response;
  }

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 0),
    [],
  );

  return (
    <TokenSearchWithDropdownStyled>
      <TokenInputStyled
        size="large"
        placeholder="Search ticker, name, ca..."
        prefix={<SearchOutlined style={{ marginRight: 6 }} />}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onPressEnter={() => debouncedSearch(inputValue)}
        autoFocus={true}
      />
      <FloatingContainer>
        {tokens && tokens.length > 0 && (
          <MunkiTokenList tokens={tokens!} loading={isLoading}></MunkiTokenList>
        )}
      </FloatingContainer>
    </TokenSearchWithDropdownStyled>
  );
};

const TokenSearchWithDropdownStyled = styled.div.attrs({
  className: "TokenSearchWithDropdownStyled",
})`
  width: 60%;
  margin: 10px auto;
  margin-bottom: 50px;
`;

const TokenInputStyled = styled(Input).attrs({
  className: "TokenInputStyled",
})`
  &.ant-input-css-var {
    --ant-input-active-border-color: #ee1b84;
    --ant-input-hover-border-color: #ee1b84;
  }

  flex: 1;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin: 10px auto;
  margin-bottom: 8px;
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

const FloatingContainer = styled.div.attrs({
  className: "FloatingContainer",
})`
  position: relative;

  .MunkiTokenListStyled {
    position: absolute;
    width: 100%;
    background: black;
    z-index: 10;
  }
`;
