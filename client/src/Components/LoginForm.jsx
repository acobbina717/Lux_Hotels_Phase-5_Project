import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Group, Button } from "@mantine/core";

const LoginForm = () => {
  const [errors, setErrors] = useState({});
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
          console.log("logged in", data);
        });
      } else {
        res.json().then((errors) => {
          console.log(errors);
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
        <PasswordInput
          name="password"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Group>
          <Button type="submit">Sign Up</Button>
        </Group>
      </form>
    </div>
  );
};

export default LoginForm;
