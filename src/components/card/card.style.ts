import styled from 'styled-components';
import { shade } from 'polished'
import { Spacing, FontWeight, Border, MediaWidth, FontSize } from '../../styles/constants';
import Select from 'react-select';
import { H4 } from '../../styles/globalutils/headers';


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 150px;
    cursor: pointer;
    border-radius: ${Border.Radius};
    @media only screen and (max-width: ${MediaWidth.tabletMax}px) {
        width: 120px;
        height: 210px;
    }
    @media only screen and (max-width: ${MediaWidth.phoneBig}px) {
        width: 100px;
        height: 170px;
    }
    `
    
export const Image = styled.img`
    width: 95%;
    margin-top: ${Spacing.Small};
    padding: 5px;
    opacity: 0.7;
    transition: 1s;
    margin-bottom: 16px;
    &:hover {
        padding: 3px;
        opacity: 1;
        transform: scale(1.09, 1.09);
        z-index:3;
    }
`

export const CardTitle = styled(H4)`
    position: absolute;
    bottom: 10%;
    font-weight: ${FontWeight.Normal};
    z-index:2;
    width: 150px;
    border-top-left-radius: ${Border.Radius};
    border-top-right-radius: ${Border.Radius};
    opacity: 0.95;
    padding: 1em 3px;
    background-color:  ${props => props.theme.colors.dark};
    @media only screen and (max-width: ${MediaWidth.tabletMax}px) {
        width: 120px;
    }
    @media only screen and (max-width: ${MediaWidth.phoneBig}px) {
        display:none
    }
`

