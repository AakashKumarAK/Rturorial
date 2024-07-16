const Mobile = (props) => {
    const {Mobileinfo}=props
    const{Model,color}=Mobileinfo
    const text=`This is a ${color} color ${Model} Mobile`
    return (  
        <>
       <h2>{text}</h2>
        </>
    );
}
 
export default Mobile;