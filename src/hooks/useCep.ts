import { useState } from "react";
import { Cep } from "../types/cep";

export function useCep() {
    const [cepData, setCepData] = useState({} as Cep);

    const getCep = async (cep: string) => {
        try {
            const URL = `https://viacep.com.br/ws/${cep}/json/`;
            const res = await fetch(URL);
            const body = await res.json();

            if (body.erro) {
                alert('CEP inválido');
                return;
            }

            setCepData(body);

        } catch (error) {
            alert('Erro na API')
        }
    }

    return { cepData, getCep };
}