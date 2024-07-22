class Personagem {
  constructor(Nome, Raca, Classe) {
    this.Nome = Nome
    this.Raca = Raca
    this.Classe = Classe
    this.Nivel = 1
    this.Vida = 10
    this.Mana = 10
  }

  exibirStatus() {
    console.log('Status:')
    console.log('Nome:' + this.Nome)
    console.log('Raça:' + this.Raca)
    console.log('Classe:' + this.Classe)
    console.log('Nível:' + this.Nivel)
    console.log('Vida:' + this.Vida)
    console.log('Mana:' + this.Mana)
  }
}

const beto = new Personagem('Beto', 'Humano', 'Guerreiro')

beto.exibirStatus()
