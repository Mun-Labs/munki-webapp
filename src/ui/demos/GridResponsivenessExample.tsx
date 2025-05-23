import React from "react";
import { Col, Row } from "antd";

export const GridResponsivenessExample: React.FC = () => (
  <Row>
    {new Array(10).fill(0).map((_, index) => {
      const key = `col-${index}`;
      return (
        <Col
          key={key}
          xs={{ flex: "100%" }}
          sm={{ flex: "50%" }}
          md={{ flex: "40%" }}
          lg={{ flex: "20%" }}
          xl={{ flex: "10%" }}
        >
          Col
        </Col>
      );
    })}
  </Row>
);
