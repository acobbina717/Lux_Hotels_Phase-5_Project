import React from "react";
import { Card } from "primereact/card";
import { Button, Grid, Image, Text, Space } from "@mantine/core";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
// import { SwiperSlide } from "swiper/react";

const ReservationCard = ({ check_in_date, check_out_date }) => {
  const footer = (
    <Grid justify="space-between" gutter="xl">
      <Grid.Col span={4}>
        <Text weight={700} size="lg">
          {"night rate"}
        </Text>
        <Text weight={400} size="sm">
          {"total rate"}
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button label="Reserve">Reserve</Button>
      </Grid.Col>
    </Grid>
  );
  const image = (
    <Image
      src="https://media.istockphoto.com/vectors/reserved-square-grunge-stamp-vector-id648500426"
      height={180}
    />
  );
  return (
    <Card
      style={{ width: "25em", padding: "1em", marginLeft: "40px" }}
      title={"Hotel Room Name Goes Here"}
      header={image}
      footer={footer}
    >
      <Text>{check_in_date}</Text>
      <Text>{check_out_date}</Text>
      <Space h={"md"} />
      <Button>Cancle Reservation</Button>
    </Card>
  );
};

export default ReservationCard;
