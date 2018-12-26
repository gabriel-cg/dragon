import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = { 
    email: '',
    password:'',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {}

  onSubmit() {
    this.loginService.login(this.user)
      .then(result => {
        this.router.navigateByUrl('/dragons')
      });
  }

}
