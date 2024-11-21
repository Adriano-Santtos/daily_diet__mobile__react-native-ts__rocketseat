import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;

  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
  margin-top: 30px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_3};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
