import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import { olxIcon } from "../../assets";
import MenuOptions from "../menu/menu.jsx";
import React, { useEffect, useState } from "react";
import { Form, Input, Dropdown } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import { BsBuildings } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { sell } from "../../assets";
import { Link } from "react-router-dom";

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  return result;
}

const items = [
  {
    label: "View profile",
    key: "1",
  },
  {
    label: "My adds",
    key: "2",
  },
  {
    label: "Buy Packages",
    key: "3",
  },
  {
    label: "Logout",
    key: "4",
    danger: true,
  },
];

const Header = () => {
  const [value, setvalue] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredData, setfilter] = useState([]);

  const filteredProducts = value.filter((product) =>
    product.title.toLowerCase().includes(inputText.toLowerCase())
  );
  useEffect(() => {
    setfilter(filteredProducts);
  }, [inputText]);

  const location = (values) => {
    console.log("Received values of form: ", values);
  };
  const products = (values) => {
    console.log("Received values of form: ", values);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        const arr = result.products;
        setvalue(arr);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="main container-fluid">
        <div className="top-nav">
          <span>
            <img src={olxIcon} />
          </span>
          <span>
            <IoCarSportOutline className="top-nav-icon" />
            MOTORS
          </span>
          <span>
            <BsBuildings className="top-nav-icon" />
            PROPERTY
          </span>
        </div>
        <div className="mid-nav">
          <div className="img">
            <img src={olxIcon} className="olx-black-icon" />
          </div>

          <div className="search-fileds">
            <div className="inputs">
              <div className="l-searching">
              <Form
                name="location"
                initialValues={{
                  remember: true,
                }}
                onFinish={location}
              >
                <Form.Item name="location">
                  <Input
                    className="search-location"
                    prefix={<SearchOutlined className="search-icon" />}
                    placeholder="Pakistan"
                  />
                </Form.Item>
              </Form>
              </div>
              <div className="p-searching">
                <Form
                  name="search"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={products}
                >
                  <Form.Item name="product">
                    <Input
                      className="search-products"
                      suffix={<SearchOutlined className="search-icon-2" />}
                      placeholder="Find Cars, Mobile Phones and more..."
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </Form.Item>
                  <div className="searched-items">
                    {inputText &&
                      filteredData.map((product) => (
                        <div key={product.id} className="product">
                          <Link
                          onClick={() => setInputText("")}
                            to={`/details/${product.id}`}
                            className="card-link"
                            style={{ textDecoration: "none" }}
                          >
                            <div>{product.title}</div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div className="search-icons">
            <div>
              <BiMessageSquareDetail />
            </div>
            <div>
              <FaRegBell />
            </div>
            <div>
              <Dropdown.Button
                className="profile"
                icon={<DownOutlined />}
                menu={{
                  items,
                }}
                onClick={() => enterLoading(1)}
              >
                <FaCircleUser />
              </Dropdown.Button>
            </div>
            <div className="sell">
              <img src={sell} alt="sell-boder" />
              <span>+ sell</span>
            </div>
          </div>
        </div>
        <div>
          <MenuOptions />
        </div>
      </div>
    </>
  );
};

export default Header;
