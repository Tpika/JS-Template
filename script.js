let spelare = { 
    namn: this.namn,
    losses: 0,
    pengar_Wasted: 0,


GetNamn: function () {
    let Newnamn = prompt('Vad heter du?')
    this.namn = Newnamn
    },

Förluster: function () {
    this.losses += 1
    alert(`Du har vunnit 0 gånger och förlorat ${this.losses} gånger`)
    },

Wasted: function () {
    let pengarS = Number(prompt("vad satsar du?"))
    alert(`Du har satsat ${pengarS}`)
    alert('Du förlorade')
    this.pengar_Wasted += pengarS
    alert(`Du har sammanlagt förlorat ${this.pengar_Wasted} kr`)

    }

}

function Rage () {
    let sur = prompt("Har du något att säga till poggrammet?")
    
    if (sur.length > 20) {
        alert("Poggrammet ansvarar ej för dåligt spel från spelaren")
    }

    if (sur.includes('fuck')) {
        if (sur.includes(' u ')){
            alert("poggrammet gillar inte personliga attacker")
        } 
        alert("poggrammet tycker inte om fula ord")
    }

}


const person = spelare;
const Namn = person.GetNamn();
alert(`Du heter ${Namn}`)

const pengar = 50
let pengarSB = 0

while (pengar > pengarSB) {
    person.Wasted()
    person.Förluster()
    Rage()
    pengarSB += 1
}