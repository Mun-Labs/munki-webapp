import styled from "styled-components";
import { FC, HTMLAttributes } from "react";
import { ITopHolding } from "../../../../../../domain/entities/Entities";
import { Currency } from "../../../../../atoms/Currency/Currency";
import { FileImageOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

interface TopHolderTableProps
  extends ITopHolding,
    HTMLAttributes<HTMLElement> {}

export const TopHoldingItem: FC<TopHolderTableProps> = (props) => {
  const navigate = useNavigate();

  return (
    <TopHoldingItemStyled
      onClick={(e) => {
        e.preventDefault();
        navigate("/token/" + props.address);
      }}
      href={"/token/" + props.address}
      target="_blank"
      rel="noreferrer"
    >
      {props.image ? (
        <p className="img">
          <img src={props.image} width={35} height={35} alt="name token" />
        </p>
      ) : (
        <FileImageOutlined />
      )}
      <div className="info">
        <p className="tokenName">{props.name ? `$${props.name}` : "n/a"}</p>
        <div className="value">
          <Currency value={props.volume} />
          {/* <Percentage
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            value={12}
          /> */}
        </div>
      </div>
    </TopHoldingItemStyled>
  );
};

export default TopHoldingItem;

const TopHoldingItemStyled = styled.a.attrs({
  className: "TopHoldingItemStyled",
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  .img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
  }

  .info {
    .tokenName {
      color: #82ebff;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif !important;
      font-weight: 600;
    }

    .value {
      gap: 4px;
      font-size: 12px;
      display: flex;
      justify-content: start;
      align-items: center;
      font-weight: 600;

      .vol {
        font-family: Arial, Helvetica, sans-serif !important;
      }
    }
  }
`;
