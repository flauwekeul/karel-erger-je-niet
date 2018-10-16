import { colorName } from './constants'

export const randomNumber = (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1)) + min

export const translateColor = (color: colorName) => ({
    blue: 'blauw',
    green: 'groen',
    red: 'rood',
    yellow: 'geel',
}[color])

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
