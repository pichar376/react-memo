
import {useCallback, useEffect, useState} from"react"
import ContadorHijo from "./ContadorHijo";
  
const Contador = () => {
  const [contador, setContador] = useState(0);

const [input, setInput] = useState("");

  //const sumar=()=>setContador(contador+1)
 const sumar= useCallback(() =>setContador(contador+1), [contador]);
 // const restar=()=>setContador(contador-1)

const restar= useCallback(() =>setContador(contador-1), [contador]);
  
  const handleInput=(e)=>setInput(e.target.value)
  return (  

    <div>
      <h3>

      <a href="https://es.reactjs.org/docs/react-api.html#reactmemo" target="_blank"rel="noreferrer">
     memo
      </a>
      </h3>


      <br/>
      <br/>
      <article style={{textAlign:"center"}}>

      <nav><button onClick={sumar}>+</button>
      <button onClick={restar}>-</button></nav>
      <h1>{contador}</h1>
      <input type="text"onChange={handleInput}value={input} />
      <ContadorHijo contador={contador}sumar={sumar}restar={restar}/>
      </article>
    </div>
  );
}
 
export default Contador;