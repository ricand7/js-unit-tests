const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (productDetails('Alcool gel', 'Máscara'))[0], 'object');
    assert.deepStrictEqual(typeof (productDetails('Alcool gel', 'Máscara'))[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    let objeto1 = productDetails('Alcool gel', 'Máscara')[0];
    let objeto2 = productDetails('Alcool gel', 'Máscara')[1];
    assert.notDeepStrictEqual(objeto1, objeto2, true);
    // Teste que os dois productIds terminam com 123.
    let produto1 = productDetails('Alcool gel', 'Máscara')[0].details.productId;
    let produto2 = productDetails('Alcool gel', 'Máscara')[1].details.productId;
    assert.strictEqual(produto1[produto1.length - 1], '3');
    assert.strictEqual(produto1[produto1.length - 2], '2');
    assert.strictEqual(produto1[produto1.length - 3], '1');
    assert.strictEqual(produto2[produto2.length - 1], '3');
    assert.strictEqual(produto2[produto2.length - 2], '2');
    assert.strictEqual(produto2[produto2.length - 3], '1');
});
});
