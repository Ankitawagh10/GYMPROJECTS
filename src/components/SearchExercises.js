import {Box, Button, Stack,TextField, Typography} from "@mui/material";
import { useState } from "react";

const SearchExercises = ({setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch]= useState("");
  const handleClick = ()=>{
    setBodyPart(search);

  };
  console.log(bodyPart);
  
    return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
       <Typography
           fontWeight={700}
           sx={{fontSize: {lg:"44px", xs:"30px"}}}>
           Awesome Exercise for you
           <br/>
           Should Know
       </Typography>
       <Box position="relative" mb="72px">
          <TextField 
              sx={{input : {fontWeight:"700px",
           border:"none",  
           borderRadius:"0px",
           },
           width:{lg:"1000px", xs:"350px"},
           }} 
            placeholder="Search Exercises"
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
           />
          <Button
             className="search-btn"
             sx={{bgcolor:"#ff2625", color:"#fff", textTransform:"none",
              width:{lg: "175", xs:"80px"},
              fontSize:{lg:"20px", xs:"14px"},
              height:"56px",
              position:"absolute",
              right:"0",
              }}

          onClick={handleClick}
          >Search</Button>
       </Box>

    </Stack>
      
   
  );
};

export default SearchExercises;
