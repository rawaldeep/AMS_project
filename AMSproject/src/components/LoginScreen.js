//Login Screen

import React, { Component } from 'react';
import { colors, fonts, padding, dimensions } from '../styles/base';
import styled from 'styled-components';
import SocialButton from '../custom-components/SocialButton';

export default class Loginscreen extends Component {

    render() {
        return (
            <Container>
                <SocialButton onPress={this.onPress} text="facebook" textColor={colors.tertiary} backgroundColor={colors.primary} />
                <SocialButton onPress={this.onPress} text="gmail" textColor={colors.tertiary} backgroundColor={colors.secondary} />
            </Container>
        )
    }
}

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
