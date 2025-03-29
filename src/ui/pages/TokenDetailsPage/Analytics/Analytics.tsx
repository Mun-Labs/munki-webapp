import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { SectionChart } from "./SectionChart/SectionChart";
import { SectionScore } from "./SectionScore/SectionScore";
import { SectionFollowerMention } from "./SectionFollowerMention/SectionFollowerMention";
import { useParams } from "react-router";
import useAnalyticsLogic from "./useAnalyticsLogic";

interface AnalyticsProps extends ComponentProps<any> {}

export const Analytics: FC<AnalyticsProps> = (_props) => {
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;
  useAnalyticsLogic(tokenName);

  return (
    <AnalyticsStyled>
      <h3 className="title">Analytics</h3>
      <SectionChart />
      <SectionScore />
      <SectionFollowerMention />
    </AnalyticsStyled>
  );
};

const AnalyticsStyled = styled.div.attrs({ className: "AnalyticsStyled" })`
  .title {
    font-size: 38px;
    margin-bottom: 12px;
    margin-top: 24px;
  }
`;
