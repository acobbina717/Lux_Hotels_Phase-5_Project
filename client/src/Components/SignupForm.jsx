import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Group, Button } from "@mantine/core";

const SignupForm = () => {
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          console.log("signed up", data);
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
        <TextInput
          name="email"
          label="Email"
          {...form.getInputProps("email")}
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

export default SignupForm;
