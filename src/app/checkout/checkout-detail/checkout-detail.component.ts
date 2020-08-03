import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CHECKOUT } from '../checkout.model';
import {CheckoutService} from '../checkout.service';
import{HttpClient} from '@angular/common/http';
import { map} from 'rxjs/operators';
@Component({
  selector: 'app-checkout-detail',
  templateUrl: './checkout-detail.component.html',
  styleUrls: ['./checkout-detail.component.css']
})
export class CheckoutDetailComponent implements OnInit {
  checkoutform: FormGroup;
  fetch=false;
  userArray : CHECKOUT[]=[]

  constructor(private cs : CheckoutService,private http:HttpClient) { }

  ngOnInit(): void {
    this.checkoutform = new FormGroup({
      'email' : new FormControl(null ,[Validators.required , Validators.email]),
      'contact' : new FormControl(null,Validators.required),
      'name' : new FormControl(null,Validators.required),
      'address' : new FormControl(null,Validators.required),
      'city' : new FormControl(null,Validators.required),
      'country' : new FormControl(null,Validators.required),
      'postalcode' : new FormControl(null,Validators.required)
    })
  }
  onSubmit(){
   this.cs.storeData(this.checkoutform.value);
    
  }
  onFetchData(){
    this.http.get('https://ace-web-project.firebaseio.com/posts.json')
    .pipe(map(responseData =>{
      const postArray=[];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push(responseData[key]);
        }
        
      }
      return postArray;
    }))
    .subscribe(postData =>{
     this.fetch=true;
      this.userArray =postData;
      ;
      
    })
  }
  onHide(){
    this.fetch=false;
  }

}
