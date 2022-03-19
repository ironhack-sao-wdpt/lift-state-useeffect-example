import React, { useState, useEffect } from 'react';
import profilesList from '../data/berlin.json';

function Facebook() {
  const [state, setState] = useState([...profilesList]);

  // 1. Definir um state para o país atualmente selecionado

  const [selectedCountry, setSelectedCountry] = useState(null);

  function renderButtons() {
    // const uniqueCountries = [
    //   ...new Map(
    //     state.map((element) => [element.country, element.country])
    //   ).values(),
    // ];

    // 2. Extrair e tirar as duplicatas da lista dos países
    const uniqueCountries = [
      ...new Set(state.map((currentProfileObj) => currentProfileObj.country)), // o Set tira automaticamente as duplicatas
    ];

    // 3. Criar os botões
    return uniqueCountries.map((currentCountry) => {
      return (
        <button
          // 4. No clique de um botão, atualizar o state do país atual
          onClick={() => setSelectedCountry(currentCountry)}
          key={currentCountry}
          className="btn btn-light me-2 mb-2"
          style={{
            backgroundColor:
              selectedCountry === currentCountry ? '#A3D2E2' : '#fff',
          }}
        >
          {currentCountry}
        </button>
      );
    });
  }

  console.log(selectedCountry);

  return (
    <div className="w-100 p-5">
      {/* Renderiza os botões */}
      {renderButtons()}
      {/* // 6. Resetar a seleção */}
      <button
        onClick={() => setSelectedCountry(null)}
        className="btn btn-light me-2 mb-2"
        style={{
          backgroundColor: selectedCountry === null ? '#A3D2E2' : '#fff',
        }}
      >
        All
      </button>
      <div className="row">
        {state.map((person, idx) => (
          <div key={idx} className="col-sm-12 col-md-9 col-lg-3">
            <div
              className="card m-2"
              /* // 5. Mudar a cor de fundo do card condicionalmente */
              style={{
                backgroundColor:
                  selectedCountry === person.country ? '#A3D2E2' : '#fff',
              }}
            >
              <img
                className="card-img-top"
                src={person.img}
                alt={person.firstName}
              />
              <div className="card-body">
                <p className="card-text">
                  <strong>First name:</strong> {person.firstName}
                </p>
                <p className="card-text">
                  <strong>Last name: </strong>
                  {person.lastName}{' '}
                </p>
                <p className="card-text">
                  <strong>Country: </strong>
                  {person.country}{' '}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Facebook;
