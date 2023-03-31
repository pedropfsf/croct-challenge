import { 
  useCallback, 
  useEffect, 
  useMemo, 
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
  AreaWithImage,
  InitialImage,
  TextOrange,
  TextLineBottom,
  AreaMessageError,
  ImageSelected,
  AreaControlImage,
  TextControlImage,
  RangeControlZoomImage,
  ButtonSaveImage
} from "./styles";

import IconSmallImageSvg from "../../assets/icon-small-image.svg";
import IconWarningImageSvg from "../../assets/icon-warning-image.svg";

type StagesTypes = "error" | "initial" | "withImage" | "final";

type EventChangeInput = React.ChangeEvent<HTMLInputElement>;
type EventDragInput = React.DragEvent<HTMLInputElement>;

export default function UploudImage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const imageSelectedRef = useRef<HTMLImageElement>(null);
  const [valueInputFile, setValueInputFile] = useState("");
  const [currentStages, setCurrentStages] = useState<StagesTypes>("initial");
  const [valueResizeImage, setValueResizeImage] = useState("1");
  let [valueX, setValueX] = useState(0); 
  let [valueY, setValueY] = useState(0); 
  // const [valuePositionImage, setValuePositionImage] = useState({
  //   x: 0,
  //   y: 0,
  // })

  const focusInputFile = useCallback(() => {
    inputFileRef.current?.click();
  }, [inputFileRef])

  function handleChangeInputFile({ target }: EventChangeInput) {
    if (!target.files?.length) {
      return 
    }
    setValueInputFile("");

    const firstFile = target.files[0];

    setValueInputFile(URL.createObjectURL(firstFile));
    setCurrentStages("withImage");
  }

  function handleOnDrop(event: EventDragInput) {
    event.preventDefault();
    setValueInputFile("");

    const firstFile = event.dataTransfer.files[0];
    
    setValueInputFile(URL.createObjectURL(firstFile));
    setCurrentStages("withImage");
  }

  function configureForOnDrop(event: EventDragInput) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  function handleError() {
    setCurrentStages("error");
  }

  function handleChangeControlResizeImage({ target }: EventChangeInput) {
    setValueResizeImage(target.value);
  }

  function handleClickSaveImage() {
    setCurrentStages("final");
  }
  
  useEffect(() => {
    if (currentStages === "withImage" && imageSelectedRef.current) {
      const elementImage = imageSelectedRef.current;

      function setDimensions({ movementX, movementY }: MouseEvent) {
        if (movementX > 0) {
          setValueX(valueX += 1);
        } else if (movementX < 0) {
          setValueX(valueX -= 1);
        }

        if (movementY > 0) {
          setValueY(valueY += 1);
        } else if (movementY < 0) {
          setValueY(valueY -= 1);
        }
      }
      
      elementImage.addEventListener("mousedown", () => {
        elementImage.addEventListener("mousemove", setDimensions);
      });
      
      elementImage.addEventListener("mouseup", () => {
        elementImage.removeEventListener("mousemove", setDimensions);
      });
      
      elementImage.addEventListener("mouseout", () => {
        elementImage.removeEventListener("mousemove", setDimensions);
      });
    }
    
  }, [currentStages]);

  if (currentStages === "initial") {
    return (
      <Container 
        isCursorPointer={true}
        draggable={true}
        onClick={focusInputFile}
        onDrop={handleOnDrop}
        onDragOver={configureForOnDrop}
      >
        <InitialImage>
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
            onError={handleError}
          />
        </InitialImage>
      </Container>
    )
  }

  if (currentStages === "error") {
    return (
      <Container 
        draggable={true}
        onClick={focusInputFile}
        onDrop={handleOnDrop}
        onDragOver={configureForOnDrop}
      >
        <AreaWithImage>
          <CircleGray>
            <WarningImage
              src={IconWarningImageSvg}
              alt="warning icon"
            />
          </CircleGray>
          <AreaMessageError>
            <TextOrange>Sorry, the upload failed.</TextOrange>
            <TextLineBottom>Try again</TextLineBottom>
          </AreaMessageError>
        </AreaWithImage>
      </Container>
    )
  }

  if (currentStages === "withImage") {
    return (
      <Container>
        <AreaWithImage>
          <CircleGray>
            <ImageSelected
              draggable={false}
              horizontal={String(valueX)}
              vertical={String(valueY)}
              ref={imageSelectedRef}
              scale={valueResizeImage}
              src={valueInputFile}
              alt="Image"
            />
          </CircleGray>
          <AreaControlImage>
            <TextControlImage>Crop</TextControlImage>
            <RangeControlZoomImage
              value={valueResizeImage}
              onChange={handleChangeControlResizeImage}
              min="0.5"
              max="3.5"
              step="0.1"
            />
            <ButtonSaveImage
              onClick={handleClickSaveImage}
            >
              Save
            </ButtonSaveImage>
          </AreaControlImage>
        </AreaWithImage>
      </Container>
    )
  }

  return (
    <Container
      isCursorPointer={true}
      draggable={true}
      onClick={focusInputFile}
      onDrop={handleOnDrop}
      onDragOver={configureForOnDrop}
    >
      <AreaWithImage>
        <CircleGray>
          <ImageSelected
            draggable={false}
            horizontal={String(valueX)}
            vertical={String(valueY)}
            ref={imageSelectedRef}
            scale={valueResizeImage}
            src={valueInputFile}
            alt="Image"
          />
        </CircleGray>
        <InitialImage>
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
            onError={handleError}
          />
        </InitialImage>
      </AreaWithImage>
    </Container>
  )
}
