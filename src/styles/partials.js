import {css} from "styled-components";

export const colors = {
    main: '#020d2b',
    secondary: '#222d4c',
    cto: '#ff8b0f',
    ctoOnHover: '#c56600'
}

export const flex = (direction, justify, align) => css`
    display: flex;
    flex-direction: ${direction || 'row'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
`

export const fonts = {
    heading: 'clamp(20px, 8em, 40px)',
    subhheading: 'clamp(24px, 6em, 40px)',
    paragraph: 'clamp(14px, 4em, 20px)',
}