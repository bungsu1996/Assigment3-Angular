import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.component.html',
  styleUrls: ['./keranjang.component.css'],
})
export class KeranjangComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }
}
