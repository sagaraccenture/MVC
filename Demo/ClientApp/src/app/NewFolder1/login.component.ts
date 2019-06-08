import { Component, Inject } from "@angular/core"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})

export class LoginComponent {
  sagar: any;
  doshows: boolean = true;
  show: boolean = false;
  username: string;
  pass: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
   
  }
  SignUp() {
    this.show = true;
    this.doshows = false;
  }
  signin() {

    this.show = false;
    this.doshows = true;
  }
  dosign() {
    this.username = this.username;

    this.http.get<boolean>((this.baseUrl + 'api/SampleData/Something?username=' + this.username + '&pass=' + this.pass)).subscribe(result => {
      this.sagar = result;
    });
  }
  }
