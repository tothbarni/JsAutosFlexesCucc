import { kocsiLista } from "./adat.js"

let txt=""

for (let i = 0; i < kocsiLista.length; i++) {
    if (i==3) {
        txt += `<div class="kocsi3">
                    <h2>${kocsiLista[i].marka} ${kocsiLista[i].tipus}</h2>
                    <img src="${kocsiLista[i].kep}" alt="auto">
                    <p>ár: ${kocsiLista[i].ar}</p>
                </div>`
    }else{
        txt += `<div class="kocsi">
                    <h2>${kocsiLista[i].marka} ${kocsiLista[i].tipus}</h2>
                    <img src="${kocsiLista[i].kep}" alt="auto">
                    <p>ár: ${kocsiLista[i].ar}</p>
                </div>`
    }
}

art.innerHTML = `${txt}`