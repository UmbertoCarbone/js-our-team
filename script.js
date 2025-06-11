/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina
(usate una foto qualunque, anche vostra se volete sentirvi parte del team! */



//  array che rappresenta un team di un azienda

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

console.log(teamMembers);


const rowEl = document.querySelector(".row");




let cards = "";

// Ciclo for per ogni membro 
for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i]; // i 0, 1, 2, 3
  cards +=


    // generazione del template literal ``
    `
    
  <div class="card mb-3">
   <div class="row g-4">
     <div class="col-md-4">
       <img src="${member.img}">
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${member.name}</h5>
         <p class="card-text">${member.role}</p>
         <p class="card-text">${member.email}</p>
      </div >
    </div >
  </div >
</div> 

 `
}

// Inserisci tutte le card nel container
rowEl.innerHTML = cards;

//nuovo membro
const addTeam = [
  {
    name: "Umberto Carbone",
    role: "Developer",
    email: "umbertocarbone@team.com",
    img: "img/umbcar.jpg"
  }
  
]



// const newMember = {
//     name: "Umberto Carbone",
//     role: "Developer",
//     email: "umbertocarbone@team.com",
//     img: "img/umbcar.jpg"
//   }

// rowEl.innerHTML += `
    
//   <div class="card mb-3">
//    <div class="row g-4">
//      <div class="col-md-4">
//        <img src="${newMember.img}">
//      </div>
//      <div class="col-md-8">
//        <div class="card-body">
//          <h5 class="card-title">${newMember.name}</h5>
//          <p class="card-text">${newMember.role}</p>
//          <p class="card-text">${newMember.email}</p>
//       </div >
//     </div >
//   </div >
// </div> 

//  `;
for (let i = 0; i < addTeam.length; i++) {
  const memberNew = addTeam[i]; // i 0, 1, 2, 3
  cards +=


    // generazione del template literal ``
    `
    
  <div class="card mb-3">
   <div class="row g-4">
     <div class="col-md-4">
       <img src="${memberNew.img}" style=width:200px>
     </div>
     <div class="col-md-8">
       <div class="card-body">
         <h5 class="card-title">${memberNew.name}</h5>
         <p class="card-text">${memberNew.role}</p>
         <p class="card-text">${memberNew.email}</p>
      </div >
    </div >
  </div >
</div> 

 `
}

// Inserisci tutte le card nel container
rowEl.innerHTML = cards;
const nuovoTeam = [...teamMembers, ...addTeam]
console.log(nuovoTeam)