import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productCloths = [
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-1.PNG',
      namaItem: 'Hoddie XTAB Sundanese Deathmetal',
      hargaItem: 299000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-2.PNG',
      namaItem: 'Hoddie Traumatomy Deathbrutal',
      hargaItem: 299000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-3.PNG',
      namaItem: 'Sweater Carnifex Skull Deathcore',
      hargaItem: 299000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-4.PNG',
      namaItem: 'Long Sleeves Whitecapel',
      hargaItem: 249000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-5.PNG',
      namaItem: 'Long Sleeves Keringat Darah',
      hargaItem: 199000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-6.PNG',
      namaItem: 'Hoddie XTAB Sundanese',
      hargaItem: 239000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/bj-7.PNG',
      namaItem: 'Hoddie Dark Funeral Blackmetal',
      hargaItem: 239000,
    },
  ];

  productPerkakas = [
    {
      imageItem: '../../../assets/image/pilihanproduct2/prt-1.PNG',
      namaItem: 'Gelas Cup Alumunium Kuat',
      hargaItem: 14999,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/prt-2.PNG',
      namaItem: 'All In One Taffer Ware Kuat',
      hargaItem: 99999,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/prt-3.PNG',
      namaItem: 'Alat Pel Lantai Bolde Bersih',
      hargaItem: 39999,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/fr-1.PNG',
      namaItem: 'Lemari Barang Kaca 6 Pintu',
      hargaItem: 899000,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/fr-4.PNG',
      namaItem: 'Kursi Belajar/ Kantor Lucu',
      hargaItem: 299999,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/fr-6.PNG',
      namaItem: 'Meja Kantor/ Guru Kokoh',
      hargaItem: 349999,
    },
    {
      imageItem: '../../../assets/image/pilihanproduct2/prt-5.PNG',
      namaItem: 'Toples Kue Kaca Tebal Kuat',
      hargaItem: 115000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
