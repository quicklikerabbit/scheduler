import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  return props.days.map(day => (
    <DayListItem
      name={day.name}
      spots={day.spots}
      selected={day.name === props.name}
      setDay={props.setDay}
    />
  ));
}
