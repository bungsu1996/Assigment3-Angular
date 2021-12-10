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
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Ayam Bawang',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Soto Lamongan',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Soto Lamongan',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Soto Lamongan',
      price: 2500
    },
    {
      image: '../../../../assets/image/product/idm-1.png',
      title: 'Indomie Rasa Soto Lamongan',
      price: 2500
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
