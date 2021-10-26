// Funções que exibem algo para o usuário.

import { inverteMesDia, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

const imprimeListaChuva = (listaChuvas) => {
    console.log('\nNOME DO METEORO             - INTENSIDADE - HEMISFÉRIO - PERÍODO');//imprimindo cabeçalho da tabela

    listaChuvas.forEach(imprimeChuva);// chamando função para padronizar o texto 
}

const imprimeChuva = (chuva) => {

    const nome = chuva.nome.padEnd(27, ' ');//Padronizamos o valor do nome para exibir no terminal com espaçamento de 27 sendo preenchidos por space o que nao for preenchido pela variavel
    let intensidade = retornaIntensidade(chuva.intensidade);//chama a função retornaIntensidade recebendo como parametro o dado da intensidade do objeto chuva
    let hemisferio = retornaHemisferio(chuva.declinacao);//chama a função retornaHemisferio recebendo como parametro o dado da declinação do objeto chuva

    intensidade = intensidade.padEnd(11, ' ');//Padronizamos o valor da intensidade para exibir no terminal com espaçamento de 27 sendo preenchidos por space o que nao for preenchido pela variavel
    hemisferio = hemisferio.padEnd(10, ' ');//Padronizamos o hemisferio para exibir no terminal com espaçamento de 10 sendo preenchidos por space o que nao for preenchido pela variavel

    const dataInicio = inverteMesDia(chuva.inicio);
    const dataFim = inverteMesDia(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim} `);//imprimindo as informações de um objeto de chuvas-de-meteoros
}

export default imprimeListaChuva;