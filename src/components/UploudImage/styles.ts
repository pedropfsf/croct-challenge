import styled, { css } from "styled-components";

import colors from "../../styles/colors";

const stylesTextFontNormal = css`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
`;

export const Container = styled.div`
  border: 2px dashed ${colors.gray[400]};

  background-color: ${colors.gray[300]};

  border-radius: 8px;

  padding: 64px 120px;
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

  ${stylesTextFontNormal}
`;

export const Description = styled.span`
  color: ${colors.gray[800]};

  ${stylesTextFontNormal}

  margin-top: 8px;

  display: block;
`;