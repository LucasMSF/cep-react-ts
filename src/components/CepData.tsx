import React from 'react'

type Props = {
    data: any
}

const CepData = (props: Props) => {
  return (
    <div>
        <p className='text-lg'>Rua: <span className='font-bold'>{props.data.logradouro}</span></p>
        <p className='text-lg'>Bairro: <span className='font-bold'>{props.data.bairro}</span></p>
        <p className='text-lg'>Cidade: <span className='font-bold'>{props.data.localidade}</span></p>
        <p className='text-lg'>UF: <span className='font-bold'>{props.data.uf}</span></p>
    </div>
  )
}

export default CepData