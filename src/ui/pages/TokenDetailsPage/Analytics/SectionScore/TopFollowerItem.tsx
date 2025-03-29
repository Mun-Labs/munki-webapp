import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../../../colors";
import { TopFollower } from "../../../../../api/apiTypes";
import { NumbersService } from "../../../../../common/modules/numbers";
import { useTokenAnalyticsStore } from "../../../../../store/tokenAnalytics/useTokenAnalytics";

interface TopFollowerItemProps extends ComponentProps<any>, TopFollower {}

export const TopFollowerItem: FC<TopFollowerItemProps> = (props) => {
  const follower = NumbersService.numberToNumberString(props.followers);

  return (
    <TopFollowerItemStyled>
      <a
        href={props.profileUrl}
        rel="noreferrer noopener"
        className="profile"
        style={{
          color: COLORS.white,
          textDecoration: "none",
        }}
      >
        <img className="profile-img" src="/user4.png" width={44} height={44} />
        <div className="profile-info">
          <p className="profile-info--xname font-normal">{props.tag}</p>
          <p className="profile-info--name font-normal">{props.name}</p>
        </div>
      </a>
      <div className="follower font-normal">{follower}</div>
    </TopFollowerItemStyled>
  );
};

const TopFollowerItemStyled = styled.div.attrs({
  className: "TopFollowerItemStyled",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;

  .font-normal {
    font-family: Arial, Helvetica, sans-serif;
  }

  .profile {
    gap: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile-img {
      border-radius: 50%;
    }
    .profile-info {
      .profile-info--xname {
        /* font-family: Arial, Helvetica, sans-serif; */
        color: ${COLORS.grey50};
        font-size: 15px;
      }
      .profile-info--name {
        /* font-family: Arial, Helvetica, sans-serif; */
        font-weight: 600;
        font-size: 20px;
      }
    }
  }

  .follower {
    font-size: 38px;
    font-weight: 600;
    color: ${COLORS.grey50};
  }

  @media (max-width: 800px) {
    .profile {
      .profile-info {
        .profile-info--name {
          font-size: 16px;
        }
      }
    }
    .follower {
      font-size: 24px;
    }
  }
`;
