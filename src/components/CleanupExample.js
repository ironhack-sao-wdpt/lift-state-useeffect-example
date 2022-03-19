import { useState, useEffect } from 'react';

function CleanupExample() {
  const [seconds, setSeconds] = useState(0);

  // Na montagem do componente, iniciar timer'
  // Com a array de dependências vazia, o useEffect executa a callback de efeito SOMENTE UMA VEZ, na montagem do componente.
  useEffect(() => {
    console.log('Timer montando...');
    const intervalId = setInterval(() => {
      // Além de poder receber o novo valor de state, as funções de atualização de state também podem receber uma callback que dá acesso ao valor anterior do state, e atualiza o state para o valor de retorno dessa callback
      setSeconds(
        // prevState é o valor do state antes de atualizar
        (prevState) => {
          // Isso será o novo valor do state
          return prevState + 1;
        }
      );
    }, 1000);

    // Quando retornamos uma definição de função do useEffect, essa função será executada no processo de desmontagem (unmount). Podemos usá-la para cancelar processos recorrentes dentro do componente antes que ele seja retirado do DOM. O react se refere à essa função como cleanUp function (função de limpeza)
    return function () {
      console.log('Timer desmontando...');
      // Na desmontagem do componente, parar timer
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Tempo de sessão:</p>

      <p>{seconds}</p>
    </div>
  );
}

export default CleanupExample;
