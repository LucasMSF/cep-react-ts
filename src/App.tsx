import CepData from './components/CepData';
import CepForm from './components/CepForm';
import { FiMapPin } from 'react-icons/fi'
import { useCep } from './hooks/useCep';

function App() {
  const {cepData, getCep} = useCep();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center font-mono">
      <div className='bg-slate-100 p-3 h-[400px] shadow-xl shadow-slate-300'>
        <h1 className='text-center font-bold text-sky-500 text-3xl'>Consulta CEP</h1>
        <CepForm getCep={getCep} />
        <div className="mt-10">
          <CepData data={cepData} />
        </div>
        <div className='flex justify-center items-center mt-5'>
          <FiMapPin color='#0377fc' size='64px' />
        </div>
      </div>
      <h1 className='mt-3 font-bold text-md text-slate-500'>2022 - Lucas MSF</h1>
    </div>

  );
}

export default App;
