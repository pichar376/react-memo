import { memo, useMemo } from "react";



const ContadorHijo = ({contador,sumar,restar}) => {
  // let superNumero=0;

  // for(let i=0;i<1000000000;i++){
  //   superNumero++
  // }
  const superNumero= useMemo(()=>{
    let numero=0;
    for(let i=0;i<1000000000;i++){
  numero++
  }
  return numero;
 } ,[])
  console.log("contador hijo")
  return ( 
    <div  style={{border:"thin solid gray"}}>
      <h1>
       ContadorHijo
      </h1>

   <h1>{contador}</h1>
    
      <nav><button onClick={sumar}>+</button>
      <button onClick={restar}>-</button></nav>
      
      <h3>{superNumero}</h3>
      
      
    </div>
  );
}
 
export default memo(ContadorHijo);