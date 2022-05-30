import styled from 'styled-components';
import { shade } from 'polished'
import { FontSize, Spacing } from '../../styles/constants';
import Select from 'react-select';


export const Container = styled.div`
    margin: 2% auto;
    width: 50%;
    background-color: ${(props) => shade(0.05, props.theme.colors.background)};
    border-radius: 3px;
    @media only screen and (max-width: 48em) {
        width: 85%;
    }
`
export const FormStyle = styled.form`
    display: flex;
    padding: 5px;
    flex-direction: column;
    gap: 0.5em;
    padding: ${Spacing.Medium} ${Spacing.Small};
`

export const Button = styled.input`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border: 1px solid ${shade (0.5, '#FFF')};
    border-radius: 4px;
    height: ${Spacing.Large};
    cursor:pointer;
`

export const MultiSelect = styled(Select)`
    font-size: ${FontSize.XXXSmall};
`

export const customStyles = {
    option: (provided: any, state: any) => ({
        borderRadius: '4px',
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        padding: 20
    }),
}
