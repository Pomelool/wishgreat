import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginData: object = {
        username: "",
        password: ""
    }

    constructor(){

    }

    public onClickSubmit(){
        
    }
  
}
