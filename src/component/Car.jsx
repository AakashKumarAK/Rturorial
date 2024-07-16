const Car = (props) => {
    const {brand}=props
    const temp=`hi this is a${brand}`;
    return ( 

        <>
        <h1>{temp}</h1>
        </>
     );
}
 
export default Car;