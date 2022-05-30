import styled from "styled-components";
import { FontFamily, FontSize, FontWeight, Spacing } from "../constants";

export const H1 = styled.h1`
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  line-height: 30px;
  font-weight: ${FontWeight.Bold};
  margin-bottom: ${Spacing.Small};
  text-align:center;
  margin-top: ${Spacing.Small};
`;

export const H2 = styled.h2`
  font-size: ${FontSize.Medium};
  font-family: ${FontFamily.Primary};
  line-height: 28px;
  font-weight: ${FontWeight.Bold};
  opacity: 0.85;
  text-align:center;
  margin-bottom: ${Spacing.XSmall};
  margin-top: ${Spacing.Small};
`;

export const H3 = styled.h3`
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  line-height: 20px;
  font-weight: ${FontWeight.SemiBold};
  opacity: 0.85;
  text-align:center;
`;

export const H4 = styled.h4`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.secundary};
  font-size: ${FontSize.XXSmall};
  font-family: ${FontFamily.Primary};
  line-height: 15px;
  font-weight: ${FontWeight.SemiBold};
  opacity: 0.85;
`;
