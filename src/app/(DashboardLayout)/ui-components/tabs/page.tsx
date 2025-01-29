"use client";
import * as React from "react";
import { Box, Divider } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const COMMON_TAB = [
  {
    value: "1",
    label: "Item One",
    disabled: false,
  },
  {
    value: "2",
    label: "Item Two",
    disabled: false,
  },
  {
    value: "3",
    label: "Item Three",
    disabled: true,
  },
];

const TabS = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          {COMMON_TAB.map((tab, index) => (
            <Tab key={tab.value} label={tab.label} value={String(index + 1)} />
          ))}
        </TabList>
      </Box>
    </TabContext>
  );
};
export default TabS;
