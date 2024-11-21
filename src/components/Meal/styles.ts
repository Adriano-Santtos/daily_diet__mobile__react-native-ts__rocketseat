import styled from "styled-components/native";
import { Circle, IconProps } from "phosphor-react-native";

type IsInDietIndicatorProps = {
  isItOnTheDiet: boolean;
} & IconProps;

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-color: black;
  border-width: 1px;
`;

export const DateTime = styled.Text``;

export const Description = styled.Text``;

export const IsInDietIndicator = styled(Circle).attrs<IsInDietIndicatorProps>(
  ({ theme, isItOnTheDiet }) => ({
    name: "cycle",
    weight: "fill",
    color: isItOnTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  }),
)<IsInDietIndicatorProps>``;
