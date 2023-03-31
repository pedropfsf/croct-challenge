import styled, { css } from "styled-components";

import colors from "../../styles/colors";

const stylesCursorPointer = css`
  cursor: pointer;
`;

type ContainerProps = {
  isCursorPointer?: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 550px;
  height: 160px;

  border: 2px dashed ${colors.gray[400]};

  background-color: ${colors.gray[300]};

  border-radius: 8px;

  padding: 32px;

  ${props => props.isCursorPointer && stylesCursorPointer};
`;

export const SmallSvgOfImage = styled.img`
  width: 16px;
`;

export const AreaLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 100%;
`;

export const Label = styled.strong`
  color: ${colors.gray[900]};

  font-size: 14px;
`;

export const Description = styled.span`
  color: ${colors.gray[800]};

  font-size: 14px;

  margin-top: 8px;

  display: block;
`;

export const InputFile = styled.input.attrs({
  type: "file"
})`
  display: none;
`;

export const AreaWithImage = styled.div`.
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const InitialImage = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CircleGray = styled.div`
  width: 113px;
  height: 113px;

  background-color: ${colors.gray[380]};  

  border-radius: 113px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 32px;

  overflow: hidden;

  position: relative;
`;

export const WarningImage = styled.img`
  width: 20px;
`;

export const TextOrange = styled.span`
  font-size: 16px;
  font-weight: 400;

  color: ${colors.orange[500]};
`;

export const TextLineBottom = styled.span`
  font-size: 16px;
  font-weight: 500;

  text-decoration: underline;

  color: ${colors.gray[950]};
`;

export const AreaMessageError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

type ImageSelectedProps = {
  scale?: string;
  horizontal?: string;
  vertical?: string;
}

export const ImageSelected = styled.img<ImageSelectedProps>`
  width: 100%;

  object-fit: contain;

  z-index: 1;
  
  position: absolute;
  left: ${props => Number(props.horizontal) ?? 0}px;
  right: ${props => -Number(props.horizontal)}px;
  top: ${props => Number(props.vertical) ?? 0}px;
  bottom: ${props => -Number(props.vertical)}px;

  transform: scale(${props => props.scale ?? 1});
  transform-origin: center;

  margin: auto;
`;

export const AreaControlImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;

  height: 100%;
`;

export const TextControlImage = styled.span`
  align-self: flex-start;

  color: ${colors.gray[800]};
  
  font-size: 16px;
`;

export const RangeControlZoomImage = styled.input.attrs({
  type: "range"
})`
  align-self: stretch
`;

export const ButtonSaveImage = styled.button`
  align-self: flex-end;

  border: none;
  outline: none;

  border-radius: 16px;

  font-weight: 500;

  color: ${colors.white};

  padding: 8px 32px;

  background-color: ${colors.gray[900]};

  cursor: pointer;

  transition: filter 250ms;

  &:hover {
    filter: brightness(0.8);
  }
`;