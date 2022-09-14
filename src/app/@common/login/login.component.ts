import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from 'src/app/@services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  uName: any;
  pass: any;
  constructor(
    private router: Router,
    private userService: UserService,
    private message: NzMessageService
  ) {}
  ngOnInit(): void {}
  openUrl() {
    window.open(
      'https://www.dbs.com/digibank/in/banking/internet-banking/ibanking/faq.page',
      '_blank'
    );
  }
  openLink(path) {
    window.open(path, '_blank');
  }
  navigate(path) {
    this.router.navigate([path]);
  }
  login() {
    let payload = {
      password: 'Pras@@nth90',
      username: 'prasaanthv',
    };

    this.userService.login(payload).subscribe(
      (res) => {
        let userData: any = JSON.stringify(res);
        localStorage.setItem('userData', userData);
        this.navigate('/dashboard');
      },
      (err) => {
        this.message.create(
          'error',
          err.error.constraintViolations[0].message
            .replace(/_/g, ' ')
            .toLowerCase()
        );
      }
    );
  }
}
