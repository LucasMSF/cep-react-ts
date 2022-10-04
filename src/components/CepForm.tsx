import React, { useState } from 'react';
import InputMask from 'react-input-mask';

type Props = {
    getCep(cep: string): void
}

const CepForm = (props: Props) => {
    const [cep, setCep]  = useState('');

    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(cep !== '') props.getCep(cep)
        else alert('Preencha o campo!');          
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-5">
                <InputMask id='txtCep' onChange={({target: {value}}) => {setCep(value)}} className='outline-sky-600 p-2 rounded-md bg-gray-300' type="text" placeholder='CEP'  mask="99999-999"/>
                <button className='bg-sky-600 p-2 text-white ml-2 rounded-md hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-600 font-bold' type="submit">Verificar</button>
            </div>
    </form >
  )
}

export default CepForm