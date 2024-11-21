import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
  border-radius: 15px;

  padding: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Description = styled.Text`
  justify-content: center;

  padding-bottom: 10px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_3};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  width: 100%;

  margin-bottom: -5px;

  flex-direction: row;
  justify-content: flex-end;
`;

export const IconContent = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GREEN_DARK,
  weight: "fill",
}))``;
