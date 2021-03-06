import React from 'react';
import { Footer } from '../organisms/index'

export default function AboutUs() {
  return (
    <>
      <section className="welcome-container">
          <div className="welcome-info__content">
              <div className="welcome-info">
                  <h1 className="title welcome-info__title">
                      Encuestas y Formularios
                  </h1>
                  <p className="paragraph welcome-info__description">
                      Cree formularios para encuestas sin costo facilmente. 
                      Envielos en modo privado o publiquelos, y analice los 
                      datos reunidos.
                  </p>
              </div>
              <div className="welcome-img">
                  <img src="https://cdn-icons-png.flaticon.com/512/4481/4481167.png" alt="welcome-img"/>
              </div>
          </div>
          <div className="welcome-btn__start">
              <a className="paragraph start-btn" href="../pages/SignUp.html">Comience Ahora</a>
          </div>
      </section>
      <section className="block-info__container">
          <div className="welcome-img">
              <img src="https://cdn-icons-png.flaticon.com/512/4481/4481203.png" alt="welcome-img" />
          </div>
          <div className="block-info">
              <h2 className="title block-info__title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="paragraph block-info__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur alias. Quasi sequi fugit numquam soluta. Recusandae sint repellat in.
              </p>
          </div>
      </section>
      <section className="block-info__container">
          <div className="block-info">
              <h2 className="title block-info__title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="paragraph block-info__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur alias. Quasi sequi fugit numquam soluta. Recusandae sint repellat in.
              </p>
          </div>
          <div className="welcome-img">
              <img src="https://cdn-icons-png.flaticon.com/512/4481/4481293.png" alt="welcome-img" />
          </div>
      </section>
      <section className="block-info__container">
          <div className="welcome-img">
              <img src="https://cdn-icons-png.flaticon.com/512/4481/4481144.png" alt="welcome-img" />
          </div>
          <div className="block-info">
              <h2 className="title block-info__title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <p className="paragraph block-info__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, consequuntur alias. Quasi sequi fugit numquam soluta. Recusandae sint repellat in.
              </p>
          </div>
      </section>
      <Footer />
  </>
  )
}
