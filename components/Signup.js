import { Button, Form, Input, Message, Row, Tooltip } from "antd";

import { useState } from "react";

import {
  EyeTwoTone,
  MailTwoTone,
  PlaySquareTwoTone,
  QuestionCircleTwoTone,
  SkinTwoTone,
  MobileTwoTone,
} from "@ant-design/icons";

import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import { el } from "date-fns/locale";

const FormItem = Form.Item;

const Signup = ({ form }) => {
  const Content = styled.div`
    max-width: 400px;
    z-index: 2;
    min-width: 300px;
  `;
  const [otpSent, setotpSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cpassword, setCPassword] = useState("");

  var enterOTP = () => {
    if (email == "  " || phone == "  " || password == "  " || name == "  ") {
      console.log("empty");
    } else {
      if (password === cpassword) {
        setotpSent(true);
        console.log("done");
      } else {
        console.log("password does not match");
        setotpSent(false);
      }
    }
  };

  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      className="px-3 bg-white"
      style={{ minHeight: "100vh" }}
    >
      <Content>
        <div className="text-center mb-5">
          <Link href="/signup">
            <a className="brand mr-0">
              <PlaySquareTwoTone style={{ fontSize: "32px" }} />
            </a>
          </Link>
          <h5 className="mb-0 mt-3">Sign up</h5>

          <p className="text-muted">create a new account</p>
        </div>

        <Form
          layout="vertical"
          onFinish={(values) => {
            // e.preventDefault();
            console.log(values);
            // form.validateFields((err, values) => {
            //   if (!err) {
            //     Message.success("Account created. Please check your inbox!").then(
            //       () => Router.push("/signin")
            //     );
            //   }
            // });
          }}
        >
          {!otpSent ? (
            <>
              <FormItem
                label={
                  <span>
                    Name&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <QuestionCircleTwoTone style={{ fontSize: "16px" }} />
                    </Tooltip>
                  </span>
                }
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  prefix={<SkinTwoTone style={{ fontSize: "16px" }} />}
                  placeholder="Name"
                />
              </FormItem>

              <FormItem
                label={<span>Mobile&nbsp;</span>}
                name="Mobile"
                rules={[
                  {
                    required: true,
                    message: "Please input your Mobile!",
                    whitespace: false,
                  },
                ]}
              >
                <Input
                  prefix={<MobileTwoTone style={{ fontSize: "16px" }} />}
                  placeholder="Mobile"
                />
              </FormItem>
              <FormItem
                label="Email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input
                  prefix={<MailTwoTone style={{ fontSize: "16px" }} />}
                  type="email"
                  placeholder="Email"
                />
              </FormItem>

              <FormItem
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<EyeTwoTone style={{ fontSize: "16px" }} />}
                  type="password"
                  placeholder="Password"
                />
              </FormItem>

              <FormItem
                label="Confirm password"
                name="confirm"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please confirm your password!",
                //   },
                //   ({ getFieldValue }) => ({
                //     validator(_, value) {
                //       if (!value || getFieldValue("password") === value) {
                //         return Promise.resolve();
                //       }
                //       return Promise.reject(new Error("Passwords don't match! "));
                //     },
                //   }),
                // ]}

                // rules={[
                //   {
                //     required: true,
                //     message: "Please confirm your password!",
                //   },
                //   {
                //     validator: (rule, value, callback) => {
                //       if (value && form.getFieldValue("cpassword") !== form.getFieldValue("password")) {
                //         callback("Passwords don't match!");
                //       } else {
                //         callback();
                //       }
                //     },
                //   },
                // ]}
              >
                <Input
                  prefix={<EyeTwoTone style={{ fontSize: "16px" }} />}
                  type="password"
                  placeholder="Confirm password"
                />
              </FormItem>
            </>
          ) : (
            <>
              <FormItem label="Enter OTP" name="otp">
                <Input
                  prefix={<EyeTwoTone style={{ fontSize: "16px" }} />}
                  type="password"
                  placeholder="Enter OTP"
                />
              </FormItem>
            </>
          )}

          <FormItem>
            {!otpSent ? (
              <Button type="primary" block onClick={enterOTP} className="mt-3">
                Get OTP
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" block>
                Sign up
              </Button>
            )}
          </FormItem>

          <div className="text-center">
            <small className="text-muted">
              <span>Already have an account?</span>{" "}
              <Link href="/signin">
                <a>&nbsp;Login Now!</a>
              </Link>
            </small>
          </div>
        </Form>
      </Content>
    </Row>
  );
};

export default Signup;
