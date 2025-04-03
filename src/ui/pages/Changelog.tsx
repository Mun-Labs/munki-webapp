import { FC } from "react";
import styled from "styled-components";
import { Flex, Typography, Divider, Tag } from "antd";
import { COL_DS } from "../colors";
import { AppLayout } from "../../AppLayout";

const { Title, Text } = Typography;

const ChangelogContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const ChangelogEntry = styled.div`
  margin-bottom: 40px;
`;

const ChangelogVersion = styled(Title)`
  margin-bottom: 8px !important;
`;

const ChangelogDate = styled(Text)`
  display: block;
  color: ${COL_DS.text200};
  margin-bottom: 16px;
`;

const ChangeList = styled.ul`
  margin-top: 16px;
  padding-left: 20px;
`;

const ChangeItem = styled.li`
  margin-bottom: 8px;
  color: ${COL_DS.text300};
`;

interface ChangelogEntryType {
  version: string;
  date: string;
  changes: {
    type: "feature" | "fix" | "improvement";
    description: string;
  }[];
}

const changelogData: ChangelogEntryType[] = [
  {
    version: "v1.2.0",
    date: "March 15, 2024",
    changes: [
      { type: "feature", description: "Added token performance metrics" },
      { type: "improvement", description: "Enhanced UI for mobile devices" },
      { type: "fix", description: "Fixed issue with Solana wallet connection" },
    ],
  },
  {
    version: "v1.1.0",
    date: "February 20, 2024",
    changes: [
      { type: "feature", description: "Integrated Telegram notifications" },
      { type: "feature", description: "Added multi-language support" },
      { type: "improvement", description: "Optimized loading performance" },
    ],
  },
  {
    version: "v1.0.0",
    date: "January 10, 2024",
    changes: [
      { type: "feature", description: "Initial release of Munki platform" },
      { type: "feature", description: "Token tracking dashboard" },
      { type: "feature", description: "Solana wallet integration" },
    ],
  },
];

const getTagColor = (type: string) => {
  switch (type) {
    case "feature":
      return "green";
    case "improvement":
      return "blue";
    case "fix":
      return "orange";
    default:
      return "default";
  }
};

export const Changelog: FC = () => {
  return (
    <AppLayout>
      <ChangelogContainer>
        <Title level={1} style={{ marginBottom: 40, textAlign: "center" }}>
          Changelog
        </Title>

        {changelogData.map((entry, index) => (
          <ChangelogEntry key={index}>
            <ChangelogVersion level={3}>{entry.version}</ChangelogVersion>
            <ChangelogDate>{entry.date}</ChangelogDate>
            <ChangeList>
              {entry.changes.map((change, changeIndex) => (
                <ChangeItem key={changeIndex}>
                  <Tag
                    color={getTagColor(change.type)}
                    style={{ marginRight: 8 }}
                  >
                    {change.type}
                  </Tag>
                  {change.description}
                </ChangeItem>
              ))}
            </ChangeList>
            {index < changelogData.length - 1 && <Divider />}
          </ChangelogEntry>
        ))}
      </ChangelogContainer>
    </AppLayout>
  );
};
