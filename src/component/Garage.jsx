import Car from "./Car";
import Mobile from "./Mobile";

const Garage = () => {
    const brand="ford"
    const Mobileinfo={Model:"Redmi", color:"black"}
    return (  

        <>
        <h1>Nothing</h1>
        <Car brand={brand}/>
        <Mobile Mobileinfo={Mobileinfo}/>
        </>
    );
}
 
export default Garage;