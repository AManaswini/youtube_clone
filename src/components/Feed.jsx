import {useState,useEffect}from 'react';
import { Box,Stack,Typography } from '@mui/material';
import {SideBar,Videos} from '../components';
import { FetchFromApi } from '../utils/FetchFromApi';
const Feed = () => {
  const [videos, setvideos] = useState([])
  const [selectedCategory, setselectedCategory] = useState('New');
  // called when a component initially loads
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=>setvideos(data.items))
    ;
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
          <SideBar
            selectedCategory = {selectedCategory}
            setselectedCategory ={setselectedCategory}
          />
          <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
            Copyright 2022 
          </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' marginBottom={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
        </Typography>

        <Videos videos={videos}/>

      </Box>

    </Stack>
  )
}

export default Feed