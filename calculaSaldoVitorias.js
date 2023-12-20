// Função para calcular o saldo e classificar o nível
function calcularSaldoENivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  console.log(`O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso
const vitoriasDoHeroi = 75;
const derrotasDoHeroi = 20;

calcularSaldoENivel(vitoriasDoHeroi, derrotasDoHeroi);
