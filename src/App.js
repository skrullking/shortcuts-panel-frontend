import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHome, faLink, faPlus, faPen, faBars, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

// Componente: Bloco isolado de HTML, CSS, e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que o componente PAI passa para o componente FILHO
// Estado: 

function App() {
  return (
    <div id="app">

      <header>

        <a className="bubble bubbleAction" href="#" target="_blank">
          <div className="icons">
            <FontAwesomeIcon icon={faHome} size="5x" className="mainIcon" />
          </div>
          <strong>Home</strong>
        </a>

      </header>

      <main>

        <div className="bubble">
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPen} size="xs" />
            <a href="edit" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPen} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPlus} size="xs" />
            <a href="add" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPlus} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

        <div className="bubble">
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPen} size="xs" />
            <a href="edit" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPen} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPlus} size="xs" />
            <a href="add" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPlus} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

        <div className="bubble">
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPen} size="xs" />
            <a href="edit" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPen} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble">
          <div className="hot">
            <FontAwesomeIcon className="hotIcon" icon={faPlus} size="xs" />
            <a href="add" className="hotAction" type="button">
              <FontAwesomeIcon icon={faPlus} size="xs" />
            </a>
          </div>
          <a className="bubbleAction" href="#">
            <div className="icons">
              <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
              <FontAwesomeIcon icon={faLink} size="xs" className="typeIcon" />
            </div>
            <strong>Ambiente de Produção</strong>
          </a>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

        <div className="bubble bubbleAction">
          <div className="icons">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="mainIcon" />
            <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
          </div>
          <strong>Ambiente de Produção</strong>
        </div>

      </main>

      <footer>
        <div className="title">
          Ciclos
        </div>
        <div className="compoundBubblesRow">
          <div className="compoundBubbles">

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

            <div className="bubble bubbleAction">
              <div className="icons">
                <strong className="number">10</strong>
                <FontAwesomeIcon icon={faBars} size="xs" className="typeIcon" />
              </div>
              <strong className="year">2019</strong>
            </div>

          </div>
          <div className="carrosselController">

          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
