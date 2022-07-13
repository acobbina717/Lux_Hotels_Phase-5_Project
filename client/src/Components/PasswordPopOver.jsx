import React, { useState } from "react";
import { Popover, Progress, Text, Box } from "@mantine/core";

const PasswordPopOver = ({ target, formPassword }) => {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const PasswordRequirement = ({ meets, label }) => {
    return (
      <Text
        color={meets ? "teal" : "red"}
        sx={{ display: "flex", alignItems: "center" }}
        mt={7}
        size="md"
      >
        {meets ? "✓" : "✗"}
        <Box ml={10}>{label}</Box>
      </Text>
    );
  };

  const requirements = [
    { re: /[0-9]/, label: "Includes number" },
    { re: /[a-z]/, label: "Includes lowercase letter" },
    { re: /[A-Z]/, label: "Includes uppercase letter" },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  ];

  const getStrength = (password) => {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(password)) {
        multiplier += 1;
      }
    });
    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
  };

  const strength = getStrength(formPassword);
  const color = strength === 100 ? "teal" : strength > 50 ? "yellow" : "red";

  const checks = requirements.map((requirement, index) => {
    return (
      <PasswordRequirement
        key={index}
        label={requirement.label}
        meets={requirement.re.test(formPassword)}
      />
    );
  });

  return (
    <Popover
      opened={popoverOpened}
      position="bottom"
      placement="start"
      withArrow
      styles={{ popover: { width: "100%" } }}
      trapFocus={false}
      transition="pop-top-right"
      onFocusCapture={() => setPopoverOpened(true)}
      onBlurCapture={() => setPopoverOpened(false)}
      target={target}
    >
      <Progress
        color={color}
        value={strength}
        size={5}
        style={{ marginBottom: 10 }}
      />
      <PasswordRequirement
        label="Includes at least 6 characters"
        meets={formPassword.length > 5}
      />
      {checks}
    </Popover>
  );
};

export default PasswordPopOver;
