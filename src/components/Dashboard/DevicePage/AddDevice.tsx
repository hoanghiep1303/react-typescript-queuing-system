import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell from "../../../assets/img/bell.png";
import Dropdown from "../../utils/Dropdown";

type Props = {};

const addDeviceOptions = ["Chọn loại thiết bị", "Kiosk", "Display counter"];

const AddDevice = (props: Props) => {
  const [selectedOption, setSelectedOption] = useState(addDeviceOptions[0]);
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="device" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Thiết bị</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Danh sách thiết bị</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Thêm thiết bị</h5>
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
              <div className="col-12">
                <h3 className="text-orange">Quản lý thiết bị</h3>
                <div className="bdr-16 bg-white my-4">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="p-3 py-4">
                          <h5 className="text-orange">Thông tin thiết bị</h5>
                          <div className="row mt-3">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Mã thiết bị:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập mã thiết bị"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                Loại thiết bị:
                                <span className="text-orange mx-2 fw-bolder">
                                  *
                                </span>
                              </label>
                              <Dropdown
                                options={addDeviceOptions}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Tên thiết bị:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tên thiết bị"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Tên đăng nhập:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập tài khoản"
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Địa chỉ IP:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập địa chỉ IP"
                              />
                            </div>
                            <div className="col-md-6 mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Mật khẩu:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập mật khẩu"
                              />
                            </div>
                          </div>
                          <div className="row mt-2">
                            <div className="col mb-2">
                              <label className="form-label fw-bolder">
                                <div className="d-flex">
                                  Dịch vụ sử dụng:
                                  <span className="text-orange mx-2 fw-bolder">
                                    *
                                  </span>
                                </div>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Nhập dịch vụ"
                              />
                            </div>
                          </div>
                          <div className="row mt-2 mb-5">
                            <div className="col mb-2">
                              <div className="d-flex">
                                <span className="text-orange me-2 fw-bolder">
                                  *
                                </span>
                                Là trường thông tin bắt buộc
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex  justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-warning text-center mx-4 min-w-147 fw-bolder cs-pd-btn"
                    onClick={() => navigate(-1)}
                  >
                    Hủy bỏ
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning text-center mx-4 min-w-147 fw-bolder cs-pd-btn"
                  >
                    Thêm thiết bị
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDevice;
