import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = ()=> {
    return(
         <Box 
         sx= {{ mt: { lg:"212px", xs:"70px" }, ml: {sm:"50px"}}}
         p="20px"
         position="relative"
         >
            <Typography
            color="#ff2625" fontWeight="600" fontSize="26px">
            Fitness Club</Typography>
            <Typography
             fontWeight="700" sx={{fontSize:{lg:"44px", xs:"40px"}}}
            mb="23px"
            mt="30px">
            Sweat smile<br/>& Breath
            </Typography>
            <Typography fontSize="22px" lineHeight="35px">
                Check out the most effective Exercises
            </Typography>
            <Button variant="contained" href="#exercises" 
            color="error" sx={{backhgroundcolor:"#ff2625", padding:"10px"}}>Explore exercises
            </Button>
            <Typography color="#ff2625" 
            fontSize="200px" 
            fontWeight="600"
             sx={{opacity:0.1, display: {lg: "block", xs:"none" }}}
             >Exercise
            </Typography>
            <img
                 src={HeroBannerImage}
                 alt="banner"
                 className="hero-banner-img"
            />
        
         </Box>
    );
};
export default HeroBanner;