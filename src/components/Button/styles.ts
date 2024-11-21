import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;

  min-height: 56px;
  max-height: 56px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    background-color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.RED_DARK,
  weight: "fill",
}))`
  display: flex;
`;
