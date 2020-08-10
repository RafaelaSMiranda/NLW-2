import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectPros extends SelectHTMLAttributes<HTMLSelectElement> {

    label: string;
    name: string;
    options: Array<{
        // um array de objetos, por isso precisa descrever cada um desses objetos
        value: string;
        label: string;
    }>;

}

const Select: React.FC<SelectPros> = ({ label, name, options, ...rest }) => {

    return (

        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest} >

                <option value="" disabled  hidden>Selecione uma opção</option>
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value}> {option.label}</option>
                    })
                }

            </select>
        </div>


    );
}

export default Select;