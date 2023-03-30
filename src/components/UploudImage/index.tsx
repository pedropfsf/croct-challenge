import { 
  useCallback, 
  useRef, 
  useState 
} from "react";

import { 
  Container,
  SmallSvgOfImage,
  AreaLabel,
  Description,
  Label,
  InputFile,
  CircleGray,
  WarningImage,
  ContainerErrorImage,
  ContainerInitialImage,
  TextOrange,
  TextLineBottom,
  ContainerMessageError
} from "./styles";

import IconSmallImageSvg from "../../assets/icon-small-image.svg";
import IconWarningImageSvg from "../../assets/icon-warning-image.svg";

type StagesTypes = "error" | "initial" | "withImage";
type EventChangeInput = React.ChangeEvent<HTMLInputElement>;
type EventDragInput = React.DragEvent<HTMLInputElement>;

export default function UploudImage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [valueInputFile, setValueInputFile] = useState("");
  const [currentStages, setCurrentStages] = useState<StagesTypes>("initial");

  const focusInputFile = useCallback(() => {
    inputFileRef.current?.click();
  }, [inputFileRef])

  function handleChangeInputFile({ target }: EventChangeInput) {
    if (!target.files?.length) {
      return 
    }

    const firstFile = target.files[0];

    setValueInputFile(URL.createObjectURL(firstFile));
    setCurrentStages("withImage");
  }

  function handleOnDrop(event: EventDragInput) {
    event.preventDefault();

    const firstFile = event.dataTransfer.files[0];
    
    setValueInputFile(URL.createObjectURL(firstFile));
    setCurrentStages("withImage");
  }

  function configureForOnDrop(event: EventDragInput) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  const stages = {
    "error": (
      <ContainerErrorImage>
        <CircleGray>
          <WarningImage
            src={IconWarningImageSvg}
            alt="warning icon"
          />
        </CircleGray>
        <ContainerMessageError>
          <TextOrange>Sorry, the upload failed.</TextOrange>
          <TextLineBottom>Try again</TextLineBottom>
        </ContainerMessageError>
      </ContainerErrorImage>
    ),
    "initial": (
      <ContainerInitialImage>
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
        <InputFile 
          ref={inputFileRef}
          onChange={handleChangeInputFile}
          onError={() => setCurrentStages("error")}
        />
      </ContainerInitialImage>
    ),
    "withImage": (
      <>
        <h1>Com imagem</h1>
      </>
    )
  }
  
  return (
    <Container 
      draggable={true}
      onClick={focusInputFile}
      onDrop={handleOnDrop}
      onDragOver={configureForOnDrop}
    >
      {stages[currentStages]}
    </Container>
  )
}
