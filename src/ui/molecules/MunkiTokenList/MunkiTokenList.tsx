import { Flex, List, Skeleton } from "antd";
import { ComponentProps } from "react";
import styled from "styled-components";
import { Token } from "../../../api/apiTypes";
import { AvatarWithText } from "../AvatarWithText/AvatarWithText";
import { COLORS } from "../../colors";
import { Currency } from "../../atoms/Currency/Currency";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { Styles } from "../../uiStyles";

interface IMunkiTokenListProps extends ComponentProps<any> {
  tokens: Token[];
  loading?: boolean;
}

const MunkiTokenListStyled = styled(List).attrs({
  className: "MunkiTokenListStyled",
})`
  box-shadow: 0 6px 16.4px 2px #ffee64,
    /* right shadow */ 0 3px 21.4px -10px #ffee64,
    /* left shadow */ 0 0 21.4px -10px #ffee64; /* bottom shadow */

  background: linear-gradient(${COLORS.black} 0 0) padding-box,
    /*this is your grey background*/ linear-gradient(to right, #fbe892, #ee1b84)
      border-box;
  border: 2px solid transparent;
  border-top: none;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  .ant-list {
    border: none;
  }

  .ant-list-item {
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${COLORS.white25};
    }
  }
`;

export function MunkiTokenList(props: IMunkiTokenListProps) {
  const { tokens, loading } = props;

  return (
    <MunkiTokenListStyled>
      <List
        bordered
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={tokens}
        renderItem={(token, index) => (
          <a href={`/token/${token.tokenAddress}`} rel="noreferrer noopener">
            <List.Item
              style={{
                borderTop: index !== 0 ? `1px solid ${COLORS.white60}` : "",
              }}
            >
              <Skeleton avatar title={false} loading={false} active>
                <AvatarWithText
                  logoUrl={token.logoUri}
                  name={token.name}
                  symbol={token.symbol}
                  shape="square"
                />
                <Flex justify="space-between" vertical>
                  <Flex justify="end" align="center">
                    <Currency
                      value={token.current_price}
                      showRawValue
                      fixed={10}
                      currency
                      style={{ marginRight: 16, ...Styles.h3 }}
                    />
                    <Percentage
                      value={token.price24hchange}
                      plusMinus
                      suffix="1D"
                      style={{ color: COLORS.green55 }}
                      $fontFamily="sans-serif"
                    />
                  </Flex>
                  <Flex style={{ width: 180 }} justify="space-between">
                    <Currency
                      value={token.volume24h}
                      style={{ marginRight: 6, color: COLORS.blue80 }}
                      prefixes={["Vol:", "Vol"]}
                    />
                    <Currency
                      value={token.mc}
                      style={{ marginRight: 6, color: COLORS.blue80 }}
                      prefixes={["MC:", "MC"]}
                    />
                  </Flex>
                </Flex>
              </Skeleton>
            </List.Item>
          </a>
        )}
      />
    </MunkiTokenListStyled>
  );
}

// const [initLoading] = useState(false);
// const [loading, setLoading] = useState(false);
// const [data, setData] = useState<T[]>([]);
// const [tokens, setTokens] = useState<T[]>([]);

// const onLoadMore = () => {
//   setLoading(true);
//   setTokens(
//     data.concat(
//       Array.from({ length: count }).map(() => ({
//         loading: true,
//         name: {},
//         picture: {},
//       })),
//     ),
//   );
//   fetch(fakeDataUrl)
//     .then((res) => res.json())
//     .then((res) => {
//       const newData = data.concat(res.results);
//       setData(newData);
//       setTokens(newData);
//       setLoading(false);
//       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
//       // In real scene, you can using public method of react-virtualized:
//       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//       window.dispatchEvent(new Event("resize"));
//     });
// };

// const loadMore =
//   !initLoading && !loading ? (
//     <div
//       style={{
//         textAlign: "center",
//         marginTop: 12,
//         height: 32,
//         lineHeight: "32px",
//       }}
//     >
//       <Button onClick={onLoadMore}>loading more</Button>
//     </div>
//   ) : null;
