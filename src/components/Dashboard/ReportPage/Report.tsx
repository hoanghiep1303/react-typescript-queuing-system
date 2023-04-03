import React, { useState } from "react";
import SideBar from "../SideBar";
import avatar from "../../../assets/img/avatar.png";
import bell from "../../../assets/img/bell.png";
import { useNavigate } from "react-router-dom";
import calendar from "../../../assets/img/calendar.png";
import Vector from "../../../assets/img/Vector.png";
import ReportTable from "./ReportTable";
import Addbutton from "../../utils/Addbutton";
import data from "../../..//data/report_data.json";
import Download from "../../../assets/img/document-download.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {};

const Report = (props: Props) => {
  const navigate = useNavigate();
  const [startDate1, setStartDate1] = useState<Date>(new Date());
  const [startDate2, setStartDate2] = useState<Date>(new Date());

  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        <div className="col-lg-2 px-0">
          <SideBar active="report" />
        </div>
        <div className="col-lg-10 my-background">
          {/* topbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="d-flex align-items-center h-100">
                  <div className="my-4 px-2">
                    <div className="d-flex justify-content-between">
                      <h5 className="text-muted me-3">Báo cáo</h5>
                      <i className="fa-solid fa-angle-right d-flex align-items-center me-3 mb-2 text-muted fa-xs"></i>
                      <h5 className="text-orange me-3">Lập báo cáo</h5>
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
                <div className="d-flex">
                  <div className="col-md-6 mt-3">
                    <label className="form-label fw-bolder">
                      Chọn thời gian
                    </label>
                    <div className="row g-2 align-items-center">
                      <div className="col-auto">
                        <div className="input-field-service form-control rounded px-2">
                          <span className="d-flex flex-wrap align-items-center">
                            <img src={calendar} alt=""></img>
                          </span>
                          <DatePicker
                            selected={startDate1}
                            onChange={(date: Date) => setStartDate1(date)}
                            dateFormat="dd/MM/yyyy"
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex align-items-center my-2">
                          <img src={Vector} alt="" />
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="input-field-service form-control rounded px-2">
                          <span className="d-flex flex-wrap align-items-center">
                            <img src={calendar} alt=""></img>
                          </span>
                          <DatePicker
                            selected={startDate2}
                            onChange={(date: Date) => setStartDate2(date)}
                            dateFormat="dd/MM/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-3 pe-md-0">
                <div className="d-flex flex-wrap-reverse justify-content-between">
                  <ReportTable data={data} />

                  <div className="col-1 custom-add-btn">
                    <div className="d-flex justify-content-end mb-4">
                      <div className="max-width-72">
                        <Addbutton icon={Download} title="Tải về" />
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

export default Report;
