const $poligon = document.getElementById('PoleMin')


// const vertical = 16
// const gorizont = 30

const vertical = 8
const gorizont = 8

const kolMin = 10
let kolRydom = 8
const vzriv = '*'
const flag = '#'

let slyhkoordin;

const koorMin = new Array(kolMin);

for (var i = 0; i < koorMin.length; i++) {
    do{
        slyhkoordin = getRandomIntInclusive(1, (vertical - 1) * (gorizont) + (gorizont));
    } while(koorMin.indexOf(slyhkoordin) != -1)
    
    koorMin[i] = slyhkoordin
}
console.log('mina', koorMin)

///////////////////////////////////////////////////////////////////////////////
for(var nomLine = 0; nomLine < vertical; nomLine++) {

    $poligon.insertAdjacentHTML('beforeend', '<div>')
    
    for(var nomElem = 1; nomElem < gorizont + 1; nomElem++){
        $poligon.insertAdjacentHTML('beforeend', `<div class="boxClose" id = '${nomLine * gorizont + nomElem}'></div>`)//*
        //console.log(nomLine * gorizont + nomElem)
    }
    $poligon.insertAdjacentHTML('beforeend', '</div>')

}
////////////////////////////////////////////////////////////////////////////////////




$poligon.addEventListener('click', (event) => {
    if(event.target.className == 'boxClose') {

        openKletky(event.target.id)

        //console.log('myClick', event.target.id.split('w'), '---', +event.target.id.split('w')[0] * gorizont + (+event.target.id.split('w')[1]))
        //console.log('myClick', event.target.id, '---', pereobrazKoorVChislo(event.target.id))



    }

})

$poligon.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    if(event.target.className == 'boxClose') {

    console.log('myClick', event.target.id)

    //var myClassName = event.target.className;


    event.target.setAttribute('class', 'boxMarker')
    event.target.innerHTML = flag
    } else if(event.target.className == 'boxMarker') {
            event.target.setAttribute('class', 'boxClose')
            event.target.innerHTML = ''
        }

})

//vertical
//gorizont



function openKletky(tohkaProv) {

    let koordin = +tohkaProv + 0
    let myClickKletka = document.getElementById(koordin)
    
    if(koorMin.indexOf(koordin) != -1) {
        console.log('BOOM')
        myClickKletka.setAttribute('class', 'boxBomb')
        myClickKletka.innerHTML = vzriv
    } else {
        kolRydom = lokator(koordin)////////
        myClickKletka.setAttribute('class', 'boxEmpty')
        myClickKletka.innerHTML = kolRydom
    }
}


let lokator = function(tohkaProv) {
    let koordin = +tohkaProv + 0
    let kolBomb = 0

    if(koorMin.indexOf(koordin - gorizont) != -1) kolBomb++
    if(koorMin.indexOf(koordin + gorizont) != -1) kolBomb++

    if(koorMin.indexOf(koordin - 1) != -1) kolBomb++
    if(koorMin.indexOf(koordin + 1) != -1) kolBomb++

    if(koorMin.indexOf(koordin - gorizont - 1) != -1) kolBomb++
    if(koorMin.indexOf(koordin - gorizont + 1) != -1) kolBomb++
    if(koorMin.indexOf(koordin + gorizont - 1) != -1) kolBomb++
    if(koorMin.indexOf(koordin + gorizont + 1) != -1) kolBomb++

    return kolBomb
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }














// var pereobrazKoorVChislo = function(strId) {
//     let nomer = +strId.split('w')[0] * gorizont + (+strId.split('w')[1] * 1)
//     return nomer
// }





// var razbivka = function(strId) {

//     var hisl = strId.split('w')

//     return hisl
// }



// for (var i = 0; i < vertical; i++) {
//     for(var j = 0; j < gorizont)
//     koorMin[i] = new Array(gorizont);
// }


// // koorMin.forEach((elem) => {
// //     elem = new Array(gorizont);
// // })



// console.log(koorMin);


