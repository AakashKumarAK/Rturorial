import { useState } from "react";

const Favouritecolor = () => {

    const [color,setColor]=useState('blue');
    return ( 
        <>
        <h1>This is a favourite {color}</h1>
        <button onClick={()=>{setColor('red')}}>Button</button>
        </>

     );
}
 
export default Favouritecolor;