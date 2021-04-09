// function suma(a, b, c) {
//     return a + b + c
// }
// console.log(suma(1, 5, 3))

// function xd(par1, par2) {
//     if(par1 === 0 || par2 === 0) {
//         alert ("nie uzywaj 0")
//     } else {
//         return (par1 / par2)
//     }
// }
// const dzielenie = xd(1864, 4)
// console.log(dzielenie)



// UWAGA!!!

const posts = [
    {
        autor: "Jan Kowal",
        tytul: "Stary ty gdzie byl"
    },
    {
        autor: "Marcin Lewel",
        tytul: "Marcin i lody ekipy"
    },
    {
        autor: "Kuba Zero",
        tytul: "Kupi mi to"
    },
    {
        autor: "Inna Dea",
        tytul: "Podroz do matki"
    },
    {
        autor: "Ko Ella",
        tytul: "Ja to swiat"
    },
    {
        autor: "Mina Jon",
        tytul: "Lola gram"
    },
    {
        autor: "Ala Mona",
        tytul: "Monte Karlo"
    },
    {
        autor: "Mike Lola",
        tytul: "Unia Europejska"
    },
    {
        autor: "Give Kola",
        tytul: "Level Up"
    },
    {
        autor: "Eja Mia",
        tytul: "Nie no nie konieczne"
    },
    {
        autor: "Wolf Elf",
        tytul: "Psy"
    },
    {
        autor: "Ewa Riwa",
        tytul: "Stara ukradla ci myszke"
    },
    {
        autor: "Arto Morto",
        tytul: "Nowe kino"
    },
    {
        autor: "Kowi Monta",
        tytul: "Mona Liza"
    },
    {
        autor: "Fara Ona",
        tytul: "Farta masz"
    },
]
console.log(posts)

function addElement() {
    const app = document.getElementById('app')
    app.innerHTML = ''
    for (let i = 0; i < posts.length; i++) {
        let paragraf = document.createElement('p')
        paragraf.setAttribute('class', 'post')
        paragraf.innerText = posts[i].autor + " " + posts[i].tytul
        app.appendChild(paragraf)
    }
}

function search() {
    console.log(event.target.value)
    valueInput.trim()
    const valueInput = event.target.value
    const app = document.getElementById('app')
    const postsFilter = posts.filter(post => {
        return (post.tytul.search(valueInput) !== -1)
    })


    for (let i = 0; i < postsFilter.length; i++) {

        let paragraf = document.createElement('p')
        paragraf.setAttribute('class', 'post')
        paragraf.innerText = postsFilter[i].autor + " " + postsFilter[i].tytul
        app.appendChild(paragraf)

    }
}