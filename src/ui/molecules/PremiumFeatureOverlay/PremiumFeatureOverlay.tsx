import Icon from "@ant-design/icons";
import { Button } from "antd";
import { ComponentProps, FC, HTMLAttributes } from "react";
import { COL_DS, COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import styled from "styled-components";

interface PremiumFeatureOverlayProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  label?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const StyledPremiumFeatureOverlay = styled.div.attrs({
  className: "StyledPremiumFeatureOverlay",
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid ${COLORS.magenta};
  backdrop-filter: blur(8px);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  .label {
    position: absolute;
    top: 15px;
    left: 20px;
    color: ${COL_DS.text300};
  }

  h1 {
    text-shadow: 0 1px 21.2px ${"#FFF8C5"};
    background: linear-gradient(to bottom, white, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
  }

  .premium-message {
    text-align: center;
  }
`;

export const PremiumFeatureOverlay: FC<PremiumFeatureOverlayProps> = ({
  isVisible,
  label,
  title = "Premium Feature",
  description,
  buttonText = "Go Premium",
  children,
  onButtonClick = () => {},
}) => {
  return (
    <div style={{ position: "relative" }}>
      {children}
      {isVisible && (
        <StyledPremiumFeatureOverlay>
          <div className="premium-message">
            {label && <h3 className="label">{label}</h3>}
            <h1>{title}</h1>
            <p>{description}</p>
            <Button
              className="upgrade-button"
              onClick={onButtonClick}
              style={{
                height: 90,
                width: 400,
                marginTop: 20,
                padding: "8px 13px",
                border: `2px solid ${COL_DS.primary400}`,
                borderRadius: 46,
                background: COL_DS.secondary,
                color: COL_DS.baseWhite,
                ...Styles.h1,
              }}
            >
              <Icon src="/premium.svg" width={48} height={53}>
                .
              </Icon>{" "}
              <span style={{ margin: "0 14px" }}>{buttonText}</span>{" "}
              <Icon src="/premium.svg" width={48} height={53}></Icon>
            </Button>
          </div>
        </StyledPremiumFeatureOverlay>
      )}
    </div>
  );
};
