import React, { useState } from 'react'

type Props = {
    getCep(cep: string): any
}

const CepForm = (props: Props) => {
    const [cep, setCep]  = useState('');

    const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.getCep(cep);     
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group mt-5">
                <input id='txtCep' onChange={({target: {value}}) => {setCep(value)}} className='outline-sky-600 p-2 rounded-md bg-gray-300' type="text" placeholder='CEP' />
                <button className='bg-sky-600 p-2 text-white ml-2 rounded-md hover:bg-sky-500 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-600 font-bold' type="submit">Verificar</button>
            </div>
    </form >
  )
}

export default CepForm