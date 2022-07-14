import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Group, Button, Text } from "@mantine/core";
import PasswordPopOver from "./PasswordPopOver";
import { useNavigate } from "react-router-dom";
const SignUpForm = ({ getCurrentUser }) => {
  const navigate = useNavigate();
  const [signUpErrors, setSignUpErrors] = useState(null);
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
        res.json().then(() => {
          getCurrentUser();
          navigate("/");
        });
      } else {
        res.json().then((data) => {
          setSignUpErrors(data.errors);
        });
      }
    });

    form.reset();
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
          <Button type="submit">Sign Up</Button>

          <Text color={"red"}>{signUpErrors}</Text>
        </Group>
      </form>
    </div>
  );
};

export default SignUpForm;
