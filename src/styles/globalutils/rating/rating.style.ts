import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FontSize, Spacing } from "../../constants";

export const StarIcon = styled(FaStar)<{note: boolean}>`
    color: ${props => props.note ? props.theme.colors.dark : props.theme.colors.white}
`

export const Radio = styled.input`
    display: none;
`
export const Rating = styled.div`
    cursor: pointer;
`

export const RatingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${FontSize.XXXSmall};
    padding-bottom: ${Spacing.Medium}
`