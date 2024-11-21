import React from "react";

import {
  Container,
  DateTime,
  Description,
  IsInDietIndicator,
} from "@components/Meal/styles";

type Props = {
  date: String;
  description: String;
  isItOnTheDiet: boolean;
};

export function Meal({ date, description, isItOnTheDiet = true }: Props) {
  return (
    <Container>
      <DateTime>{date}</DateTime>
      <Description>{description}</Description>
      <IsInDietIndicator isItOnTheDiet={isItOnTheDiet} />
    </Container>
  );
}
