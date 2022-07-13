import React, { useState } from "react";
import { Button, Container, Input, Popover } from "@mantine/core";
import { IconBed, IconCalendar, IconUsers } from "@tabler/icons";
import IncrementDecrementControl from "./IncrementDecrementControl";
import "./SearchBar.css";
import { DateRangePicker } from "@mantine/dates";
const SearchBar = ({
  setDestination,
  setDateRange,
  dateRange,
  destination,
}) => {
  const [openedPopover, setOpenedPopover] = useState(false);

  const [travelerCount, settravelerCount] = useState({
    adults: 2,
    children: 0,
  });

  const totalTravelers = travelerCount.adults + travelerCount.children;
  const isSingleTraveler = {
    singleAdult: travelerCount.adults === 1 ? "Adult" : "Adults",
    singleChild: travelerCount.children === 1 ? "Child" : "Children",
  };

  return (
    <Container className="search-bar">
      <Input
        className="search-input"
        placeholder="Where are you going"
        icon={<IconBed />}
        width="500px"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <DateRangePicker
        icon={<IconCalendar />}
        placeholder="Check-in - Check-out"
        // value={dateRange}
        onChange={(value) => setDateRange(value)}
        minDate={new Date()}
      />

      <Input
        onClick={() => setOpenedPopover((o) => !o)}
        readOnly
        placeholder={`${travelerCount.adults} ${isSingleTraveler.singleAdult}  • ${travelerCount.children}  ${isSingleTraveler.singleChild}`}
        // value=
        icon={<IconUsers />}
      />
      <Popover
        opened={openedPopover}
        onClose={() => setOpenedPopover(false)}
        position="bottom"
        placement="end"
        withCloseButton
        transition="pop-top-left"
      >
        <IncrementDecrementControl
          traveler="Adults"
          count={travelerCount.adults}
          setCount={settravelerCount}
          totalTravelers={totalTravelers}
          isSingleTraveler={isSingleTraveler.singleAdult}
          min
        />
        <IncrementDecrementControl
          traveler="Children"
          count={travelerCount.children}
          setCount={settravelerCount}
          totalTravelers={totalTravelers}
          isSingleTraveler={isSingleTraveler.singleChild}
        />
      </Popover>

      {/* <Button>Search</Button> */}
    </Container>
  );
};

export default SearchBar;
