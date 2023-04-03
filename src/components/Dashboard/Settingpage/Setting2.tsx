import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell from "../../../assets/img/bell.png";
import { useNavigate } from "react-router-dom";
import AccountTable from "./AccountTable";
import data from "../../../data/account_data.json";
import Dropdown from "../../utils/Dropdown";
import addsquare from "../../../assets/img/add-square.png";
import Addbutton from "../../utils/Addbutton";
import Search from "../../utils/Search";

type Props = {};

const roleOptions = ["Tất cả", "Kế toán", "Quản lý", "Admin"];

const Setting2 = (props: Props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(roleOptions[0]);

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="setting" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Cài đặt hệ thống</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Quản lý tài khoản</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center my-4 px-2">
                  <div className="d-flex align-items-center">
                    <img className="me-4" src={bell} alt="" />
                    <div
                      onClick={() => navigate("/")}
                      className="d-flex align-items-center text-decoration-none cursor-pointer"
                    >
                      <div className="flex-shrink-0">
                        <img className="w-100 h-100" src={avatar} alt="" />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <p className="m-0 text-muted">Xin chào</p>
                        <h5 className="m-0 text-dark">Lê Quỳnh Ái Vân</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* content */}
          <div className="container-fluid m-2 pe-0">
            <div className="row w-100">
              <div className="col-md-11 pe-0">
                <h3 className="text-orange">Danh sách thiết bị</h3>
                <div className="d-flex justify-content-between">
                  <div className="col-md-3 mt-3">
                    <Dropdown
                      options={roleOptions}
                      selectedOption={selectedOption}
                      setSelectedOption={setSelectedOption}
                      label={"Tên vai trò"}
                    />
                  </div>

                  <div className="col-md-3 mt-3">
                    <Search />
                  </div>
                </div>
              </div>
              <div className="col-12 my-3 pe-md-0">
                <div className="d-flex flex-wrap-reverse justify-content-between">
                  <AccountTable data={data} />

                  <div className="col-1 custom-add-btn">
                    <div className="d-flex justify-content-end mb-4">
                      <div onClick={() => navigate("/add-account")}>
                        <Addbutton icon={addsquare} title="Thêm tài khoản" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // made by Hiệp
  );
};

export default Setting2;
