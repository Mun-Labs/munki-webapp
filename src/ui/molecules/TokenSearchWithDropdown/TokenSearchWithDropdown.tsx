// TokenSearchWithDropdown
import { CloseCircleFilled, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Spin } from "antd";
import { ComponentProps, FC, useCallback, useState } from "react";
import styled from "styled-components";
import { COL_DS, COLORS } from "../../colors";
import { useTokenApi } from "../../../api/hooks/useTokenApi";
import { MunkiTokenList } from "../MunkiTokenList/MunkiTokenList";
import { debounce } from "../../../common/modules/debounce";
import { MOCK_DATA_TOKEN } from "../../../api/MockData";
import { Token } from "../../../api/apiTypes";
import { isSolanaAddress } from "../../../common/modules/validators";

interface ITokenSearchWithDropdownProps extends ComponentProps<any> {}

export const TokenSearchWithDropdown: FC<
  ITokenSearchWithDropdownProps
> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const shouldFetch = Boolean(searchTerm && inputValue);
  const { data, isLoading } = useTokenApi(
    shouldFetch ? { q: searchTerm } : null,
    // MOCK_DATA_TOKEN,
  );

  let tokens: Token[] = [];
  if (data && !isLoading) {
    tokens = data.response;
  }

  const clearInput = useCallback(() => {
    setIsValid(true);
    setInputValue("");
    setSearchTerm("");
  }, []);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      const is = isSolanaAddress(value);
      if (is) {
        setIsValid(true);
        setSearchTerm(value);
      } else {
        setIsValid(false);
      }
    }, 0),
    [],
  );

  return (
    <TokenSearchWithDropdownStyled>
      <TokenInputStyled
        size="large"
        placeholder="Search address..."
        prefix={<SearchOutlined style={{ marginRight: 6 }} />}
        suffix={
          <Button
            style={{
              background: COLORS.magenta,
              border: "none",
              borderRadius: 12,
              padding: "8px 23px",
            }}
            onClick={() => debouncedSearch(inputValue)}
          >
            {isLoading && shouldFetch ? <Spin></Spin> : <>LFG</>}
          </Button>
        }
        allowClear={{
          clearIcon: (
            <CloseCircleFilled
              style={{ color: COLORS.white, marginRight: 8 }}
            />
          ),
        }}
        value={inputValue}
        onChange={(e) => {
          clearInput();
          setInputValue(e.target.value);
        }}
        onPressEnter={() => debouncedSearch(inputValue)}
        onClear={() => clearInput()}
        autoFocus={true}
      />

      <FloatingContainer>
        {!isLoading && !isValid && (
          <Warning>⚠️ Not a valid SOL address.</Warning>
        )}
        {!isLoading && tokens.length === 0 && searchTerm && isValid && (
          <Warning>⚠️ No tokens found</Warning>
        )}
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
  width: 65%;
  margin: 10px auto;
  margin-bottom: 50px;
`;

const TokenInputStyled = styled(Input).attrs({
  className: "TokenInputStyled",
})`
  flex: 1;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin: 10px auto;
  margin-bottom: 0px;
  border: 1px solid transparent;
  border-radius: 8px;

  background-color: #242424;
  box-shadow: 0 0 21.4px 0 #ffee64;
  background: linear-gradient(${COLORS.raisin_black} 0 0) padding-box,
    /*this is your grey background*/ linear-gradient(to right, #fbe892, #ee1b84)
      border-box;

  &:hover {
    background: ${COLORS.white25};
  }

  &.ant-input-css-var {
    --ant-input-active-border-color: #ee1b84;
    --ant-input-hover-border-color: #ee1b84;
  }

  &.ant-input-outlined:hover {
    // border-color: unset;
  }

  &.ant-input-outlined:focus-within {
    box-shadow: 0 0 21.4px 0 #ffee64;
  }

  input.ant-input::placeholder {
    color: ${COLORS.white60} !important; // TODO: please remove global css rules, eg MunkiContent.css
  }
`;

const FloatingContainer = styled.div.attrs({
  className: "FloatingContainer",
})`
  position: relative;
  width: 95%;
  margin: 0 auto;

  .MunkiTokenListStyled {
    position: absolute;
    width: 100%;
    z-index: 10;
  }
`;

const Warning = styled.div.attrs({
  className: "Warning",
})`
  top: 20px;
  left: 0;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  padding: 5px 12px;
  color: ${COL_DS.baseWhite};
  border: 2px solid ${COL_DS.warning};
  border-radius: 8px;
  z-index: 20;
`;
