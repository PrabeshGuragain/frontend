import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useSelector } from "react-redux";
const Quantity = ({onChange,value=1,hideLabel=false,gap=4,padding=1}) => {
    const [quantity,setQuantity]= useState(value)
    const items = useSelector((state)=>state.cart.items)
    useEffect(()=>{
       setQuantity(value)
    },[items])
    const increment = ()=>{
        setQuantity(quantity+1);
        if(onChange)onChange(quantity+1)
    }
    const decrement = ()=>{
        if(quantity>1){
            setQuantity((value)=>--value);
            if(onChange)onChange(quantity-1)
        }
       
    }
    return (<Box className='w-fit h-fit'>
     {hideLabel?null:<Typography variant="body1" padding={1}>Quantity:</Typography>}
        <Box className="border-[1px]" >
        <Stack direction={'row'} padding={padding} justifyContent={'space-between'} gap={gap} alignItems={'center'}>
        <RemoveIcon onClick={decrement} className="cursor-pointer" />
        <Typography>{quantity}</Typography>
        <AddIcon  onClick={increment} className="cursor-pointer hover:text-gray"/>
        </Stack>
        </Box>
    </Box>);
}
 
export default Quantity;