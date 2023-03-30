import { 
  Container,
  SmallSvgOfImage,
  AreaLabel,
  Description,
  Label
} from "./styles";

import IconSmallImageSvg from "../../assets/icon-small-image.svg";


export default function UploudImage() {
  return (
    <Container>
      <AreaLabel>
        <SmallSvgOfImage
          src={IconSmallImageSvg}
          alt="image simple icon"
        />
        <Label>
          Organization Logo
        </Label>
      </AreaLabel>
      <Description>
        Drop the image here or click to browse.
      </Description>
    </Container>
  )
}
