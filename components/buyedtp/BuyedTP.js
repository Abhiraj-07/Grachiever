import React from "react";
import { Button, Progress, Tooltip, Col, Row, Statistic, Grid } from "antd";
// import Rating from "./Rating";
import Link from "next/dist/client/link";

const BuyedTP = () => {
  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Col span={6}>name_ modules</Col>

        <Col span={14}>
          {" "}
          <Tooltip>
            <Progress
              success={{
                percent: 90,
              }}
            />
          </Tooltip>
          <Statistic />
        </Col>
        <Col span={3}>
          &nbsp;&nbsp;
          
          <Link href="/rating">
                <a>
                  Rating  
                </a>
              </Link>
        </Col>
      </Row>
    </>
  );
};

export default BuyedTP;
