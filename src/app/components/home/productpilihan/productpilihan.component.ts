import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpilihan',
  templateUrl: './productpilihan.component.html',
  styleUrls: ['./productpilihan.component.css']
})
export class ProductpilihanComponent implements OnInit {

  itemProduct = [
    {
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Soto Ayam',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-3.png',
      title: 'Indomie Rasa Ayam Bawang',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-2.png',
      title: 'Indomie Goreng Fried Noodles',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-4.png',
      title: 'Indomie Goreng Mie Aceh',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-5.png',
      title: 'Indomie Goreng Cabe Ijo',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-6.png',
      title: 'Indomie Rasa Soto Spesial',
      price: 2500
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
