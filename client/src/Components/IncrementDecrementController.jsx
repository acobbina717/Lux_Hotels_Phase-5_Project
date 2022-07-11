import React, { useState, useRef } from "react";
import { NumberInput, Group, ActionIcon } from "@mantine/core";

const IncrementDecrementController = ({
  isSingleTraveler,
  setTravelerCount,
  travelerCount,
}) => {
  // const [value, setValue] = useState(0);
  const handlers = useRef();
  return (
    <Group spacing={5}>
      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current.decrement()}
      >
        –
      </ActionIcon>

      <NumberInput
        label={`${isSingleTraveler}:`}
        hideControls
        value={travelerCount}
        onChange={(val) => setTravelerCount(val)}
        handlersRef={handlers}
        max={8}
        step={1}
        styles={{ input: { width: 54, textAlign: "center" } }}
      />

      <ActionIcon
        size={42}
        variant="default"
        onClick={() => handlers.current.increment()}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default IncrementDecrementController;
