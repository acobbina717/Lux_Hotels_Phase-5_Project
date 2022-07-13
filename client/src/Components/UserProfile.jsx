import { Button, Tabs, Text } from "@mantine/core";
import React from "react";
import ProfileSettings from "./ProfileSettings";
import Reviews from "./ReviewCard";

import { IconMessage, IconSettings, IconCalendarEvent } from "@tabler/icons";
import ReviewCard from "./ReviewCard";

const UserProfile = ({ currentUser }) => {
  console.log(currentUser);
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
              key={review._id}
              reviews={review.review}
              username={currentUser.username}
            />
          ))}
        </Tabs.Tab>

        <Tabs.Tab
          icon={<IconCalendarEvent strokeWidth={1.25} />}
          label="Reservations"
        ></Tabs.Tab>
      </Tabs>
    </>
  );
};

export default UserProfile;
