const $poligon = document.getElementById('PoleMin')
const $timeSectndomer = document.getElementById('time')
const $zapZon = document.getElementById('kolOpasnMest')


var time = 0
var interval = setInterval(function() {

    //$time.textContent = (time + 0.1).toFixed(1)
    time += 1
    $timeSectndomer.innerHTML = (time).toFixed(0)
}, 1000)



//  const gorizont = 30
//  const vertical = 16
//  const kolMin = 9

//  const gorizont = 16
//  const vertical = 16
//  const kolMin = 40

//  const gorizont = 9
//  const vertical = 9
//  const kolMin = 10



 gorizont = +prompt('1/3-> Сколько клеток должно быть по горизонтали ', '')
 vertical = +prompt('2/3-> Сколько клеток должно быть по вертикали ', '')
 kolMin = +prompt('3/3-> Сколько должно быть мин ', '')


const kolVsehYheek = vertical * gorizont


$zapZon.innerHTML = kolMin

let kolRydom = 8
const vzriv = '*'
const flag = '#'

let slyhkoordin;



///////////////////////////////////////////////////////////////////////////////Отрисовка поля
for(var nomLine = 0; nomLine < vertical; nomLine++) {

    $poligon.insertAdjacentHTML('beforeend', '<div>')
    
    for(var nomElem = 1; nomElem < gorizont + 1; nomElem++){
        $poligon.insertAdjacentHTML('beforeend', `<div class="boxClose" id = '${nomLine * gorizont + nomElem}'></div>`)//*
        //console.log(nomLine * gorizont + nomElem)
    }
    $poligon.insertAdjacentHTML('beforeend', '</div>')

}
////////////////////////////////////////////////////////////////////////////////////
let oneClick = true
const koorMin = new Array(kolMin);
    $poligon.addEventListener('click', (event) => {
    if(oneClick) {
        console.log('One click', event.target.id)
        if(event.target.className == 'boxClose') {

///////////////////////////////////////////////////////////////////////////////Подбор случайных координат


for (var i = 0; i < koorMin.length; i++) {
    do{
        slyhkoordin = getRandomIntInclusive(1, (vertical - 1) * (gorizont) + (gorizont));
    } while(koorMin.indexOf(slyhkoordin) != -1 || (slyhkoordin == +event.target.id + 0))
    
    koorMin[i] = slyhkoordin
}
console.log('mina', koorMin)
///////////////////////////////////////////////////////////////////////////////

    
            //openKletky(event.target.id)
    
            //console.log('myClick', event.target.id.split('w'), '---', +event.target.id.split('w')[0] * gorizont + (+event.target.id.split('w')[1]))
            //console.log('myClick', event.target.id, '---', pereobrazKoorVChislo(event.target.id))
            openKletky(event.target.id)

            oneClick = false
    
        }
    }    
    })





$poligon.addEventListener("mousedown", function(event) {
    if ((event.which === 2) && (event.target.className == 'boxEmpty')) {


        let koordin = +event.target.id + 0
        let kolMarkerv = 0


    /////////////////////////////////////////////////

    if(prKoorYhiyki(koordin - gorizont - 1)) if(document.getElementById(koordin - gorizont - 1).className == 'boxMarker' && (koordin - gorizont - 1) % gorizont != 0) kolMarkerv++;    if(prKoorYhiyki(koordin - gorizont)) if(document.getElementById(koordin - gorizont).className == 'boxMarker') kolMarkerv++;    if(prKoorYhiyki(koordin - gorizont + 1)) if(document.getElementById(koordin - gorizont + 1).className == 'boxMarker' && (koordin - gorizont + 1) % gorizont != 1) kolMarkerv++

    if(prKoorYhiyki(koordin - 1)) if(document.getElementById(koordin - 1).className == 'boxMarker' && (koordin - 1) % gorizont != 0) kolMarkerv++;/***********************************************************************************/ if(prKoorYhiyki(koordin + 1)) if(document.getElementById(koordin + 1).className == 'boxMarker' && (koordin + 1) % gorizont != 1) kolMarkerv++;

    if(prKoorYhiyki(koordin + gorizont - 1)) if(document.getElementById(koordin + gorizont - 1).className == 'boxMarker' && (koordin + gorizont - 1) % gorizont != 0) kolMarkerv++;   if(prKoorYhiyki(koordin + gorizont)) if(document.getElementById(koordin + gorizont).className == 'boxMarker') kolMarkerv++;    if(prKoorYhiyki(koordin + gorizont + 1)) if(document.getElementById(koordin + gorizont + 1).className == 'boxMarker' && (koordin + gorizont + 1) % gorizont != 1) kolMarkerv++;

    /////////////////////////////////////////////////

    if(kolMarkerv != 0 && kolMarkerv == document.getElementById(koordin).innerHTML) {
        
////////////////////////////////////////////////////////////////////

if(proverkaYheiki(koordin - gorizont - 1) && (koordin - gorizont - 1) % gorizont != 0) openKletky(koordin - gorizont - 1); if(proverkaYheiki(koordin - gorizont)) openKletky(koordin - gorizont); if(proverkaYheiki(koordin - gorizont + 1) && (koordin - gorizont + 1) % gorizont != 1) openKletky(koordin - gorizont + 1);

if(proverkaYheiki(koordin - 1) && (koordin - 1) % gorizont != 0) openKletky(koordin - 1); /*******************************************************************************/if(proverkaYheiki(koordin + 1) && (koordin + 1) % gorizont != 1) openKletky(koordin + 1);

if(proverkaYheiki(koordin + gorizont - 1) && (koordin + gorizont - 1) % gorizont != 0) openKletky(koordin + gorizont - 1); if(proverkaYheiki(koordin + gorizont)) openKletky(koordin + gorizont); if(proverkaYheiki(koordin + gorizont + 1) && (koordin + gorizont + 1) % gorizont != 1) openKletky(koordin + gorizont + 1);

////////////////////////////////////////////////////////////////////
    }
    
        //openKletky(koordin)


    console.log('kolMarker = ', kolMarkerv, 'kol min', document.getElementById(koordin).innerHTML )


}
});

$poligon.addEventListener('click', (event) => {
    if(oneClick == false) {
    console.log('myClick', event.target.id)
        if(event.target.className == 'boxClose') {

            openKletky(event.target.id)

            //console.log('myClick', event.target.id.split('w'), '---', +event.target.id.split('w')[0] * gorizont + (+event.target.id.split('w')[1]))
            //console.log('myClick', event.target.id, '---', pereobrazKoorVChislo(event.target.id))


        }
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
        !window.location.reload();
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



////////////////////////////////////////////////////////////////////

if(proverkaYheiki(koordin - gorizont - 1) && (koordin - gorizont - 1) % gorizont != 0) openKletky(koordin - gorizont - 1); if(proverkaYheiki(koordin - gorizont)) openKletky(koordin - gorizont); if(proverkaYheiki(koordin - gorizont + 1) && (koordin - gorizont + 1) % gorizont != 1) openKletky(koordin - gorizont + 1);

if(proverkaYheiki(koordin - 1) && (koordin - 1) % gorizont != 0) openKletky(koordin - 1); /*******************************************************************************/if(proverkaYheiki(koordin + 1) && (koordin + 1) % gorizont != 1) openKletky(koordin + 1);

if(proverkaYheiki(koordin + gorizont - 1) && (koordin + gorizont - 1) % gorizont != 0) openKletky(koordin + gorizont - 1); if(proverkaYheiki(koordin + gorizont)) openKletky(koordin + gorizont); if(proverkaYheiki(koordin + gorizont + 1) && (koordin + gorizont + 1) % gorizont != 1) openKletky(koordin + gorizont + 1);

////////////////////////////////////////////////////////////////////



                }
            }
        }
    }
}

function prKoorYhiyki(koordinata) {
    if(koordinata >= 0 && koordinata <= kolVsehYheek)// % gorizont != 0
        return true
    return false
}

function proverkaYheiki(koordinata) {
    if(koordinata >= 0 && koordinata <= kolVsehYheek && koordinata)// % gorizont != 0
        if(document.getElementById(koordinata).className == 'boxClose')
            return true;
    return false
}

function lokator(tohkaProv) {
    let koordin = +tohkaProv + 0
    let kolBomb = 0



/////////////////////////////////////////////////



if(koorMin.indexOf(koordin - gorizont - 1) != -1 && (koordin - gorizont - 1) % gorizont != 0) kolBomb++;    if(koorMin.indexOf(koordin - gorizont) != -1) kolBomb++;    if(koorMin.indexOf(koordin - gorizont + 1) != -1 && (koordin - gorizont + 1) % gorizont != 1) kolBomb++

if(koorMin.indexOf(koordin - 1) != -1 && (koordin - 1) % gorizont != 0) kolBomb++;/***********************************************************************************/ if(koorMin.indexOf(koordin + 1) != -1 && (koordin + 1) % gorizont != 1) kolBomb++;

if(koorMin.indexOf(koordin + gorizont - 1) != -1 && (koordin + gorizont - 1) % gorizont != 0) kolBomb++;   if(koorMin.indexOf(koordin + gorizont) != -1) kolBomb++;    if(koorMin.indexOf(koordin + gorizont + 1) != -1 && (koordin + gorizont + 1) % gorizont != 1) kolBomb++;


/////////////////////////////////////////////////


    return kolBomb
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}




