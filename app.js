function getPiihanComputer() {
    const comp = Math.random()    
    if ( comp < 0.34 ) return 'jempol';
    if ( comp >= 0.34 && comp <= 0.67 ) return 'telunjuk';
    return 'kelingking'
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'jempol' ) return ( comp == 'telunjuk' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'telunjuk' ) return ( comp == 'jempol' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'kelingking' ) return ( comp == 'telunjuk' ) ? 'KALAH' : 'MENANG!';
}

function putar() {
    const imgComputer = document.querySelector('.img-computer')
    const gambar = ['jempol', 'telunjuk', 'kelingking'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if ( new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length){
            i = 0
        }
    }, 100)
}



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function() {
        const pilihanComputer = getPiihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar()

        setTimeout(function(){
            const imgComputer = document.querySelector('.img-computer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil;

            getScore(hasil)
        }, 1000)


    })
})


let scoreComp = 0;
let scorePlayer = 0;
function getScore(hasil){
    if (hasil == 'SERI!') scorePlayer = scorePlayer, scoreComp = scoreComp;
    if (hasil == 'MENANG!') scorePlayer = scorePlayer + 1;
    if (hasil == 'KALAH!') scoreComp = scoreComp + 1;
    
    const scoreC = document.querySelector('#scoreC')
    const scoreP = document.querySelector('#scoreP')
    scoreC.innerHTML = scoreComp
    scoreP.innerHTML = scorePlayer
    // const scoreC = scoreComp.innerHTML = scoreComp;
    // const scoreP = scorePlayer.innerHTML = scorePlayer
}










// const playerJempol = document.querySelector('.jempol')
// playerJempol.addEventListener('click', function() {
//     const pilihanKomputer = getPiihanComputer();
//     const pilihanPlayer = playerJempol.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// });

// const playerTelunjuk = document.querySelector('.telunjuk')
// playerTelunjuk.addEventListener('click', function() {
//     const pilihanKomputer = getPiihanComputer();
//     const pilihanPlayer = playerTelunjuk.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// });

// const playerKelingking = document.querySelector('.kelingking')
// playerKelingking.addEventListener('click', function() {
//     const pilihanKomputer = getPiihanComputer();
//     const pilihanPlayer = playerKelingking.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    
//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// });