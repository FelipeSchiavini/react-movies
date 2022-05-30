import React, { useContext } from 'react'
import { Container, LogoContainer } from './styles'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { H3, H4 } from '../../styles/globalutils/headers'
import SvgCamera from '../svg/camera-icon'
import { HSeparator } from '../../styles/globalutils/separators'
import axios from 'axios'

interface HeaderProps {
    toggleTheme(): void;
}

const Header: React.FunctionComponent<HeaderProps> = ({ toggleTheme }): JSX.Element => {
    const { colors, title } = useContext(ThemeContext)

    return(
        <Container>
            <LogoContainer>
                <SvgCamera/>
                <HSeparator/>
                <H3>Welcome To Mario's Movies</H3>
            </LogoContainer>
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={40}
                borderRadius={4}
                handleDiameter={11}
                offColor={shade(0.15, colors.primary)}
                onColor={shade(1, colors.secundary)}
                offHandleColor={'#333'}
                onHandleColor={'#333'}
            />
        </Container>
    )

};


export default Header