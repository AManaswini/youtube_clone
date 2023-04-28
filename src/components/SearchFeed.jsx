import {useState,useEffect}from 'react';
import { Box,Typography } from '@mui/material';
import {Videos} from '../components';
import { FetchFromApi } from '../utils/FetchFromApi';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();
  // called when a component initially loads
  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data)=>setvideos(data.items))
    ;
  },[searchTerm]);
  return (
    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' marginBottom={2} sx={{color:'white'}}>
          Search results for <span style={{color:'#F31503'}}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos}/>
    </Box>

  )
}

export default SearchFeed