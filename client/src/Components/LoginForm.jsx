import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Group, Button, Text } from "@mantine/core";
import PasswordPopOver from "./PasswordPopOver";

const LoginForm = ({ getCurrentUser }) => {
  const [loginerrors, setLoginErrors] = useState(null);
  //
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log(data);
          getCurrentUser();
        });
      } else {
        res.json().then((data) => {
          setLoginErrors(data.error);
        });
      }
    });
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="username"
          label="Username"
          {...form.getInputProps("username")}
        />
        <PasswordPopOver
          formPassword={form.values.password}
          target={
            <PasswordInput
              placeholder="Password"
              label="Password"
              required
              {...form.getInputProps("password")}
              description="Strong password should include letters in lower and uppercase, at least 1 number, at least 1 special symbol"
            />
          }
        />
        <Group>
          <Button type="submit">Login</Button>
          {loginerrors ? <Text color={"red"}>{loginerrors}</Text> : null}
        </Group>
      </form>
    </div>
  );
};

export default LoginForm;
