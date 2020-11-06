const $poligon = document.getElementById('PoleMin')
const $timeSectndomer = document.getElementById('time')
const $zapZon = document.getElementById('kolBomb')





var time = 0
var interval = setInterval(function() {

    
    //$time.textContent = (time + 0.1).toFixed(1)
    time += 1
    $timeSectndomer.innerHTML = (time).toFixed(0)
  }, 1000)









//console.log('q2werty')

// const vertical = 16
// const gorizont = 30

const vertical = 11
const gorizont = 15
const kolVsehYheek = vertical * gorizont

const kolMin = 20

$zapZon.innerHTML = kolMin

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
    console.log('myClick', event.target.id)
    if(event.target.className == 'boxClose') {

        openKletky(event.target.id)

        //console.log('myClick', event.target.id.split('w'), '---', +event.target.id.split('w')[0] * gorizont + (+event.target.id.split('w')[1]))
        //console.log('myClick', event.target.id, '---', pereobrazKoorVChislo(event.target.id))



    }

})

$poligon.addEventListener('contextmenu', (event) => {
    event.preventDefault();

    if(event.target.className == 'boxClose') {

    $zapZon.innerHTML = (+$zapZon.innerHTML - 1).toString()

    console.log('myRigthClick', event.target.id)

    //var myClassName = event.target.className;


    event.target.setAttribute('class', 'boxMarker')
    event.target.innerHTML = flag
    } else if(event.target.className == 'boxMarker') {
        $zapZon.innerHTML = (+$zapZon.innerHTML + 1).toString()
        event.target.setAttribute('class', 'boxClose')
        event.target.innerHTML = ''
        }

    if(+$zapZon.innerHTML == 0 && $poligon.innerHTML.indexOf('boxClose') == -1) {
        alert('WINNER')
        window.location.reload();
    }

})

//vertical
//gorizont



function openKletky(tohkaProv) {
    let koordin = +tohkaProv + 0

    if(koordin >= 0 && koordin <= kolVsehYheek) {
        let myClickKletka = document.getElementById(koordin)

        if(myClickKletka.className == 'boxClose') {
            
            if(koorMin.indexOf(koordin) != -1) {
                console.log('BOOM')
                myClickKletka.setAttribute('class', 'boxBomb')
                myClickKletka.innerHTML = vzriv
                alert('BOOM')
                window.location.reload();
            } else {
                myClickKletka.setAttribute('class', 'boxEmpty')
                kolRydom = lokator(koordin)////////
                myClickKletka.innerHTML = kolRydom

                if(kolRydom == 0) {
                    if(proverkaYheiki(koordin - gorizont)) openKletky(koordin - gorizont)
                    if(proverkaYheiki(koordin + gorizont)) openKletky(koordin + gorizont)
                    if(proverkaYheiki(koordin - 1)) openKletky(koordin - 1)
                    if(proverkaYheiki(koordin + 1)) openKletky(koordin + 1)
                    if(proverkaYheiki(koordin - gorizont - 1)) openKletky(koordin - gorizont - 1)
                    if(proverkaYheiki(koordin - gorizont + 1)) openKletky(koordin - gorizont + 1)
                    if(proverkaYheiki(koordin + gorizont - 1)) openKletky(koordin + gorizont - 1)
                    if(proverkaYheiki(koordin + gorizont + 1)) openKletky(koordin + gorizont + 1)
                }
            }
        }
    }
}

function proverkaYheiki(koordinata) {
    if(koordinata >= 0 && koordinata <= kolVsehYheek && koordinata % gorizont != 0)
        if(document.getElementById(koordinata).className == 'boxClose')
            return true;
    return false
}

function lokator(tohkaProv) {
    let koordin = +tohkaProv + 0
    let kolBomb = 0

    if(koorMin.indexOf(koordin - gorizont) != -1) kolBomb++





    if(koorMin.indexOf(koordin + gorizont) != -1) kolBomb++

    if(koorMin.indexOf(koordin - 1) != -1 && koordin - 1 % gorizont != 1) kolBomb++
    if(koorMin.indexOf(koordin + 1) != -1) kolBomb++//// && koordin + 1 != 0

    if(koorMin.indexOf(koordin - gorizont - 1) != -1 && koordin - gorizont - 1 != 1) kolBomb++
    if(koorMin.indexOf(koordin - gorizont + 1) != -1) kolBomb++////// && koordin - gorizont + 1 != 0
    if(koorMin.indexOf(koordin + gorizont - 1) != -1 && koordin + gorizont - 1 != 1) kolBomb++
    if(koorMin.indexOf(koordin + gorizont + 1) != -1) kolBomb++////// && koordin + gorizont + 1 != 0



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


