//console.log (name) = abcde
//comparar se uma string é maior que outra
//"abcd" < "adbc" < "bacd"
/*Escreva uma função que receba uma string A
e retorne uma string B, sendo que B é composta
pelos mesmos caracteres que A reordenados.
*/
function menorStringMaior(name) {
  let nameArray = name.split("");

  let vendedor = (arrayVendas) => {
    let resultado = [];

    let venda = (array, m = []) => {
      if (array.length === 0) {
        resultado.push(m.join(""));
      } else {
        for (let i = 0; i < array.length; i++) {
          let atual = array.slice();
          let proximo = atual.splice(i, 1);
          venda(atual.slice(), m.concat(proximo));
        }
      }
    };

    venda(arrayVendas);

    return resultado;
  };

  let vendas = Array.from(new Set(vendedor(nameArray).sort()));

  let idxVendas = vendas.findIndex((index) => {
    return index === name;
  });

  return vendas[idxVendas + 1] ? vendas[idxVendas + 1] : "sem resposta";
}
