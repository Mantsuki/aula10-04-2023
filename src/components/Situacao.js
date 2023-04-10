import React, {useState} from "react";

function Notas(){
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [media, setMedia] = useState(0);
    const [situacao, setSituacao] = useState(0);

    function calcularMedia(){
        const media = (nota1 + nota2 + nota3) / 3;
        setMedia(media);
        setSituacao(media >= 6 ? "Aprovado!" : "Reprovado!")
    }

    return(
        <div>
        <h2>Média de Notas com situação</h2>
            <label htmlFor="nota1">Nota 1: </label>
            <input
                id="nota1"
                type="number"
                value={nota1}
                onChange= {(event) => setNota1(Number(event.target.value))}
            />
            <br/>
             <label htmlFor="nota2">Nota 2: </label>
            <input
                id="nota2"
                type="number"
                value={nota2}
                onChange= {(event) => setNota2(Number(event.target.value))}
            />
            <br/>
             <label htmlFor="nota3">Nota 3: </label>
            <input
                id="nota3"
                type="number"
                value={nota3}
                onChange= {(event) => setNota3(Number(event.target.value))}
            />
            <br/>
            <br/>
            <button onClick={calcularMedia}>Calcular Media</button>
            <br/>
            <br/>
            <label1 htmlFor="media">A média é: {media}</label1>
            <br/>
            <label1 htmlFor="situacao">Situação: {situacao}</label1>
        </div>
    )
}

export default Notas;