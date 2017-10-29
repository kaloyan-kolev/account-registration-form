import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Customvalidators } from '../custom.validators';
import { ServerService } from "../server.service";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {

  constructor(private serverService: ServerService){
    
  }

  accountForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.pattern('[a-zA-z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+')], Customvalidators.checkDuplicateEmail(this.serverService)),
    password: new FormControl("", [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$')])
  });

  get email(){
    return this.accountForm.get("email");
  }

  get password(){
    return this.accountForm.get("password");
  }
  
  signup(){
    console.log(this.accountForm.value);
    alert('The form was submitted');
    this.accountForm.reset();
  }
}
