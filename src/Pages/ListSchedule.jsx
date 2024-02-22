import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { listSchedule } from "../Services/ScheduleServices";

const ListSchedule = () => {
  const [listSchedules, setListSchedule] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await listSchedule();
      console.log(data);
      if (data) {
        setListSchedule(data);
        setTotal(data.length);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="px-10 py-3">
      <h1 className="text-center text-3xl font-bold">DANH SÁCH SÂN BAY</h1>
      <TableContainer component={Paper} sx={{ maxHeight: 480, maxWidth: 1200 }}>
        <Table sx={{ maxWidth: 1200 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Mã số
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Tên máy bay
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Điểm khởi hành
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Điểm đến
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Giờ khởi hành
              </TableCell>
              <TableCell
                style={{
                  backgroundColor: "black",
                  color: "white",
                  textTransform: "uppercase",
                  fontSize: "16px",
                }}
              >
                Giờ đến
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listSchedules.map((s) => {
              return (
                <TableRow key={s.id} style={{ cursor: "default" }}>
                  <TableCell>{s.flightCode}</TableCell>
                  <TableCell>{s.planeName}</TableCell>
                  <TableCell>{s.departureAirport.airportName}</TableCell>
                  <TableCell>{s.arrivalAirport.airportName}</TableCell>
                  <TableCell>{s.departureTime}</TableCell>
                  <TableCell>{s.arrivalTime}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <h4 className="mt-2">Total: {total}</h4>
    </div>
  );
};

export default ListSchedule;
