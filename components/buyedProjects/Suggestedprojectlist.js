import React from "react";
import { Col, Row, Button } from "antd";

const Suggestedsprojectlist = (sproject) => {
  console.log(sproject.img);
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col>
          <img
            style={{
              width: "90px",
              height: "56px",
              top: "379px",
              left: "415px",
              borderRadius: "8px",
            }}
            src={sproject.img}
            alt="iamge"
          />
        </Col>

        <Col span={10}>
          <div>
            <h6>{sproject.title}</h6>
            <p>{sproject.desc}</p>
          </div>
        </Col>
        <Col>
          <div>
            <a href={sproject.rating}>rating</a>
          </div>
        </Col>
        <Col>
          <div>
            <a href={sproject.price}>price</a>
          </div>
        </Col>
        <Col>
          <div>
            <Button type="primary" shape="round">
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Suggestedsprojectlist;
