import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import { olxIcon } from "../../assets";
import MenuOptions from "../menu/menu.jsx";
import React, { useEffect, useState } from "react";
import { Form, Input, Dropdown, Button, Modal, Upload, Select } from "antd";
import { SearchOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import { BsBuildings } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegBell } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { sell } from "../../assets";
import { Link } from "react-router-dom";
import { MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import uploadImage from "./../../firebase/upload.image.js";
import { addProductDetailsOnFirestore } from "../../firebase/addData.js";
import { signMeOut } from "./../../firebase/login.js";


// import "@fortawesome/fontawesome-free/css/all.min.css";

async function getData() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  return result;
}

function update() {
  signMeOut()
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
    onClick: () => update(),
  },
];

const categoryOptions = [
  {
    value: "Clothe",
    label: "Clothe",
  },
  {
    value: "Mobile",
    label: "Mobile",
  },
  {
    value: "jewelries",
    label: "jewelries",
  },
];

const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Header = ({ isUser, currentUserUid }) => {

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [stock, setStock] = useState("");
  const [productImg, setProductImg] = useState([]);

  async function productDetails() {
    try {
      const image = await uploadImage(productImg, `${currentUserUid}/${title.split(" ").join("-")}`);
      console.log(image);
      const docRef = await addProductDetailsOnFirestore(
        title,
        description,
        category,
        brand,
        price,
        discountPercentage,
        stock,
        image
      );
      console.log("Product added successfully:", docRef);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  const onChange = (value) => {
    setCategory(value);
  };
  const onSearch = (value) => {
    setCategory(value);
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const [value, setvalue] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filteredData, setfilter] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    productDetails();
    setTitle("");
    setProductImg("")
    setDescription("");
    setCategory("");
    setDiscountPercentage("");
    setPrice("");
    setStock("");
    setBrand("");
  };
  const CloseModal = () => {
    setIsModalOpen(false);
    setTitle("");
    setProductImg("")
    setDescription("");
    setCategory("");
    setDiscountPercentage("");
    setPrice("");
    setStock("");
    setBrand("");
  };

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

          {isUser ? (
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
                <img src={sell} alt="border" className="border-image" />
                <Button className="modal-button" onClick={showModal}>
                  + Sell
                </Button>
                <Modal
                  className="product-modal"
                  title="Add Products"
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={CloseModal}
                >
                  <div className="mt-3">
                    {/* <div className="images">
                      <Upload
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                        listType="picture-card"
                        fileList={fileList}
                        onPreview={handlePreview}
                        onChange={handleChange}
                        accept="image/*, .jpg, .jpeg, .png"
                      >
                        {fileList.length >= 4 ? null : uploadButton}
                      </Upload>
                      <Modal
                        open={previewOpen}
                        title={previewTitle}
                        footer={null}
                        onCancel={handleCancel}
                      >
                        <img
                          alt="Product-img"
                          style={{
                            width: "100%",
                          }}
                          src={previewImage}
                        />
                      </Modal>
                    </div> */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setProductImg(e.target.files[0])}
                    />
                    <MDBInput
                      className="my-3 input"
                      label="Title"
                      onChange={(e) => setTitle(e.target.value)}
                      type="text"
                      value={title}
                    />
                    <MDBTextArea
                      onChange={(e) => setDescription(e.target.value)}
                      className="my-3"
                      label="Description"
                      id="formControlDefault"
                      type="text"
                      value={description} 
                      />
                    <Select
                      className="category-dropdown"
                      showSearch
                      placeholder="Select Category"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={categoryOptions}
                    />
                    <MDBInput
                      onChange={(e) => setBrand(e.target.value)}
                      className="my-3"
                      label="Brand"
                      id="formControlDefault"
                      type="text"
                      value={brand}
                    />
                    <div className="d-flex justify-content-between">
                      <div className="w-49">
                        <MDBInput
                          onChange={(e) => setPrice(e.target.value)}
                          className="my-3"
                          label="Price"
                          id="formControlDefault"
                          type="number"
                          value={price}
                        />
                      </div>
                      <div className="w-50">
                        <MDBInput
                          onChange={(e) => setDiscountPercentage(e.target.value)}
                          className="my-3"
                          label="Discount Percentage (optional)"
                          id="formControlDefault"
                          type="number"
                          value={discountPercentage}
                        />
                      </div>
                    </div>
                    <MDBInput
                      onChange={(e) => setStock(e.target.value)}
                      className="my-3"
                      label="Stock"
                      id="formControlDefault"
                      type="number"
                      value={stock}
                    />
                  </div>
                </Modal>
              </div>
            </div>
          ) : (
            <div className="log-or-signup">
              <Link to='/login' className="link">
                Login or Sign up
              </Link>
            </div>
          )}
        </div>
        <div>
          <MenuOptions />
        </div>
      </div>
    </>
  );
};

export default Header;
