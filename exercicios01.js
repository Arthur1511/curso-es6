class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("email@teste.com", "senha123");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true

const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

var idades = usuarios.map(function(item) {
  return item.idade;
});

console.log(idades);

var usuariosMaiores = usuarios.filter(function(item) {
  return item.idade > 17;
});

console.log(usuariosMaiores);

var google = usuarios.find(function(item) {
  return item.empresa === "Google";
});

console.log(google);

var unindo = usuarios
  .map(function(item) {
    item.idade *= 2;
    return item;
  })
  .filter(function(item) {
    return item.idade <= 50;
  });

console.log(unindo);

const arr = [1, 2, 3, 4, 5];
console.log(
  arr.map(item => {
    return item + 10;
  })
);

const usuario = { nome: "Diego", idade: 23 };

const uIdade = usuario => usuario.idade;

console.log(uIdade(usuario));

const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = "Diego", idade = 18) => ({ nome, idade });

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     return resolve();
//   });
// };

const empresa = {
  name: "Rocketseat",
  endereco: {
    cidade: "Rio do Sul",
    estado: "SC"
  }
};

const {
  name,
  endereco: { cidade, estado }
} = empresa;

console.log(name); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: "Diego", idade: 23 }));

const vet = [1, 2, 3, 4, 5, 6];

const [x, ...y] = vet;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuarioS = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil"
  }
};

var usuario2 = {...usuarioS, nome: "Gabriel"};
var usuario3 = {...usuarioS, endereco: {...usuarioS.endereco, cidade:"Lontras"}};

console.log(usuario2);
console.log(usuario3);

var user = "Diego";
var idd = 23;
console.log(`O usuário ${user} possui ${idd} anos`);

// var nome = "Diego";
// var idade = 23;
// var usuario = {
//   nome,
//   idade,
//   cidade: "Rio do Sul"
// };