import { useState, useEffect } from 'react';

function EffectExample() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  // O useEffect é um hook que recebe 2 argumentos: uma callback (efeito) e uma array (dependências). Toda vez que qualquer elemento da array de dependência sofre qualquer modificação, o useEffect executa a callback de efeito
  useEffect(() => {
    console.log('Valor de state foi modificado: ', count);

    // Toda função de atualização de state é assíncrona, ou seja, não é executada na ordem que aparece no código, e sim atrasada para uma execução futura para não travar a interface de usuário com processos demorados. Por conta disso, a única maneira de acessarmos o state devidamente atualizado é dentro do useEffect

    const newArr = [];
    // Gerar a quantidade de itens na array de acordo com o contador
    for (let i = 1; i <= count; i++) {
      newArr.push(`O botão foi clicado ${i} vezes`);
    }

    setList(newArr);
  }, [count]);

  function handleClick() {
    // Aumentar o contador
    setCount(count + 1);
  }

  return (
    <div>
      <span className="me-4">{count}</span>
      <button onClick={handleClick}>Incrementar</button>

      <ul>
        {list.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default EffectExample;
