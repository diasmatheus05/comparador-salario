"use client";

import { Tabs as MuiTabs, Paper, Tab } from "@mui/material";
import { useState } from "react";

export function Tabs({
  options,
  initialOption = 0,
  onChange = () => {},
}: {
  options: string[];
  initialOption?: number;
  onChange?: (option: string, index: number) => void;
}) {
  const [value, setValue] = useState(initialOption);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    onChange(options[newValue], newValue);
  };

  return (
    <Paper>
      <MuiTabs value={value} onChange={handleChange} variant="fullWidth">
        {options.map((option, index) => {
          return <Tab key={index} label={option} />;
        })}
      </MuiTabs>
    </Paper>
  );
}
