import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Grid from "@mui/material/Grid";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Grid container>
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        <Grid item md={10}>
          <Header />
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default DefaultLayout;
