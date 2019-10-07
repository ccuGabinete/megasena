const lineReader = require("line-reader");
const Promise = require("bluebird");
const Q = require("q");
const max = 487635;
var array = [];
var jogos = [];
var quadrasResult = [];

module.exports.formata = () => {
  let deferred = Q.defer();
  let eachLine = Promise.promisify(lineReader.eachLine);
  eachLine("megasena.CSV", function(line) {
    array.push(line.split(";"));
  })
    .then(async function() {
      array.forEach((data, pos, array) => {
        if (parseInt(array[pos][2]) < 10) {
          array[pos][2] = "0" + array[pos][2];
        }

        if (parseInt(array[pos][3]) < 10) {
          array[pos][3] = "0" + array[pos][3];
        }

        if (parseInt(array[pos][4]) < 10) {
          array[pos][4] = "0" + array[pos][4];
        }

        if (parseInt(array[pos][5]) < 10) {
          array[pos][5] = "0" + array[pos][5];
        }

        if (parseInt(array[pos][6]) < 10) {
          array[pos][6] = "0" + array[pos][6];
        }

        if (parseInt(array[pos][7]) < 10) {
          array[pos][7] = "0" + array[pos][7];
        }
      });

      return array;
    })
    .then(data => {
      data.forEach((data, pos, array) => {
        let aux = [];
        aux[0] = array[pos][2];
        aux[1] = array[pos][3];
        aux[2] = array[pos][4];
        aux[3] = array[pos][5];
        aux[4] = array[pos][6];
        aux[5] = array[pos][7];

        jogos.push(aux);
      });

      return jogos;
    })
    .then(jogos => {
      let quadras = [];
      jogos.forEach((data, pos, array) => {
        if (pos === array.length - 1) {
          let combinatoria = combina(data)
            .then(x => {
              quadras.push(x);
              return quadras;
            })
            .then(x => {
              x.forEach(posicao => {
                posicao.forEach(quadra => {
                  quadrasResult.push(quadra);
                });
              });

              var limpaduplicatas = [];
              quadrasResult.forEach(quadra => {
                if (limpaduplicatas.indexOf(quadra) === -1) {
                  limpaduplicatas.push(quadra);
                }
              });
              deferred.resolve(limpaduplicatas.sort());
            });
        } else {
          let combinatoria = combina(data).then(x => {
            quadras.push(x);
          });
        }
      });
    })
    .catch(function(err) {
      deferred.reject(err);
    });

  return deferred.promise;
}; // fim da função formata

const combina = aposta => {
  var deferred = Q.defer();
  let resultados = [];
  for (a = 0; a <= aposta.length - 1; a++) {
    for (b = a + 1; b <= aposta.length - 1; b++) {
      if (aposta[a] === aposta[b]) {
        continue;
      }
      for (c = a + 2; c <= aposta.length - 1; c++) {
        if (aposta[a] === aposta[c] || aposta[b] === aposta[c] || c < b) {
          continue;
        }
        for (d = a + 3; d <= aposta.length - 1; d++) {
          if (
            aposta[a] === aposta[d] ||
            aposta[b] === aposta[d] ||
            aposta[c] === aposta[d] ||
            d < c
          ) {
            continue;
          }
          obj = aposta[a] + aposta[b] + aposta[c] + aposta[d];

          resultados.push(obj);
          deferred.resolve(resultados);
        }
      }
    }
  }

  return deferred.promise;
};

module.exports.geradordequadras = () => {
  let dezenas = [];
  let quadra = [];
  let strquadra = [];

  for (let index = 0; index <= 59; index++) {
    dezenas.push(index + 1);
  }

  Array.prototype.sorteia = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  for (let index = 0; index <= 3; index++) {
    let sorteado = dezenas.sorteia();
    dezena = retiraDezena(sorteado, dezenas);
    quadra.push(parseInt(sorteado));
  }
  quadra.sort((a, b) => {
    return a - b;
  });
  quadra.forEach(q => {
    if (q < 10) {
      strquadra.push("0" + q.toString());
    } else {
      strquadra.push(q.toString());
    }
  });
  obj = {
    quadra: strquadra[0] + strquadra[1] + strquadra[2] + strquadra[3],
    quadrasrestantes: dezenas
  };
  return obj;
};

const retiraDezena = (dezena, array) => {
  let deferred = Q.defer();
  if (array.indexOf(dezena) !== -1) {
    let pos = array.indexOf(dezena);
    array.splice(pos, 1);
    deferred.resolve(array);
  }

  return deferred.promise;
};

module.exports.retiraDezena = (dezena, array) => {
  let deferred = Q.defer();
  if (array.indexOf(dezena) !== -1) {
    let pos = array.indexOf(dezena);
    array.splice(pos, 1);
    deferred.resolve(array);
  }

  return deferred.promise;
};

module.exports.combina = aposta => {
  var deferred = Q.defer();
  let resultados = [];
  for (a = 0; a <= aposta.length - 1; a++) {
    for (b = a + 1; b <= aposta.length - 1; b++) {
      if (aposta[a] === aposta[b]) {
        continue;
      }
      for (c = a + 2; c <= aposta.length - 1; c++) {
        if (aposta[a] === aposta[c] || aposta[b] === aposta[c] || c < b) {
          continue;
        }
        for (d = a + 3; d <= aposta.length - 1; d++) {
          if (
            aposta[a] === aposta[d] ||
            aposta[b] === aposta[d] ||
            aposta[c] === aposta[d] ||
            d < c
          ) {
            continue;
          }
          obj = aposta[a] + aposta[b] + aposta[c] + aposta[d];

          resultados.push(obj);
          deferred.resolve(resultados);
        }
      }
    }
  }

  return deferred.promise;
};

module.exports.zeros = dezena => {
  if (dezena < 10) {
    return "0" + dezena.toString();
  } else {
    return dezena.toString();
  }
};

module.exports.incrementaDezena = (str, num) => {
  let arr = [];

  function sort(a, b) {
    return a - b;
  }

  for (let i = 0; i < str.length - 1; i += 2) {
    arr.push(parseInt(str.substring(i, i + 2)));
  }
  arr.push(num);
  arr.sort(sort);

  let novojogo = "";
  arr.forEach(dez => {
    novojogo += this.zeros(dez);
  });
  return novojogo;
};

module.exports.formataJogo = jogo => {
  let arr = [];
  for (let i = 0; i < jogo.length - 1; i += 2) {
    arr.push(jogo.substring(i, i + 2));
  }
  return arr;
};

const arrayresult = [
  "01041718",
  "01041748",
  "01041848",
  "01171848",
  "04171848"
];

module.exports.resultIndex = (jogo, quadrauniverso) => {
  let bol = true;
  for (let i = 0; i < jogo.length - 1; i++) {
    let index = quadrauniverso.indexOf(jogo[i]);
    if (index === -1) {
      bol = true;
      break;
    }
  }

  return bol;
};

module.exports.formaJogo = async (jg, quadra, uni) => {
  //jg: jogo recebido com n dezenas qr: quadraRestante uni: universo (conjunto das quadras sorteadas)
  let deferred = Q.defer();
  let bol = false;
  let count = 0;
  let jogo = "";
  let qr = [];
  quadra.forEach(dz => {
    qr.push(dz);
  });

  while (bol === false && count < max) {
    let sorteado = qr[Math.floor(Math.random() * qr.length)];
    jogo = this.incrementaDezena(jg, sorteado);
    let jogoformatado = this.formataJogo(jogo);
    let combina = await this.combina(jogoformatado);
    bol = this.resultIndex(combina, uni);
    count++;
    let index = qr.indexOf(sorteado);
    if (bol === false) {
      qr.splice(index, 1);
    } else {
      deferred.resolve({
        jogo: jogo,
        tamanho: qr.length,
        index: index,
        arr: qr
      });
    }
  }

  return deferred.promise;
};

module.exports.formataSaida = str => {
  let resposta = "";
  for (let i = 0; i < str.length; i += 2) {
    if (i === str.length - 2) {
      resposta += str.substring(i, i + 2);
    } else {
      resposta += str.substring(i, i + 2) + " - ";
    }
  }

  return resposta;
};

