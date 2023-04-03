import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell from "../../../assets/img/bell.png";
import Dropdown from "../../utils/Dropdown";
import "../../../css/Number.css";

type Props = {};

const supplyOptions = [
  "Chọn dịch vụ",
  "Khám tim mạch",
  "Khám sản - Phụ khoa",
  "Khám răng hàm mặt",
  "Khám tai mũi họng",
  "Khám hô hấp",
  "Khám tổng quát",
];

const AddNumber = (props: Props) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(supplyOptions[0]);

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="provide-number" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Cấp số</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-muted me-3">Danh sách cấp số</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Cấp số mới</h5>
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
              <div className="col-md-11">
                <h3 className="text-orange">Quản lý dịch vụ</h3>
              </div>
              <div className="col-md-12 my-3">
                <div className="bdr-16 bg-white w-100 h-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col">
                        <div className="col-12 my-5">
                          <h1 className="text-orange text-center">
                            CẤP SỐ MỚI
                          </h1>
                        </div>
                        <div className="col-6 text-center relative-25 mb-5">
                          <Dropdown
                            options={supplyOptions}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            label={"Dịch vụ khách hàng lựa chọn"}
                          />
                        </div>
                        <div className="col-12 pt-5 mt-5 mb-5">
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
                              data-bs-toggle="modal"
                              data-bs-target="#numberModal"
                            >
                              In số
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="modal fade"
                        id="numberModal"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content bdr-24">
                            <div className="modal-header">
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="text-center">
                                <h3 className="text-muted mb-3">
                                  Số thứ tự được cấp
                                </h3>
                                <h1 className="text-orange mb-3 fw-bolder">
                                  2001201
                                </h1>
                                <span className="text-muted d-flex justify-content-center">
                                  DV: Khám răng hàm mặt
                                  <p className="ps-1 fw-bolder">
                                    (tại quầy số 1)
                                  </p>
                                </span>
                              </div>
                            </div>
                            <div className="modal-footer my-background-orange bdr-bot-24">
                              <h5 className="col-12 text-center text-white my-2">
                                Thời gian cấp: 09:30 30/03/2023
                              </h5>
                              <h5 className="col-12 text-center text-white mb-2">
                                Hạn sử dụng: 17:30 30/03/2023
                              </h5>
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
        </div>
      </div>
    </div>
  );
};

export default AddNumber;
