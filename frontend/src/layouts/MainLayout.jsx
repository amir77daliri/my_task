import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CacheProvider} from "@emotion/react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import Grid from "@mui/material/Unstable_Grid2"

const theme =  createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto"
    }
})

const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})



const MainLayout = ({children}) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme} >
                <HelmetProvider>
                    <Helmet>
                        <title>تسک-سوکت</title>
                    </Helmet>
                    {/*  Grid System  */}
                    <Grid container sx={{height: "100vh"}}>
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;