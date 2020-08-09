import React from 'react';
import './styles.css';
import whatsapp from '../../asssets/images/icons/whatsapp.svg';


function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/50680151?s=460&u=b241d78e12cbfe69f590b41d567c568589640e23&v=4" alt="Rafaela Silva" />
                <div>
                    <strong>
                        Rafaela Silva
                        </strong>
                    <span>
                        Matemática
                        </span>

                </div>

            </header>

            <p>
                Professora de matemática nas horas vagas.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsapp} alt="WhatsApp" />
                            Entrar em contato
                        </button>
            </footer>

        </article>
    )

}

export default TeacherItem;