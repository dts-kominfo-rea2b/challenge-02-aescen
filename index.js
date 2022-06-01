// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      'id': 1,
      'namaDepan': 'Edyth',
      'namaBelakang': 'Roberts',
      'jenisKelamin': 'M'
    },
    ...
  ]
*/
const arrayObjectPegawai = require('./data-customer.json');

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama 'hasilLooping' 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ['Aisyah Nirmala', 'Mansur Faisal', ...]
  */
  let hasilLooping = ((datas)=>{
    let names = [];
    for (const data of datas) {
      names.push(`${data.namaDepan} ${data.namaBelakang}`);
    }
    return names;
  })(dataYangAkanDilooping);
  //hasilLooping = dataYangAkanDilooping.map(data => `${data.namaDepan} ${data.namaBelakang}`);

  /*
    TODO 2: Buatlah sebuah variabel bernama 'jumlahPria'
      yang berisi jumlah pria dari masing masing pegawai
  */
  let jumlahPria = ((datas) => {
    let maleCount = 0;
    for (const data of datas) {
      maleCount += data.jenisKelamin === 'M' ? 1 : 0;
    }
    return maleCount;
  })(dataYangAkanDilooping);
  //jumlahPria = dataYangAkanDilooping.reduce((total, item) => total + (item.jenisKelamin === 'M' ? 1 : 0), 0);

  /*
    TODO 3: Buatlah sebuah variabel bernama 'jumlahWanita'
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let jumlahWanita = ((datas) => {
    let femaleCount = 0;
    for (const data of datas) {
      femaleCount += data.jenisKelamin === 'F' ? 1 : 0;
    }
    return femaleCount;
  })(dataYangAkanDilooping);
  //jumlahWanita = dataYangAkanDilooping.reduce((total, item) => total + (item.jenisKelamin === 'F' ? 1 : 0), 0);

  /*
    TODO 4: Buatlah sebuah variabel bernama 'komentar'
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        'Jumlah Pria lebih banyak dari Wanita'
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        'Jumlah Wanita lebih banyak dari Pria'
      Apabila imbang, maka komentar akan berisi:
        'Jumlah Pria dan Wanita berimbang'
  */
  let komentar = ((male, female) => {
    return ((male === female) ? 'Jumlah Pria dan Wanita berimbang' :
      (male < female) ? 'Jumlah Wanita lebih banyak dari Pria' :
      (male > female) ? 'Jumlah Pria lebih banyak dari Wanita' : '')
  })(jumlahPria, jumlahWanita);

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  /*
    console.log(hasil.hasilLooping);
    console.log(hasil.jumlahPria);
    console.log(hasil.jumlahWanita);
    console.log(hasil.komentar);
  */

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
