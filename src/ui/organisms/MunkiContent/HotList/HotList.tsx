import React, { useMemo } from "react";
import "./HotList.css";
import styled from "styled-components";
import { Munki___Debug___ as __Munki__Debug__ } from "../../MunkiDebug/MunkiDebug";
import { MockTokens } from "../../../../api/MockData";
import { TokenCard } from "../../TokenCard/TokenCard";
import { HorizontalFilter } from "../../../molecules/HorizontalFilter/HorizontalFilter";
import { Styles } from "../../../uiStyles";
import { COLORS } from "../../../colors";
import { FilterByTime } from "../../../molecules/FilterByTime/FilterByTime";
import { useElementWidth } from "../../../../domain/hooks/useElementWidth";

interface HotListProps {}

const TitleRow = styled.div.attrs({ className: "TitleRow" })``;
const CardList = styled.div.attrs({ className: "CardList" })`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 40px;
`;

const breakWidth = 790;

export const HotList = ({}: HotListProps) => {
  const tokens = MockTokens;

  const { width, elementRef } = useElementWidth();
  const isTwoRow = useMemo((): boolean => {
    if (!width || !breakWidth) return false;
    const isSmaller = width < breakWidth;
    return isSmaller;
  }, [width, breakWidth]);

  return (
    <div>
      <TitleRow style={{ padding: 20 }}>
        <FlexStyled ref={elementRef}>
          <TitleStyled>
            <p className="title" style={{ ...Styles.h2 }}>
              Hot list 🔥
            </p>
            <HorizontalFilter
              // label="Hot list 🔥"
              options={["Trending", "Gainers", "Losers", "Recents"]}
              style={{ height: 54 }}
              labelStyles={{ ...Styles.h2, color: COLORS.grey70 }}
              segmentedStyles={{
                ...Styles.h3,
                border: `1px solid ${COLORS.yellow30}`,
                borderRadius: 6,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            />
          </TitleStyled>

          <FilterByTime isTwoRow={isTwoRow} />
        </FlexStyled>
      </TitleRow>

      <CardList>
        {tokens.map((token) => (
          <React.Fragment key={token.name}>
            <TokenCard token={token} style={{}}></TokenCard>
          </React.Fragment>
        ))}
      </CardList>
    </div>
  );
};

const TitleStyled = styled.div.attrs({ className: "TitleStyled" })`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  .title {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 960px) {
    justify-content: center;
  }

  @media (max-width: 767px) {
    padding-top: 24px;
    flex-direction: column;
    justify-content: center;
  }
`;

const FlexStyled = styled.div.attrs({ className: "FlexStyled" })`
  padding-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;
