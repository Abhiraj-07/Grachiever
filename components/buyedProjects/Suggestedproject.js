import React from "react";
import { Col, Row } from "antd";
import Suggestedsprojectlist from "./Suggestedprojectlist";

const commonStyle = {
  fontSize: "14px",
  fontWeight: "lighter",

  font: "Poppins",
  lineHeight: "21px",
};

function Suggestedproject() {
  let sprojects = [
    {
      img: `https://s3-alpha-sig.figma.com/img/3a52/cdc9/628d9abe1d64b9cd528c434381eba87f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsK5~JLmbqbS3P3wXCV97op8FjhqpQz0i8yEHDB34oLCm5CKN7RklCpcvPuKHQ1rJGJ-L81C24OKOHKHP9B2UrN3VzMW4vtVLHtsrDwPRHuPhDIC8TfFANIewQdbunzSKBCdBVhLW-Y9XPNz-nKbfWVRgOCNKD9EBLg5LwoHjD8YZ6iiXmkNdOmZ4fl4td3y5csi1bCswFsRqO1dG8Q-uB39qO0wM8MJwI-PFieQeriSbG8D0Ft85vNsOso75BcGZvOOIC5zR25NkJFlBT-kEus0b4WqB5HOt9YrabwKkU7Hszbm1q2dK35hhnHXUaUcvd7AIv5NryPR8AkUDHsHGg__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      rating: "",
      price: {
        actualprice: "100k",
        offerprice: "$49.9k",
        discount: "50%",
      },
      buyNow: "BuyNow",
    },
    {
      img: `https://s3-alpha-sig.figma.com/img/68f1/7f27/27022519889f16e1275b4e0f96f434b8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDnP1~dO8mPPbuJtt4vqZVpJCwZWJjxy89WOD-fGBF4JSz7gIAxk0AMIPuddXjt1JdTWdITwZ9nR87bN9rtjy5jImMtYDRc~fV2QOxCa4z8fP7JIgTp414amO4wQYcfAxonxLxeqy1yjLHAphdkxcx57M7ASu59NdKiMANIVK5DAIg0xW-iWqOpS5lMsNDyhWD768JJCl-~0OZrxOJUUcci9bUp7stKGhptUZHiiJ0hMULMwl~xlNmyoUhj1i1oN83JUQepDOgq33ZOmmKLaYCjC2Ctn3HwwWuTJpznFJevm3pWJOs1Bc9~Vny1BVwFYWGNwuG57Uq~DUqa6BvV09Q__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      rating: "",
      price: {
        actualprice: "100k",
        offerprice: "$49.9k",
        discount: "50%",
      },
      buyNow: "BuyNow",
    },
    {
      img: `https://s3-alpha-sig.figma.com/img/68f1/7f27/27022519889f16e1275b4e0f96f434b8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDnP1~dO8mPPbuJtt4vqZVpJCwZWJjxy89WOD-fGBF4JSz7gIAxk0AMIPuddXjt1JdTWdITwZ9nR87bN9rtjy5jImMtYDRc~fV2QOxCa4z8fP7JIgTp414amO4wQYcfAxonxLxeqy1yjLHAphdkxcx57M7ASu59NdKiMANIVK5DAIg0xW-iWqOpS5lMsNDyhWD768JJCl-~0OZrxOJUUcci9bUp7stKGhptUZHiiJ0hMULMwl~xlNmyoUhj1i1oN83JUQepDOgq33ZOmmKLaYCjC2Ctn3HwwWuTJpznFJevm3pWJOs1Bc9~Vny1BVwFYWGNwuG57Uq~DUqa6BvV09Q__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      rating: "",
      price: {
        actualprice: "100k",
        offerprice: "$49.9k",
        discount: "50%",
      },
      buyNow: "BuyNow",
    },
  ];
  return (
    <>
      <br />
      <br />
      <div
        style={{
          border: "2px solid black",
          boxShadow: "0px 10px 60px 0px #E2ECF980",
          padding: "14px 12px",
          borderRadius: "8px",
        }}
      >
        <Row>
          <h2
            style={{
              font: "Poppins",
              weight: "500",
              size: "14px",
              lineHeight: "21px",
            }}
          >
            Suggested Project
          </h2>
        </Row>
        <br />
        <Row align="middle" justify="space-between">
          <Col span={14}>
            <div>
              <h5
                style={{
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}
              >
                Project Name{" "}
              </h5>
            </div>
          </Col>
          <Col>
            <div>
              {" "}
              <h5 style={commonStyle}>Rating </h5>{" "}
            </div>
          </Col>
          <Col>
            <div>
              {" "}
              <h5 style={ commonStyle }>Price </h5>
            </div>
          </Col>

          <Col span={2}>
            <div>
              {" "}
              <h5 style={ commonStyle }>Buy Now </h5>{" "}
            </div>
          </Col>
        </Row>
        <hr
          style={{
            height: "1px",
          }}
        />

        {sprojects.map((sproject, index) => (
          <Suggestedsprojectlist key={index} sproject={sproject} />
        ))}
      </div>
    </>
  );
}

export default Suggestedproject;
