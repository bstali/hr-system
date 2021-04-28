import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#2d34b7',
            light: '#14196b',
            dark: '#14196b',
        },
        secondary: {
            main: '#b5ecfb',
            light: '#61dafb',
            dark: '#21a1c4',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#ffffff',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                padding: '20px 10px',
                margin: '10px',
                backgroundColor: '#fff', // 5d737e
            },
        },
        MuiButton: {
            root: {
                margin: '5px',
            },
        },
    },
});
export default theme;