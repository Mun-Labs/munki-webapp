import { Button } from "antd";
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
} from "react";
import { COL_DS, COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import styled from "styled-components";
import { Icon } from "../../atoms/Icon/Icon";
import { usePrivy } from "@privy-io/react-auth";
import { MunkiDialog } from "../../organisms/MunkiDialog/MunkiDialog";
import { motion } from "framer-motion";

interface LoginOverflowProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {
  isVisible: boolean;
  label?: string;
  title?: string;
  description?: ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}

const StyledLoginOverflow = styled.div.attrs({
  className: "StyledLoginOverflow",
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
  z-index: 10;

  .label {
    position: absolute;
    top: 15px;
    left: 20px;
    color: ${COL_DS.text300};
  }

  h1 {
    margin-top: 50px;
    text-shadow: 0 1px 21.2px ${"#FFF8C5"};
    background: linear-gradient(to bottom, white, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
  }

  .message {
    text-align: center;
  }

  .MunkiLoginStyled {
    display: flex;
    justify-content: center;
    button {
      margin-left: unset;
      margin-top: 20px;
    }
  }
`;

export const LoginOverflow: FC<LoginOverflowProps> = ({
  isVisible,
  title = "Login Required",
  description,
  children,
  onButtonClick = () => {},
}) => {
  const { login, logout } = usePrivy();

  useEffect(() => {
    // login({ loginMethods: ["email"] });
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {children}
      {isVisible && (
        <StyledLoginOverflow>
          <div className="message">
            <MunkiDialog>
              <motion.img
                width={250}
                height={280}
                src="/munki-suit.gif"
                alt="Munki landing"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 160,
                  damping: 30,
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                style={{ marginLeft: -40 }}
              />
              <div>
                <h1>{title}</h1>
                <p>{description}</p>
              </div>
            </MunkiDialog>
          </div>
        </StyledLoginOverflow>
      )}
    </div>
  );
};
