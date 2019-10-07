const criaquadras = require("./criaquadras");
const Q = require("q");
const max = 487635;
const min = 50;
var universo = []; //guardará o resultado das quadras sorteadas
function retorno(a, b) {
  return {
    a: a,
    b: b
  };
}

Array.prototype.sorteia = function() {
  return this[Math.floor(Math.random() * this.length)];
};

//arrayquadras => traz o array de quadras já sorteadas
criaquadras
  .formata()
  .then(async obj => {
    universo = obj;
    let jogo = "";
    let arr = [];
    let index = 0;
    count = 0;
    while (index > -1) {
      count++;
      let resp = criaquadras.geradordequadras();
      jogo = resp.quadra;
      arr = resp.quadrasrestantes;
      index = universo.indexOf(resp.quadra);
    }
    return retorno(jogo, arr);
  })
  .then(async obj => {
    let tamanho = 55;
    let jogo = "";
    let arr = [];
    while (tamanho < 56) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }

    arr.splice(index, 1);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 54;
    let jogo = "";
    let arr = [];
    while (tamanho < 55) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
    
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com seis dezenas    : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 53;
    let jogo = "";
    let arr = [];
    while (tamanho < 54) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }

    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com sete dezenas    : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 52;
    let jogo = "";
    let arr = [];
    while (tamanho < 53) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }

    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com oito dezenas    : ${resp}`);
    return retorno(jogo, arr);
  })
  .then(async obj => {
    let tamanho = 51;
    let jogo = "";
    let arr = [];
    while (tamanho < 52) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }

    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com nove dezenas    : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 50;
    let jogo = "";
    let arr = [];
    while (tamanho < 51) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com  dez dezenas    : ${resp}`);
    return retorno(jogo, arr);
  })

  .then(async obj => {
    let tamanho = 49;
    let jogo = "";
    let arr = [];
    while (tamanho < 50) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com onze dezenas    : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 48;
    let jogo = "";
    let arr = [];
    while (tamanho < 49) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com doze dezenas    : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 47;
    let jogo = "";
    let arr = [];
    while (tamanho < 48) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com treze dezenas   : ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 46;
    let jogo = "";
    let arr = [];
    while (tamanho < 47) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com quatorze dezenas: ${resp}`);
    return retorno(jogo, arr);

  })
  .then(async obj => {
    let tamanho = 45;
    let jogo = "";
    let arr = [];
    while (tamanho < 46) {
      let response = await criaquadras.formaJogo(obj.a, obj.b, universo);
      tamanho = response.tamanho;
      jogo = response.jogo;
      index = response.index;
      arr = response.arr;
    }
  
    arr.splice(index, 1);
    resp = criaquadras.formataSaida(jogo);
    console.log(`Jogo com quinze dezenas  : ${resp}`);
    return retorno(jogo, arr);

  })
