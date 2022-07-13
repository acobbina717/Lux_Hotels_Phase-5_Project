import { Button, Container, Group, Avatar, Menu, Divider } from "@mantine/core";
import { IconLogout, IconHome, IconSettings, IconTrash } from "@tabler/icons";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const NavBar = ({ profilePath, handleLogout, deleteAccount }) => {
  return (
    <Container fluid={true}>
      <Group position="apart" size="xl">
        <Link to="/" style={{ color: "black" }}>
          <IconHome
            strokeWidth={1.5}
            width={32}
            height={32}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <Menu
          style={{ cursor: "pointer" }}
          withArrow={true}
          control={<Avatar color="dark" radius="xl" size="md" />}
        >
          <Link to={profilePath}>
            <Menu.Item icon={<IconSettings />}>Profile</Menu.Item>
          </Link>
          <Menu.Item icon={<IconLogout />} onClick={handleLogout}>
            Logout
          </Menu.Item>
          <Divider />
          <Menu.Item color={"red"} icon={<IconTrash />} onClick={deleteAccount}>
            Delete Account
          </Menu.Item>
        </Menu>
      </Group>
    </Container>
  );
};

export default NavBar;
