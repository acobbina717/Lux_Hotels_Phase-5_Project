import { Input } from "@mantine/core";
import React from "react";

const InlineEdit = ({ label }) => {
  return <Input aria-label={label} label={label} />;
};

export default InlineEdit;
