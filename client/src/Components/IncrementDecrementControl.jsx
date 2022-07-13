import React, { useRef } from "react";
import { NumberInput, Group, ActionIcon, Text } from "@mantine/core";
const IncrementDecrementControl = ({
  traveler,
  count,
  setCount,
  totalTravelers,
  isSingleTraveler,
}) => {
  let lowerCaseTraveler = traveler.toLowerCase();
  const operand = useRef();
  const handleChange = (val) => {
    setCount((prevCount) => {
      return {
        ...prevCount,
        [lowerCaseTraveler]: val,
      };
    });
  };

  return (
    <Group>
      <div className="increment-traveler-title">
        <Text size="sm" weight={400}>
          {`${isSingleTraveler}:`}
        </Text>
      </div>
      <ActionIcon
        size={35}
        variant="default"
        onClick={() => operand.current.decrement()}
      >
        -
      </ActionIcon>
      <NumberInput
        hideControls
        disabled={totalTravelers >= 8}
        value={count}
        onChange={handleChange}
        handlersRef={operand}
        max={8}
        min={0}
        step={1}
        styles={{ input: { width: 47, textAlign: "center" } }}
      />
      <ActionIcon
        size={35}
        variant="default"
        onClick={() => operand.current.increment()}
        disabled={totalTravelers >= 8}
      >
        +
      </ActionIcon>
    </Group>
  );
};

export default IncrementDecrementControl;
