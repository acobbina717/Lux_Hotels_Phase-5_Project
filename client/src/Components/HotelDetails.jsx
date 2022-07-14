import React, { useState } from "react";
import {
  Container,
  Title,
  Button,
  Group,
  Space,
  Drawer,
  Textarea,
  Paper,
  Box,
  Center,
  List,
  ThemeIcon,
} from "@mantine/core";
import ReviewCard from "./ReviewCard";
import "./HotelDetails.css";
import { Tabs } from "@mantine/core";
import {
  IconX,
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconBuildingSkyscraper,
  IconMapPin,
  IconDoorEnter,
  IconDoorExit,
} from "@tabler/icons";
import { useForm } from "@mantine/form";

const HotelDetails = ({
  id,
  currentHotel,
  currentUser,
  getCurrentHotel,
  getCurrentUser,
  dateRange,
  formatDate,
}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openReviewDrawer, setOpenReviewDrawer] = useState(false);
  const [openReservationDrawer, setOpenReservationDrawer] = useState(false);
  const form = useForm({
    initialValues: {
      review: "",
    },
  });

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleSubmit = form.onSubmit((values) => {
    const reviewvalues = {
      review: values.review,
      hotel_id: parseInt(id),
      user_id: currentUser.id,
      username: currentUser.username,
    };

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewvalues),
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          getCurrentHotel();
          getCurrentUser();
        });
      } else {
        res.json().then((data) => {
          console.log(data);
        });
      }
    });
    form.reset();
    setOpenReviewDrawer(false);
  });
  // console.log("Detail PAge", dateRange);
  const [checkIn, checkOut] = dateRange;

  console.log("Detail PAge", formatDate(checkIn));

  const confimReservation = () => {
    fetch("/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hotel_id: parseInt(id),
        user_id: currentUser.id,
        guest_name: currentUser.username,
        check_in_date: formatDate(checkIn),
        check_out_date: formatDate(checkOut),
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then(() => {
          console.log("Reservation Confirmed");
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <IconX className="close" onClick={() => setOpen(false)} />
              <IconArrowNarrowLeft
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={photos[slideNumber].src}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <IconArrowNarrowRight
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <Tabs color="dark" variant="pills" tabPadding="lg">
              <Tabs.Tab label="Overview">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle">{currentHotel.name}</h1>
                  <span className="hotelRating">{"starRating"}</span>
                  <p className="hotelDesc">{"description"}</p>
                </div>
              </Tabs.Tab>
              <Tabs.Tab label="Amenities">Amenities</Tabs.Tab>
              {/* <Tabs.Tab label="Rooms">
                <HotelRoomList />
              </Tabs.Tab> */}
              <Tabs.Tab label="Reviews">
                <Container>
                  <Group position="right" mr={20} mb={5}>
                    <Button onClick={() => setOpenReviewDrawer(true)}>
                      Add A Review
                    </Button>
                  </Group>
                  {currentHotel.reviews?.map((review) => {
                    return (
                      <ReviewCard
                        key={review.id}
                        reviews={review.review}
                        username={review.username}
                      />
                    );
                  })}
                  <Drawer
                    opened={openReviewDrawer}
                    onClose={() => setOpenReviewDrawer(false)}
                    position="bottom"
                    size="sm"
                  >
                    <Title align="center" order={2}>
                      Add a Review
                    </Title>
                    <form onSubmit={handleSubmit}>
                      <Textarea {...form.getInputProps("review")} />
                      <Group position="right">
                        <Button type="submit">Submit</Button>
                      </Group>
                    </form>
                  </Drawer>
                </Container>
              </Tabs.Tab>
            </Tabs>

            <Space />

            <Container>
              <div className="hotelDetails">
                <div className="hotelDetailsPrice">
                  <h1>Resevere This Hotel Today!</h1>
                  <span>{currentHotel.location}</span>
                  <h2>
                    <b>{currentHotel.rate}</b> per night
                  </h2>
                  <Drawer
                    opened={openReservationDrawer}
                    onClose={() => setOpenReservationDrawer(false)}
                    position="top"
                    size="md"
                  >
                    <Title align="center" order={2}>
                      Confirm Reservation
                    </Title>
                    <Box>
                      <Space h={"lg"} />
                      <Center>
                        <Paper>
                          <List>
                            <List.Item
                              icon={
                                <ThemeIcon>
                                  <IconBuildingSkyscraper />
                                </ThemeIcon>
                              }
                            >
                              <b>
                                Guest: {currentUser ? currentUser.username : ""}{" "}
                              </b>
                            </List.Item>
                            <List.Item
                              icon={
                                <ThemeIcon>
                                  <IconBuildingSkyscraper />
                                </ThemeIcon>
                              }
                            >
                              <b>
                                Hotel: {currentHotel ? currentHotel.name : ""}{" "}
                              </b>
                            </List.Item>
                            <List.Item
                              icon={
                                <ThemeIcon>
                                  <IconMapPin />
                                </ThemeIcon>
                              }
                            >
                              <b>
                                Address:{" "}
                                {currentHotel ? currentHotel.location : ""}
                              </b>
                            </List.Item>
                            <List.Item
                              icon={
                                <ThemeIcon>
                                  <IconDoorEnter />
                                </ThemeIcon>
                              }
                            >
                              <b>
                                Check In:
                                {dateRange ? ` ${formatDate(checkIn)}` : ""}
                              </b>
                            </List.Item>
                            <List.Item
                              icon={
                                <ThemeIcon>
                                  <IconDoorExit />
                                </ThemeIcon>
                              }
                            >
                              <b>
                                Check Out:
                                {dateRange ? ` ${formatDate(checkOut)}` : ""}
                              </b>
                            </List.Item>
                          </List>
                          <Space h={"xl"} />
                          <Group position="center">
                            <Button
                              onClick={() => {
                                confimReservation();
                              }}
                            >
                              Confirm
                            </Button>
                          </Group>
                        </Paper>
                      </Center>
                    </Box>
                  </Drawer>
                  <Button onClick={() => setOpenReservationDrawer(true)}>
                    Reserve
                  </Button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
