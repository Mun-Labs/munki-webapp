// WhaleWatch
import { ComponentProps, FC, useMemo } from "react";
import styled from "styled-components";
import { IWhale } from "../../../domain/entities/Entities";
import { Styles } from "../../uiStyles";
import { UI_COLORS } from "../../colors";
import { CoinWithLogoAndDescription } from "../../molecules/CoinWithLogoAndDescription/CoinWithLogoAndDescription";
import { Col, Flex, Row } from "antd";
import { TextWithDescription } from "../../molecules/TextWithDescription/TextWithDescription";
import { RoundIcon } from "../../atoms/RoundIcon";
import { Currency } from "../../atoms/Currency/Currency";
import { Icon } from "../../atoms/Icon/Icon";
import { useElementWidth } from "../../../domain/hooks/useElementWidth";

const WhaleWatchStyled = styled.div.attrs({
  className: "WhaleWatchStyled",
})``;

interface IWhaleWatchCardProps extends ComponentProps<any> {
  whale: IWhale;
}

const WhaleWatchCard: FC<IWhaleWatchCardProps> = (props) => {
  const { whale } = props;

  return (
    <div
      style={{
        height: 98,
        background: "linear-gradient(180deg, #2C3741 0%, #000000 56%)",
        borderTop: `1px solid ${UI_COLORS.border}`,
        padding: "8px 15px",
      }}
    >
      <section
        style={{
          ...Styles.fontSansSerif,
          fontWeight: 600,
          color: UI_COLORS.secondaryText,
          marginBottom: 10,
        }}
      >
        3 Minutes ago
      </section>
      <Flex justify="space-between">
        <TextWithDescription
          text={whale.name}
          description={
            <Currency
              value={whale.purchased}
              showColors
              prefixes={[]}
              style={{ ...Styles.fontSansSerif }}
            />
          }
          left={<RoundIcon src={whale.logoUrl} />}
        />
        <Icon src="/icons/arrowRight.svg" size={18}></Icon>
        <CoinWithLogoAndDescription token={whale.token} />
      </Flex>
    </div>
  );
};

interface WhaleWatchProps extends ComponentProps<any> {
  whales: IWhale[];
}

export const WhaleWatchColumn: FC<WhaleWatchProps> = (props) => {
  const { style, whales } = props;
  return (
    <WhaleWatchStyled style={{ ...style }}>
      {whales.map((whale, index) => (
        <WhaleWatchCard key={whale.name + index} whale={whale} />
      ))}
    </WhaleWatchStyled>
  );
};

export const WhaleWatch: FC<{ whales: IWhale[] }> = (props) => {
  const { whales } = props;

  const { width, elementRef } = useElementWidth();

  const finalSpan = useMemo(() => {
    /*prettier-ignore*/ console.log("[WhaleWatch.tsx,86] width: ", width);
    if (!width) return;
    if (width < 670) return 24;
    return 12;
  }, [width]);

  return (
    <Row
      className="WhaleWatch"
      ref={elementRef}
      style={{ width: "100%", height: 900, overflow: "scroll" }}
    >
      <Col
        span={finalSpan}
        style={{
          borderRight:
            finalSpan === 12 ? (Styles.borders.border as string) : undefined,
        }}
      >
        <WhaleWatchColumn whales={whales} style={{ flexGrow: 1 }} />
      </Col>
      <Col span={finalSpan}>
        <WhaleWatchColumn whales={whales} style={{ flexGrow: 1 }} />
      </Col>
    </Row>
  );
};
