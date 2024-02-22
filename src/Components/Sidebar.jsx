import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-[#2D7690] h-screen">
      <div className="logo w-100 h-[80px]"></div>
      <div className="sidebar_body">
        <Button
          style={{
            color: "black",
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "15px 10px 15px 10px",
          }}
          variant="elevated"
          component={Link}
          to="/"
        >
          <i className="fa-solid fa-table-cells-large"></i>
          <h1 className="pl-4">Tổng quan</h1>
        </Button>
        <Button
          style={{
            color: "black",
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "15px 10px 15px 10px",
          }}
          variant="elevated"
          component={Link}
          to="/plane"
        >
          <i className="fa-solid fa-plane"></i>
          <h1 className="pl-4">Quản lý máy bay</h1>
        </Button>
        <Button
          style={{
            color: "black",
            width: "100%",
            textAlign: "left",
            display: "flex",
            justifyContent: "flex-start",
            fontSize: "18px",
            fontWeight: "bold",
            padding: "15px 10px 15px 10px",
          }}
          variant="elevated"
          component={Link}
          to="/airport"
        >
          <i className="fa-solid fa-inbox"></i>
          <h1 className="pl-4">Quản lý sân bay</h1>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
