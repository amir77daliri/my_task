import {Typography, Box, Divider, Avatar, Hidden, Tabs, Tab} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors"

import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Sidebar = ({value, handleChange}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "area-controls": `tabpanel-${index}`
        }
    }
    return (
        <Grid  xs={0} sm={0} md={3} lg={2} xl={2}  sx={{backgroundColor: grey[150], borderRight: "0.5px solid black"}} >
            <Box sx={{justifyContent: "center", textAlign: "center"}}  mt={2}>
                <Hidden mdDown>
                    <Avatar src={require("../assets/94313751.jfif")} sx={{width: 200, height: 200, margin: "auto"}}/>
                    <Typography variant="h5" >امیرحسین دلیری</Typography>
                </Hidden>

                <Divider sx={{mt: 3}} variant="middle" color="whitesmoke"/>

                {/* Tabs */}
                <Tabs orientation="vertical" variant="scrollable" scrollbutton="auto" allowScrollButtonsMobile
                      value={value}
                      onChange={handleChange}
                >
                    <Tab {...tabProps(0)} label="جدول ارزها" icon={<CurrencyExchangeIcon />} iconPosition="start" />
                    <Tab {...tabProps(1)} label="ساخت ارز جدید" icon={<AddCircleOutlineIcon />} iconPosition="start" />
                </Tabs>
            </Box>

        </Grid>
    )
}

export default Sidebar;