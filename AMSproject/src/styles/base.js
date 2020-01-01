// Basis styling voor de app

import { StyleSheet, Dimensions } from 'react-native'

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

export const colors = {
    primary: '#FFC8AE',
    secondary: '#BCDEFD',
    tertiary: '#000000',
}

export const padding = {
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
}

export const fonts = {
    sm: 12,
    md: 18,
    lg: 30,
    primary: 'Roboto'
}

export const borders = {
    primary: '2px solid #000000',
    secondary: '0px'
}