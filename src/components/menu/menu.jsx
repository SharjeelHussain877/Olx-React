import React, { useState } from "react";
import {
  DownOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "./menu.scss";
import {Link} from 'react-router-dom'

// Menu items by array of objects
const menuText = [
  {
    label: "All Category",
    key: "categories",
    icon: <DownOutlined />,
    children: [
      {
        type: "group",
        label: "Mobiles",
        children: [
          {
            label: "Mobile Phones",
            key: "mobile",
          },
          {
            label: "Accessories",
            key: "accessories",
          },
        ],
      },
      {
        type: "group",
        label: "Vehicles",
        children: [
          {
            label: "Cars",
            key: "car",
          },
          {
            label: "Cars Accessories",
            key: "car-accessories",
          },
        ],
      },
    ],
  },
  {
    label: <Link to="/" style={{textDecoration: "none"}}>Home</Link>,
    key: "mobiles",
  },
  {
    label: "Cars",
    key: "cars",
  },
  {
    label: "Motorcycles",
    key: "motorCycle",
  },

  {
    label: "Houses",
    key: "houses",
  },
  {
    label: "Video - Audios",
    key: "videos-audios",
  },
  {
    label: "Tablets",
    key: "tablets",
  },
  {
    label: "Land & Plot",
    key: "land-and-plot",
  },
];

function MenuOptions() {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="menu-items">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuText}
      />
    </div>
  );
}

export default MenuOptions;
