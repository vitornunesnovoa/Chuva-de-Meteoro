// Funções que fazem as validações do sistema.

export const verificaChuvaOcorrendo = (chuva, data) => {
    const anoAtual = data.getFullYear();

    let dataInicio = new Date(chuva.inicio + "/" + anoAtual);
    let dataFim = new Date(chuva.fim + "/" + anoAtual);

    dataFim = corrigeAno(dataInicio, dataFim);

    return (data >= dataInicio && data <= dataFim);
}

export const verificaProximaChuva = (chuva, data) => {
    const anoAtual = data.getFullYear();

    let dataInicio = new Date(chuva.inicio + "/" + anoAtual);
    let dataFim = new Date(chuva.fim + "/" + anoAtual);
    let dataInicioLimite = new Date(data);

    dataFim = corrigeAno(dataInicio, dataFim);

    dataInicioLimite.setMonth(dataInicioLimite.getMonth() + 2);

    return (data < dataInicio && dataInicio < dataInicioLimite);
}

const corrigeAno = (dataInicio, dataFim) => {
    if (dataInicio.getMonth() > dataFim.getMonth()) {
        const anoFinal = dataFim.getFullYear();
        return dataFim.setFullYear(anoFinal + 1);
    } else {
        return dataFim;
    }
}
//arrow function que inverte mes e dia exemplo mesDia= "30/12" => dataInvertida ="12/30"
export const inverteMesDia = (mesDia) => {

    const dataInvertida = mesDia.split("/");//transforma em um array sendo dividido pela "/" dataInvertida[0]= mes e dataInvertida[1]= dia
    return dataInvertida[1] + "/" + dataInvertida[0];//Retorna data Invertida "dia/mes" exemplo de retorno = "30/12"

}
// arrow function que verifica a intensidade e padroniza o string que será exibido
export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = "1 (Fraca)";
    if (intensidade.indexOf("Forte") >= 0) {//if usado para verificar se a palavra "Forte" está presente no intensidade
        novaIntensidade = "3 (Forte)";
    } else if (intensidade.indexOf("Média") >= 0) {//if usado para verificar se a palavra "Média" está presente no intensidade
        novaIntensidade = "2 (Média)";
    } else if (intensidade.indexOf("Irregular") >= 0) {//if usado para verificar se a palavra "Irregular" está presente no intensidade
        novaIntensidade = "(Irregular)";
    }
    return novaIntensidade; //retorna a intensidade formatada
}
//arrow function de 1 linha 
export const retornaHemisferio = (declinacao) => declinacao >= 0 ? "Norte" : "Sul";//retorna Norte ou sul dependendo da declinação
