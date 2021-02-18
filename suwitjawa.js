var lagi = true;
while(lagi){
    // menangkap nilai user
    var pilih = prompt('Pilihan anda ? (gajah, semut, orang)');

    //menangkap pilihan komputer

    var comp = Math.random();

    if ( comp < 0.34){
        comp = 'gajah';
    } else if ( comp >= 0.34 && comp < 0.68){
        comp = 'semut';
    } else {
        comp = 'orang';
    }


    var hasil = '';
    //peraturan

    if ( pilih == comp ) {
        hasil ='SERI!';
    } else if (pilih == 'gajah'){
        hasil = ( comp == 'semut') ? 'KALAH!' : 'MENANG!';
    } else if (pilih == 'semut'){
        hasil = ( comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else if (pilih == 'orang'){
        hasil = ( comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = (pilih+ ' Input yang anda masukkan salah!');
    }

    // TAMPIL DATA

    alert('Pilihan kamu : '+pilih+' pilihan komputer : '+comp+' \nMaka hasil nya adalah : '+hasil);

    lagi = confirm('LAGI GA?');
}

alert('Selamat anda berhasil dan '+hasil);
