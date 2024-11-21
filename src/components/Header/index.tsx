import { Container, LogoIcon, ProfilePicture } from "@components/Header/styles";

import logoPng from "@assets/logo.png";
import profilePicture from "@assets/profile.png";

export function Header() {
  return (
    <Container>
      <LogoIcon source={logoPng} />

      <ProfilePicture source={profilePicture} />
    </Container>
  );
}
