import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Menu } from "antd";
import logo from "./logoo.png";
import iconFS from "../../assets/imgs/flash-sale-iconr.jpg";
import iconfreeShip from "../../assets/imgs/freeship.png";
import iconSupport from "../../assets/imgs/hỗ trợ.png";
import iconDt from "../../assets/imgs/icon-doi-tra.jpeg";

import "./style.scss";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  LaptopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import MenuSlider from "../slider";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/user/userSlice";
import { setOpenMenu } from "../../redux/features/app";

const { Search } = Input;
const Header = () => {
  const navigate = useNavigate();
  const { isLogin, userInfo } = useSelector((state) => state.user);
  const { openMenu } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const isHome = window.location.pathname.includes("home");
  const onSearch = (value, _e, info) => {
    console.log(info?.source, value);
  };
  const itemMenu = [
    {
      key: "1",
      icon: <LaptopOutlined />,
      label: "Laptop",
      children: [
        {
          key: "11",
          label: "MacBook",
          children: [
            {
              key: "111",
              label: "MacBook Air",
            },
            {
              key: "112",
              label: "MacBook Pro",
            },
          ],
        },
        {
          key: "12",
          label: "MSI",
        },
        {
          key: "13",
          label: "DELL",
        },
        {
          key: "14",
          label: "ASUS",
        },
        {
          key: "15",
          label: "Lenovo",
        },
      ],
    },

    {
      key: "2",
      icon: <DesktopOutlined />,
      label: "PC Gaming",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Linh Kiện Máy Tính",
    },
    {
      key: "4",
      label: "Phụ Kiện Máy Tính",
      icon: <MailOutlined />,
      children: [
        {
          key: "41",
          label: "Option 5",
        },
        {
          key: "42",
          label: "Option 6",
        },
        {
          key: "43",
          label: "Option 7",
        },
        {
          key: "44",
          label: "Option 8",
        },
      ],
    },
    {
      key: "6",
      icon: <ContainerOutlined />,
      label: "Linh Kiện Máy Tính",
    },
    {
      key: "7",
      icon: <ContainerOutlined />,
      label: "Linh Kiện Máy Tính",
    },
    {
      key: "8",
      icon: <ContainerOutlined />,
      label: "Linh Kiện Máy Tính",
    },
    {
      key: "5",
      label: "Dịch Vụ Sữa Chữa Bảo Trì",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "51",
          label: "Option 9",
        },
        {
          key: "52",
          label: "Option 10",
        },
        {
          key: "511",
          label: "Submenu",
          children: [
            {
              key: "5111",
              label: "Option 11",
            },
            {
              key: "5112",
              label: "Option 12",
            },
          ],
        },
      ],
    },
  ];
  const items = [
    {
      key: "1",
      label: <Link to={ROUTES.LOGIN_PAGE}>Login</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <Link to={ROUTES.REGISTER_PAGE}>Register</Link>,
    },
  ];
  const itemsLoginSuccess = [
    {
      key: "1",
      label: <Link to={ROUTES.USER_PROFILE_PAGE}>My Profile</Link>,
    },

    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <Link to={ROUTES.USER_PURCHASE_HISTORY_PAGE}>Purchase History</Link>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <Button
          onClick={() => {
            dispatch(logout());
            navigate(ROUTES.HOME_PAGE);
          }}
        >
          Logout
        </Button>
      ),
    },
  ];
  const onClickMenu = (e) => {
    console.log("click", e);
  };
  const toggleCollapsed = () => {
    // setCollapsed(!openMenu);
    dispatch(setOpenMenu(!openMenu));
  };

  console.log("====", openMenu);
  useEffect(() => {
    // if (isHome) {
    //   dispatch(setOpenMenu(true));
    // } else {
    //   dispatch(setOpenMenu(false));
    // }
  }, [openMenu]);
  const handleRedirectToCartPage = () => {
    navigate(ROUTES.CART_PAGE);
  };
  const { carts } = useSelector((state) => state.cart);
  return (
    <>
      <div className="header-container container">
        <div className="container-mw-1200">
          <div className="header-container__top">
            <div className="header-container__top__logo">
              <Link
                className="header-container__top__logo_Link"
                to={ROUTES.HOME_PAGE}
              >
                <img src={logo} width={250} height={140} alt="logo" />
              </Link>
            </div>
            <div className="header-container__top__search">
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
            <div className="header-container__top__content">
              <div className="header-container__top__content__phone">
                <div className="header-container__top__content__phone__icon">
                  <img
                    style={{ width: 30, height: 30 }}
                    src="https://koileather.com/wp-content/uploads/2023/12/blue-phone-icon-png-22.png"
                    alt=""
                  />
                </div>
                <div className="header-container__top__content__phone__content">
                  <p>Mua hàng online</p>
                  <p style={{ color: "yellow" }}> 0775103534</p>
                </div>
              </div>
              <div className="header-container__top__content__cart">
                <div className="header-container__top__content__cart__icon">
                  <img
                    style={{ width: 30, height: 30 }}
                    src="https://cdn.pixabay.com/photo/2015/12/23/01/14/edit-1105049_640.png"
                    alt=""
                  />
                </div>
                <div
                  className="header-container__top__content__cart__content"
                  onClick={handleRedirectToCartPage()}
                >
                  <p>Giỏ Hàng</p>
                </div>
              </div>
              <div className="header-container__top__content__Login">
                <div className="header-container__top__content__Login__icon">
                  <img
                    style={{ width: 30, height: 30 }}
                    src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
                  ></img>
                </div>
                {!isLogin && (
                  <div className="header-container__top__content__Login__content">
                    <Dropdown menu={{ items }} placement="bottomLeft">
                      <p>Login/Register</p>
                    </Dropdown>
                  </div>
                )}

                {isLogin && (
                  <div className="header-left__user-grp">
                    <div className="header-left__user-avatar">
                      <Dropdown
                        menu={{ items: itemsLoginSuccess }}
                        trigger={"click"}
                        placement="bottomLeft"
                      >
                        <div className="header-left__user-name">
                          <p>Hello {userInfo?.fullName}</p>
                        </div>
                      </Dropdown>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-menu__bottom container-mw-1200">
        <div className="navbar-menu__bottom__menu-bar">
          <div
            style={{
              width: 220,
            }}
          >
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{
                marginBottom: 16,
              }}
            >
              {" "}
              Danh mục sản phẩm
              {!openMenu ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Menu
              // defaultSelectedKeys={["231"]}
              onClick={onClickMenu}
              mode="vertical"
              theme="dark"
              inlineCollapsed={!openMenu}
              items={itemMenu}
            />
          </div>
        </div>
        <div className="navbar-menu__bottom__list">
          <div className="navbar-menu__bottom__list__item">
            <div className="navbar-menu__bottom__list__item1">
              <a href="http://">
                <img src={iconFS} />
                Flash Sale
              </a>
            </div>
            {/* <div className="navbar-menu__bottom__list__item2">
              <a href="http://">
                <img src={iconFS} />
                Cam kết hàng chính hãng
              </a>
            </div> */}
            <div className="navbar-menu__bottom__list__item3">
              <Link to={ROUTES.FREE_SHIP_PAGE}>
                {" "}
                <img src={iconfreeShip} />
                Miễn Phí Vận Chuyển
              </Link>
            </div>
            <div className="navbar-menu__bottom__list__item4">
              <Link to={ROUTES.WARRANTY_PAGE}>
                <img src={iconDt} />
                Đổi Trả Miễn Phí
              </Link>
            </div>
            <div className="navbar-menu__bottom__list__item5">
              <a href="http://">
                {" "}
                <img src={iconSupport} />
                Hỗ trợ nhiệt tình
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
