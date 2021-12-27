import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setToken(data:string){
    localStorage.setItem('token', data)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  deleteToken(){
    localStorage.removeItem('token')
  }
  getCartItem(){
    return localStorage.getItem('keranjang')
  }
}
