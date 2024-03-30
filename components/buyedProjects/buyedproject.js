import React from "react";
import { Col, Row } from "antd";
import ProjectList from "./ProjectList";
import Suggestedproject from "./Suggestedproject";

const commonStyle = {
  fontSize: "14px",
  fontWeight: "lighter",
  lineHeight: "21px",

};

function buyedproject() {
  let projects = [
    {
      img: `https://s3-alpha-sig.figma.com/img/3a52/cdc9/628d9abe1d64b9cd528c434381eba87f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GsK5~JLmbqbS3P3wXCV97op8FjhqpQz0i8yEHDB34oLCm5CKN7RklCpcvPuKHQ1rJGJ-L81C24OKOHKHP9B2UrN3VzMW4vtVLHtsrDwPRHuPhDIC8TfFANIewQdbunzSKBCdBVhLW-Y9XPNz-nKbfWVRgOCNKD9EBLg5LwoHjD8YZ6iiXmkNdOmZ4fl4td3y5csi1bCswFsRqO1dG8Q-uB39qO0wM8MJwI-PFieQeriSbG8D0Ft85vNsOso75BcGZvOOIC5zR25NkJFlBT-kEus0b4WqB5HOt9YrabwKkU7Hszbm1q2dK35hhnHXUaUcvd7AIv5NryPR8AkUDHsHGg__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      sourcecode: "Source Code URL",
      video: "Video URL",
      report: "Project Report URL",
    },
    {
      img: `https://s3-alpha-sig.figma.com/img/68f1/7f27/27022519889f16e1275b4e0f96f434b8?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QDnP1~dO8mPPbuJtt4vqZVpJCwZWJjxy89WOD-fGBF4JSz7gIAxk0AMIPuddXjt1JdTWdITwZ9nR87bN9rtjy5jImMtYDRc~fV2QOxCa4z8fP7JIgTp414amO4wQYcfAxonxLxeqy1yjLHAphdkxcx57M7ASu59NdKiMANIVK5DAIg0xW-iWqOpS5lMsNDyhWD768JJCl-~0OZrxOJUUcci9bUp7stKGhptUZHiiJ0hMULMwl~xlNmyoUhj1i1oN83JUQepDOgq33ZOmmKLaYCjC2Ctn3HwwWuTJpznFJevm3pWJOs1Bc9~Vny1BVwFYWGNwuG57Uq~DUqa6BvV09Q__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      sourcecode: "Source Code URL",
      video: "Video URL",
      report: "Project Report URL",
    },
    {
      img: `https://s3-alpha-sig.figma.com/img/9546/52dd/e8ca55bfc15c9f14ab6b2a5ec0cb664f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OoovUi6QhgAd~qNFTy77su~xAh2SQ22ylpJkFa0~6bxm63Dj1Ok7DuZ4piq0re9gHV2dgoTRAtZAIr2zIKS02cZpu-vOgfUi3KWiyRQH-bte7tKqCCTd5HrefI6rBFzNb5aZt1HeOjdmy0fFQkPgovv1ydRSVb8rSbltt5C8gJlhta~rtH0jwPI1eYlRIRHQ6Zt3J~qMb~ue2h8Dv1qw31tdgINfOOVN9Y0ZETa-pMm1~OPTvEhq97Cjwj-9590frf6jrDaMMECcUbYg90Vw15qex8wDsTGlkrilRHCBOVgeNkDulzismi5B~e-L1P7WwbTu~c4zapK12xLLAX~ckg__`,
      title: "Abstract 3D",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      sourcecode: "Source Code URL",
      video: "Video URL",
      report: "Project Report URL",
    },
  ];

  return (
    <>
      <div
        style={{
          border: "2px solid black",
          boxShadow: "0px 10px 60px 0px #E2ECF980",
         padding :"14px 12px",
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
            Your Project
          </h2>
        </Row>
        <br />
        <Row align="middle" justify="space-between" >
          <Col span={14}>
            <div>
              {" "}
              <h5 style={commonStyle}>Project Name </h5>
            </div>
          </Col>
          <Col>
            <div>
              {" "}
              <h5 style={commonStyle}>Source Code </h5>{" "}
            </div>
          </Col>
          <Col>
            <div>
              {" "}
              <h5 style={commonStyle}>Video </h5>
            </div>
          </Col>

          <Col>
            <div>
              {" "}
              <h5 style={commonStyle}>Project Report </h5>{" "}
            </div>
          </Col>
        </Row>
        <hr/>

        {projects.map((project, index) => (
          <ProjectList key={index} index={index} project={project} />
        ))}
      </div>
      <Suggestedproject></Suggestedproject>
    </>
  );
}

export default buyedproject;
