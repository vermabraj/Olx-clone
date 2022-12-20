import { Card, CardHeader, Box, CardFooter,Flex,SimpleGrid,Heading,Text,Image, textDecoration } from '@chakra-ui/react'
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import { useParams } from "react-router-dom";
// import axios from "axios";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { getCities } from "../../Api/Api";
import { Link } from 'react-router-dom';


export default function ProductCards() {
 const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const { id } = useParams();
  const handleGetCities = (page) => {
    
    getCities({ page: page, limit: 12, sort: "name", order: "desc" })
      .then((res) => {
        setData(res.data);
       
        setTotalCount(Number(res.headers["x-total-count"]));
      })
      .catch((err) => console.log(err));
  };
 
  useEffect(() => {
    handleGetCities(page);
    
  }, [page]);

  const handlePageChange = (val) => {
    const updatedPage = page + val;
    setPage(updatedPage);
  };
 
  // const handleClick=()=>{
  //   navigate(`/ProductDetails/${user.id}`)
  // }
  return (
    <div style={{width:"90%",margin:"auto"}}>
    <h1 style={{fontSize:"25px",fontWeight:"bolder", textDecoration:"underline",marginBottom:"10px"}}>Fresh Recommendations</h1>
    <SimpleGrid    columns={{base:1,md:2,lg:3,"xl":4}} w="100%" spacing={4}>
    {data.map((item) => (
     <Link to={`/ProductDetails/${item.id}`}>
    <Card  w={{base:"23rem",md:"20rem",lg:"18rem"}}   border="1px solid silver"  minH='21rem' margin={"auto"}>
 
  <Box sx={{ position:"absolute", marginLeft : "90%",color:"grey",marginTop:"5px",marginRight:"10px"}}><FavoriteBorderOutlinedIcon  /></Box>
  <Image
  height={170}
    
    margin={"auto"}
    src={item.image}
    alt={item.title}
  />
  <CardHeader>
  <Flex >
    <Flex   alignItems='center' flexWrap='wrap'>
      <Box>
        <Heading size='md'>{item.price}</Heading>
        <Text size="sm">{item.title}</Text>
      </Box>
    </Flex>
   
  </Flex>
</CardHeader>
  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      fontSize:"12px"
    }}
  >
  <Text>{item.location}</Text>
  <Text>{item.post_uploaded}</Text>
  </CardFooter>
</Card></Link>
))}
</SimpleGrid>
</div>
  );
}
