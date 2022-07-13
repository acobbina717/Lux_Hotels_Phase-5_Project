import React from "react";
import { Card } from "primereact/card";
import { Button, Grid, Image, Text, Anchor, Space } from "@mantine/core";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { SwiperSlide } from "swiper/react";

const ReservationCard = () => {
  const footer = (
    <Grid justify="space-between" gutter="xl">
      <Grid.Col span={4}>
        <Text weight={700} size="lg">
          $300
        </Text>
        <Text weight={400} size="sm">
          $1500 Total
        </Text>
      </Grid.Col>
      <Grid.Col span={4}>
        <Button label="Reserve">Reserve</Button>
      </Grid.Col>
    </Grid>
  );
  const image = (
    <Image
      src="http://localhost:4000/assets/images/endroit-secret-mxTJm9ojjPE-unsplash.jpg"
      height={180}
    />
  );
  return (
    // <Grid.Col span={3}>
    <Card
      style={{ width: "25em", padding: "1em", marginLeft: "40px" }}
      title={"Hotel Room Name Goes Here"}
      header={image}
      footer={footer}
    >
      <Text>amenities go here</Text>
      <Text>amenities go here</Text>
      <Text>amenities go here</Text>
      <Space h={"md"} />
      <Anchor>
        <Text>More info</Text>
      </Anchor>
    </Card>

    // </Grid.Col>
  );
};

export default ReservationCard;
