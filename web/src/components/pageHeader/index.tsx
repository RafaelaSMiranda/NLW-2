import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import backIcon from '../../asssets/images/icons/back.svg';
import logoImg from '../../asssets/images/logo.svg';


interface PageHeaderProps {
    title: string;
    description?: string;
    // é obrigatório, se não fosse obrigatório, seria title?

}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (

        <header className="page-header" >

            <div className="top-bar-container">

                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />

            </div>

            <div className="header-content">

                <strong>
                    {props.title}
                </strong>

                {props.description && <p>{props.description}</p>}
                {props.children}
                
            </div>

        </header >
    );
}

export default PageHeader;