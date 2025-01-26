"use client";
import { Grid } from "@mui/material";
import ProductPerfomance from "@/app/(DashboardLayout)/components/dashboard/ProductPerformance";
import Table1 from "../../components/tables/Table1";

const Tables = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        {/* <ProductPerfomance /> */}
        <Table1 />
      </Grid>
    </Grid>
  );
};

export default Tables;
