import React from "react";
import { Col, Row } from "antd";

const commonStyle = {
  width: "33px",
  height: "29px",
  top: "302px",
  // left: "1000px",
  opacity: "80%",
};

let icons = {
  code: `https://s3-alpha-sig.figma.com/img/fd06/4785/acc5e2d6332d869a2432e09f64862966?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AebRKKttAmGK0uVIaOHv1dx11NZc-l7NUmvYBICOwB5TxUbdNGqcQnkCop-2a118U7vsGsp6f8H5x0hbzg2JG9oIWfCrBAiZGZfXfLy4m~6muiIRIrBbfNeC-CY-rWNlEefdSeg0yb7hdBu97NTriPZOHkyJFqNN163Fh4AYktFyBOixLMlrc6xC4p3OClhGYpJUGbnV~SDBj-NelfJ1zgc5u9wInVsWX6c95Cj7A3-cx-XQOAL9mcf92GHWINSNSC2A9Awanc6UEcN8Ov7bYgBBvhdQC6c2DPT~Wq9PkISUIY6FP5tRrFV0kyUy9ZZB3aq2i9LZeOPKy-Cs8-wfRA__`,
  video:
    "https://s3-alpha-sig.figma.com/img/ef6d/3502/4ed099c33e6a3ccd1cab9d23e778a493?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=orEIM7ptIuFxVrPIkdIQBOiac8Cl3vfPsf6mjUIEb3xjb-r1GVOCqwoL-hQTXaQyTOe4xFRfCnLrsUnTFsUvTeSrh1tMI0WQJYXChn7RUidZnTUjKjyOeiAaxJ39ndhnSPb3DAtwwE4RvzP6pK8FNZewUMgn0RMKIbYYmxtG-IS2uohkc1qQQHqFcEv-6TTn27pljZCrCJ3DtOUfAgACFIah6kw7-1mHv3cU9r0W52H6qp~w3Ht5608rpZvtRcTct3Wh~~zK2ZFXQy0ZeLWhydY8HZV1PgF2pci7UVRiqsW3ppb3K681YfVnQ1BZwjfCo9Odq00KRpBpJp2UnM-gPg__",
  zip: "https://s3-alpha-sig.figma.com/img/c969/f83b/18eea44b56cb2320690c73c3599cf3bb?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qqGOlwVxl2-K6QMHNDOo~YmDlcp-WvXEjKUexS7N2L5LWyRpYMZX-tGti3Kk0EIMTsCqmHbvGmfsZ7PkexUIbdJpFtSHDY7xmbu8k9v86hprddl4BMrU4~XWLI7dBKNoCNtD72vFTHP1ZcdZdKGnulMfdbvX118KlUFmLL7sL2kTx~NJvMa5rdOUjRZG1SgWHB-DpQcL18I2y2~Anke5E9EPCFWXKVjMKQ44RtO-t0xpkLNsrieAaPQw79XpnEDSsXrIlfQLl18dUm1gf~NqVkGnqlUbAKMyyft46BgyzDHZ-Cu7SO5YCAxqPapHZ95bNi4YQkHFIN-MkWJNu0Zr0A__",
};
const ProjectList = ({ index, project }) => {
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
            src={project.img}
          />
        </Col>

        <Col span={10}>
          <div>
            <h6>{project.title}</h6>
            <p>{project.desc}</p>
          </div>
        </Col>
        <Col>
          <div>
            <a href={project.sourcecode}>
              <img src={icons.code} style={commonStyle}></img>
            </a>
          </div>
        </Col>
        <Col>
          <div>
            <a href={project.video}>
              <img src={icons.video} style={commonStyle}></img>
            </a>
          </div>
        </Col>
        <Col>
          <div>
            <a href={project.report}>
              <img src={icons.zip} style={commonStyle}></img>
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProjectList;
