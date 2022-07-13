import React from "react";
import { Paper, Avatar, Text, Container, Space, Textarea } from "@mantine/core";

const ReviewCard = ({ reviews, username }) => {
  // let moment = require("moment-timezone");
  // console.log(moment().tz("America/New_York").format("MMMM Do YYYY, h:mm a"));
  return (
    <>
      <Container>
        <Paper shadow="xl" radius="lg" p="xl" withBorder>
          <Avatar
            radius="xl"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
          />
          <Text weight={500}>{username}</Text>
          {/* {moment().tz("America/New_York").format("MMMM Do YYYY, h:mm a")} */}
          <Space h="sm" />
          <Text>{reviews}</Text>
        </Paper>
        <Space h="lg" />
      </Container>
    </>
  );
};

export default ReviewCard;
