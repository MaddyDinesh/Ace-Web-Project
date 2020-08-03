import { Injectable } from '@angular/core';
import { CHECKOUT} from '../checkout/checkout.model';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http : HttpClient) { }

  storeData(userData : CHECKOUT){
    this.http.post('https://ace-web-project.firebaseio.com/posts.json',userData).subscribe(responseData=>{
      console.log(responseData);
      
    })
  }

 
}
