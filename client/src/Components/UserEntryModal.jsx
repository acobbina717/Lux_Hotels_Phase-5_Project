import React from "react";
import { Modal, Group, Button } from "@mantine/core";
import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const UserEntryModal = ({ setUser, getCurrentUser, navigate }) => {
  const [opened, setOpened] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  return (
    <div>
      {" "}
      <Modal opened={opened} onClose={() => setOpened(false)}>
        {hasAccount ? (
          <LoginForm
            setUser={setUser}
            getCurrentUser={getCurrentUser}
            navigate={navigate}
          />
        ) : (
          <SignUpForm
            setUser={setUser}
            getCurrentUser={getCurrentUser}
            navigate={navigate}
          />
        )}
        <p
          style={{ textDecoration: "underline" }}
          onClick={() => setHasAccount(() => !hasAccount)}
        >
          {hasAccount ? "Don't have an account?" : "Already have an account?"}
        </p>
      </Modal>
      <Group>
        <Button onClick={() => setOpened(true)}>Login</Button>
      </Group>
    </div>
  );
};

export default UserEntryModal;
