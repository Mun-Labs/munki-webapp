import { List, Button, Skeleton } from "antd";
import { ComponentProps, useState } from "react";
import styled from "styled-components";
import { Token } from "../../../api/apiTypes";
import { AvatarWithText } from "../AvatarWithText/AvatarWithText";

interface IMunkiTokenListProps extends ComponentProps<any> {
  tokens: Token[];
}

// const count = 3;

const MunkiTokenListStyled = styled(List).attrs({
  className: "MunkiTokenListStyled",
})``;

export function MunkiTokenList(props: IMunkiTokenListProps) {
  const { tokens } = props;
  const [initLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState<T[]>([]);
  // const [tokens, setTokens] = useState<T[]>([]);

  const onLoadMore = () => {
    setLoading(true);
    // setTokens(
    //   data.concat(
    //     Array.from({ length: count }).map(() => ({
    //       loading: true,
    //       name: {},
    //       picture: {},
    //     })),
    //   ),
    // );
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     const newData = data.concat(res.results);
    //     setData(newData);
    //     setTokens(newData);
    //     setLoading(false);
    //     // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
    //     // In real scene, you can using public method of react-virtualized:
    //     // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
    //     window.dispatchEvent(new Event("resize"));
    //   });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <MunkiTokenListStyled>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={tokens}
        renderItem={(token) => (
          <List.Item>
            <Skeleton avatar title={false} loading={true} active>
              <AvatarWithText
                logoUrl={token.logo_uri}
                name={token.name}
                symbol={token.symbol}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </MunkiTokenListStyled>
  );
}
export default MunkiTokenList;
