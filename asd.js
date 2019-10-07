const quadras = require("./criaquadras");
const q = require("q");
var arr = [];
var aleatorios = [];
var universo = [];

Array.prototype.sorteia = function() {
  return this[Math.floor(Math.random() * this.length)];
};

for (let i = 1; i < 61; i++) {
  aleatorios.push(i);
}

for (let i = 1; i < 1000; i++) {
  if (i > 900) {
    universo.splice(aleatorios.sorteia(), 1);
  }

  universo.push(i);
}
universo.splice(0, 1);
console.log(universo);


for (let i = 1; i < 61; i++) {
  arr.push(i);
}
const tamanhoArr = arr.length;
console.log(arr.length);
var count = 0;
var index = -1;
while ( (count < tamanhoArr) && (index == -1)) {
  sorteado = arr.sorteia();
  index = universo.indexOf(sorteado);
  console.log('index:', index)
  count++;
  if (index === -1) {
    arr.splice(arr.indexOf(sorteado), 1);
    console.log("tamanho da array", arr.length);
    console.log("sorteado", sorteado);
  } else {
    console.log("encontrado", sorteado, count);
  }
}
