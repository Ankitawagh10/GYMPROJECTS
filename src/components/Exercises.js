import { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { Box,   Stack, Typography } from '@mui/material';
import Pagination from "@mui/material/Pagination";
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
const Exercises = ({exercises, setExercises, bodyPart}) => {
    
    const [currentpage, setCurrentPage ] = useState(1);
    const [exercisesPerPage] = useState(6);




    useEffect(()=>{
        const fetchExercisesData = async () =>{
            let exerciseData=[];
            if(bodyPart == "all"){
                exerciseData = await fetchData(
                   'https://exercisedb.p.rapidapi.com/exercises/',
                exerciseOptions
                );
            }
            else{
                exerciseData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                 exerciseOptions
                );
            }
            setExercises(exerciseData);
        };
        fetchExercisesData();//function call

    },[bodyPart]);
    //pagination
    const indexOfLastExercise = currentpage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    //exercise Data after slicing
    const currentExercise = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise
    );
    
const paginate = (event, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:1300, behaviour:"smooth"})
};
//if no data fetched from the server

if(currentExercise.length==0) return<Loader/>;


  return(
    <Box id="exercises">
        <Typography 
            variant="h4"
            fontWeight="bold"
            sx={{fontSize:{lg:"44px", xs:"30px"}}}
            mb="46px"
            ml="40px"
        
        
        
        
        >Showing Result</Typography>
        <Stack direction="row"
         sx={{gap:{lg: "107px", xs:"50px"}}}
         flexWrap="wrap"
         justifyContent="center"
         >
            {
                currentExercise.map((exercise, id)=>{
                    return <ExerciseCard exercise={exercise} key={id} />
                })
            }
        </Stack>
        <Stack alignItems="center" sx={{mt:{lg:"114px", xs:"70px"}}}>
            {exercises.length> 9 && (
                <Pagination 
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                count={Math.ceil(exercises.length/exercisesPerPage)}
                 page={currentpage}
                 onChange={paginate}
                 size="large"
                 />
            )}
        </Stack>
    </Box>
  )
};

export default Exercises;
