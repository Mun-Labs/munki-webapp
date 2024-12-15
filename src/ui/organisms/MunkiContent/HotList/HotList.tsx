import React from "react";
import { Flex } from "antd";
import "./HotList.css";
import styled from "styled-components";
import { Munki___Debug___ as __Munki__Debug__ } from "../../MunkiDebug/MunkiDebug";
import { MockTokens } from "../../../../api/MockData";
import { TokenCard } from "../../TokenCard/TokenCard";
import { HorizontalFilter } from "../../../molecules/HorizontalFilter/HorizontalFilter";
import { Styles } from "../../../uiStyles";
import { COLORS } from "../../../colors";
import { FilterByTime } from "../../../molecules/FilterByTime/FilterByTime";

interface HotListProps {}

const TitleRow = styled.div.attrs({ className: "TitleRow" })``;
const CardList = styled.div.attrs({ className: "CardList" })`
  display: flex;
  width: 100%;
  overflow-x: auto;
`;

export const HotList = ({}: HotListProps) => {
  const tokens = MockTokens;

  return (
    <__Munki__Debug__ style={{ margin: "20px 0" }}>
      <TitleRow style={{ padding: 20 }}>
        <Flex justify="space-between">
          <HorizontalFilter
            label="Hot list 🔥"
            options={["Trending", "Gainers", "Losers", "Recents"]}
            style={{ height: 54 }}
            labelStyles={{ ...Styles.h2, color: COLORS.grey70 }}
            segmentedStyles={{
              ...Styles.h3,
              border: `1px solid ${COLORS.yellow30}`,
              borderRadius: 6,
            }}
          />

          <div>
            <FilterByTime label="= Filter By" />
          </div>
        </Flex>
      </TitleRow>

      <CardList>
        {tokens.map((token) => (
          <React.Fragment key={token.name}>
            <TokenCard token={token} style={{ marginRight: 40 }}></TokenCard>
          </React.Fragment>
        ))}
      </CardList>
    </__Munki__Debug__>
  );
};
