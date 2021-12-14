import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpilihan2',
  templateUrl: './productpilihan2.component.html',
  styleUrls: ['./productpilihan2.component.css'],
})
export class Productpilihan2Component implements OnInit {
  itemProduct = [
    {
      image: '../../../../assets/image/pilihanproduct2/prt-1.PNG',
      title: 'Gelas Stainless Zebra Ori',
      price: 9999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/prt-2.PNG',
      title: 'All In One Taffer Ware Kuat',
      price: 99999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/prt-3.PNG',
      title: 'Alat Pel Lantai Bolde Bersih',
      price: 39999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/prt-4.PNG',
      title: 'Toples Penyimpanan Bumbu Lucu',
      price: 74999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/prt-5.PNG',
      title: 'Toples Kue Kaca Tebal Kuat',
      price: 115000,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/prt-6.PNG',
      title: 'Keranjang Makanan/ Barang',
      price: 84999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-1.PNG',
      title: 'Lemari Barang Kaca 6 Pintu',
      price: 899000,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-2.PNG',
      title: 'Rak Lemari 4 Tingkat Elegan',
      price: 499999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-3.PNG',
      title: 'Lemari 4 Pintu Kaca Serbaguna',
      price: 699999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-4.PNG',
      title: 'Kursi Belajar/ Kantor Lucu',
      price: 299999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-5.PNG',
      title: 'Meja Serbaguna Kaki Empat',
      price: 149999,
    },
    {
      image: '../../../../assets/image/pilihanproduct2/fr-6.PNG',
      title: 'Meja Kantor/ Guru Kokoh',
      price: 349999,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
