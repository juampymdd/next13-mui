'use client'

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline/CssBaseline"
import { NextAppDirEmotionCacheProvider } from "./EmotionCache"
const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#1e88e5',
        },
        secondary: {
            main: '#ff4081',
        },
    },
}

const theme = createTheme(themeOptions)

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
      <NextAppDirEmotionCacheProvider options={{ key: 'null' }}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    )
}