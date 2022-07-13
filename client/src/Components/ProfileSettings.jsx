import React, { useState } from "react";
import {
  Card,
  Avatar,
  Text,
  Group,
  useMantineTheme,
  Modal,
  Space,
  TextInput,
  Input,
  PasswordInput,
} from "@mantine/core";
import InlineEdit from "./InlineEdit";
import { useForm } from "@mantine/form";
import EditProfileForm from "./EditProfileForm";
import { IconAdjustments } from "@tabler/icons";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import PasswordPopOver from "./PasswordPopOver";
import "./ProfileSettings.css";

const ProfileSettings = ({ currentUser }) => {
  const [opened, setOpened] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [editProfile, setEditProfile] = useState({
    username: "username",
    email: "email",
    password: "***********",
  });

  const form = useForm({
    initialValues: {
      username: currentUser.username,
      email: currentUser.email,
      password: "",
    },
  });

  const theme = useMantineTheme();

  return (
    <div style={{ width: 680, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Group
            position="center"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <Avatar color="cyan" radius="xl">
              {/* EX */}
            </Avatar>
          </Group>
        </Card.Section>
        <Group
          position="center"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>EDIT PROFILE</Text>
        </Group>
        <Space />
        <form>
          <input
            type={"text"}
            className="inline-edit-input"
            aria-label="edit-username"
            label={"Edit Username"}
            value={form.values.username}
            {...form.getInputProps("username")}
          />
          <Space h={"md"} />
          <input
            type={"text"}
            className="inline-edit-input"
            aria-label="edit-email"
            label={"Edit Email"}
            value={form.values.email}
            {...form.getInputProps("email")}
          />
          <Space h={"md"} />
          <PasswordPopOver
            formPassword={form.values.password}
            position="bottom"
            target={
              <PasswordInput
                onFocus={() => setShowDescription(true)}
                placeholder="Password"
                // label="Password"
                value={form.values.password}
                {...form.getInputProps("password")}
                description={
                  showDescription
                    ? "Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
                    : ""
                }
              />
            }
          />
        </form>
        {/* <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="User Information"
        >
          <EditProfileForm theme={theme} />
        </Modal>

        <Group position="center">
          <IconAdjustments onClick={() => setOpened(true)} cursor="pointer" />
        </Group> */}
      </Card>
    </div>
  );
};

export default ProfileSettings;
