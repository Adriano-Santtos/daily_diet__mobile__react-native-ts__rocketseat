import React from "react";
import { TouchableOpacityProps } from "react-native";

import { IconProps } from "phosphor-react-native";

import { Container, Icon, Title } from "@components/Button/styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: React.FC<IconProps>;
};

export function Button({ title, icon }: Props) {
  return (
    <Container>
      {icon && <Icon as={icon} />}
      <Title>{title}</Title>
    </Container>
  );
}
