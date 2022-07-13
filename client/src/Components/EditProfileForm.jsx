import React from "react";
import { Card, Group, TextInput } from "@mantine/core";

const EditProfileForm = ({ theme }) => {
  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <TextInput placeholder="Name" label="Full Name" />
        </Group>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <TextInput placeholder="Email" label="Email" />
        </Group>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <TextInput placeholder="Username" label="Username" />
        </Group>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <TextInput placeholder="Password" label="8-12 Characters" />
        </Group>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <TextInput placeholder="MM-DD-YYYY" label="Date of Birth" />
        </Group>
        {/* <UserUpdateButton /> */}
      </Card>
    </div>
  );
};

export default EditProfileForm;
