import React from "react";
import { useAppState } from "./shared/AppProvider";

import {
  Avatar,
  Badge,
  Divider,
  Drawer,
  Dropdown,
  Layout,
  List,
  Menu,
  Popconfirm,
  Row,
  Switch,
  Tooltip,
} from "antd";
const Profile = () => {
  console.log(Profile);

  const [state, dispatch] = useAppState();

  return (
    <>
      <Drawer
        closable={true}
        width={220}
        onClose={() => dispatch({ type: "mobileDrawer" })}
        visible={state.mobileDrawer}
        className="chat-drawer"
      >
        Profile Section here
      </Drawer>
    </>
  );
};

export default Profile;
