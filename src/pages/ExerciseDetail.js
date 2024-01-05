import { Box, Typography, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() =>{
    const fetchExercisesData = async () =>{
      const exerciseDbUrl= "https://exercisedb.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData);
    };
    fetchExercisesData();
  },[]);
  //if no data fetched from the server

if (Object.keys(exerciseDetail)==0) return<Loader/>;

  return(
    <Box sx={{ mt: { lg : "96px", xs: "60px" } }}>
         <Stack
             gap="60px"
             sx={{
                 flexDirection:{
                  lg: "row",
                  p:"20px",
                  alignItems:"center",
                 },
             }}>
          <img alt="noimage" src= {exerciseDetail.gifUrl} />
          <Stack>
          <Typography
             sx={{fontSize: {lg: "64px", xs:"30px"}}}
             fontWeight={700}
             textTransform="capitalize"
          
          >{exerciseDetail.name}</Typography>
          <Typography sx={{fontStyle:{lg:"24px", xs:"18px"}}}
          color="#4f4c4c"
          >
          {exerciseDetail.name} is best exercise to target your{exerciseDetail.target}
          </Typography>
          
              <Stack>
                  <img 
                    src={exerciseDetail.gifUrl} 
                    alt={exerciseDetail.bodyPart} 
                     style={{width:"60px", height:"50px"}}
              />
              </Stack>
              </Stack>
        
         </Stack>
    </Box>
  );
};



export default ExerciseDetail;
