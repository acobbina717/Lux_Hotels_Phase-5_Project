import React, { useState } from "react";
import { DateRangePicker } from "@mantine/dates";
import { TextInput, Input, Group, Button } from "@mantine/core";
import IncrementDecrementController from "./IncrementDecrementController";
import { IconBed, IconCalendar } from "@tabler/icons";
const SearchBar = () => {
  const [destination, setDestination] = useState("");
  console.log("destination", destination);
  const [dateRange, setDateRange] = useState([]);
  console.log("dateRange", dateRange);
  const [travelerAndRoomCount, setTravelerAndRoomCount] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  console.log("travelers", travelers);
  const totalTravelers = travelers.adult + travelers.child;
  console.log("totalTravelers", totalTravelers);
  const isSingleAdultTraveler = travelers.adult === 1 ? "adult" : "adults";
  console.log("isSingleAdultTraveler", travelers.adult, isSingleAdultTraveler);
  const isSingleChildTraveler = travelers.child === 1 ? "child" : "children";
  console.log("isSingleChildTraveler", travelers.child, isSingleChildTraveler);
  const isSingleRoom = travelers.room === 1 ? "room" : "rooms";
  console.log("isSingleRoom", travelers.room, isSingleRoom);
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerSearch">
          <div className="headerSearchItem">
            <TextInput
              icon={<IconBed />}
              placeholder="Where are you going?"
              value={destination}
              onChange={(destination) => setDestination(destination)}
            />
          </div>
          <div className="headerSearchItem">
            <DateRangePicker
              icon={<IconCalendar />}
              label="Booking Dates"
              placeholder="Chekck In - Check Out"
              value={dateRange}
              onChange={(dateRange) => setDateRange(dateRange)}
            />
          </div>
          <div className="headerSearchItem">
            <Input icon={<IconUser />}>
              <IncrementDecrementController
                isSingleTraveler={isSingleAdultTraveler}
                travelerCount={travelerAndRoomCount.adult}
                setTravelerCount={setTravelerAndRoomCount}
              />
              <IncrementDecrementController
                isSingleTraveler={isSingleChildTraveler}
                travelerCount={travelerAndRoomCount.child}
                setTravelerCount={setTravelerAndRoomCount}
              />
            </Input>
          </div>
          <div className="headerSearchItem">
            <Group>
              <Button className="headerBtn">Search</Button>
            </Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
