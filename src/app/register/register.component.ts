import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public registerForm:FormGroup;
  constructor(public route:Router) { }

  ngOnInit() {
    this.validation();
  }
validation()
{
  this.registerForm=new FormGroup({
    fname:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    education:new FormControl('',Validators.required),
    mobile:new FormControl('',Validators.required),
    countryCode:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    cpassword:new FormControl('',Validators.required)

  });

}
Account(){
  console.log(this.registerForm.value)
}

}
