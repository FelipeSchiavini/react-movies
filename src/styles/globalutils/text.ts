import styled from "styled-components";
import { FontFamily, FontSize, FontWeight } from "../constants";

export const Text = styled.p`
    color: ${props => props.theme.colors.dark};
    font-size: ${FontSize.XXXSmall};
    font-family: ${FontFamily.Primary};
    line-height: 12px;
    font-weight: ${FontWeight.Normal};
`;