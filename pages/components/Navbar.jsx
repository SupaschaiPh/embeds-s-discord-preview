import { AppBar, Stack, Typography, Box, Toolbar } from "@mui/material";

export default function Navbar(){
  return (
  <AppBar  sx={{bgcolor:"#313338"}} position="fixed" >
    <Toolbar>
      <Stack direction="row" alignItems="center">
        <img src="https://media.discordapp.net/attachments/1118014561778405488/1121390878871785554/icon_clyde_white_RGB.png" height={30} />
        <Typography color="whitesmoke" variant="h5" >Hello</Typography>
      </Stack>

      
    </Toolbar>
  </AppBar>)
}
