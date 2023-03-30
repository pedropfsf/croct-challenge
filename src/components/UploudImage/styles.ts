import styled, { css } from "styled-components";

import colors from "../../styles/colors";

export const Container = styled.div`
  width: 550px;
  height: 160px;

  border: 2px dashed ${colors.gray[400]};

  background-color: ${colors.gray[300]};

  border-radius: 8px;

  padding: 32px;
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

export const ContainerErrorImage = styled.div`.
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const ContainerInitialImage = styled.div`
  width: 100%;
  height: 100%;

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

export const ContainerMessageError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;