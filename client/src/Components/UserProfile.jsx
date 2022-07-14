import { Tabs, Text } from "@mantine/core";
import React from "react";
import ProfileSettings from "./ProfileSettings";
import { IconMessage, IconSettings, IconCalendarEvent } from "@tabler/icons";
import ReviewCard from "./ReviewCard";
import ReservationCard from "./ReservationCard";

const UserProfile = ({ currentUser }) => {
  return (
    <>
      <Text align="center">
        {currentUser ? `Welcome ${currentUser.username}` : null}
      </Text>
      <Tabs grow>
        <Tabs.Tab
          icon={<IconSettings strokeWidth={1.25} />}
          label="Profile Settings"
        >
          {<ProfileSettings currentUser={currentUser} />}
        </Tabs.Tab>
        <Tabs.Tab icon={<IconMessage strokeWidth={1.25} />} label="My Reviews">
          {currentUser.reviews?.map((review) => (
            <ReviewCard
              key={review.id}
              reviews={review.review}
              username={currentUser.username}
            />
          ))}
        </Tabs.Tab>

        <Tabs.Tab
          icon={<IconCalendarEvent strokeWidth={1.25} />}
          label="Reservations"
        >
          {currentUser.reservations?.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              check_in_date={reservation.check_in_date}
              check_out_date={reservation.check_out_date}
              reservation={reservation}
            />
          ))}
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default UserProfile;
