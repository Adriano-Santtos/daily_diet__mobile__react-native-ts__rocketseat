import { Plus } from "phosphor-react-native";

import { Header } from "@components/Header";
import { Statistics } from "@components/Statistics";
import { Button } from "@components/Button";
import { MealsOfTheDay } from "@components/MealsOfTheDay";

import { strings } from "../../constants/strings";

import { Container, Title } from "@screens/Home/styles";

export function Home() {
  return (
    <Container>
      <Header />

      <Statistics />

      <Title>{strings.screens.home.title}</Title>
      <Button title={strings.screens.home.addMeal}
icon={Plus} />
      <MealsOfTheDay />
    </Container>
  );
}
