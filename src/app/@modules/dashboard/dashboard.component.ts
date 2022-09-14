import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@services/user.service';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  data = localStorage.getItem('userData');
  user = JSON.parse(this.data);
  isCollapsed: boolean = false;
  date = null;
  // scss
  menuType = 'menu-type';
  menuText = '';

  constructor(private router: Router, private userService: UserService) {}

  collapseMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date[]): void {
    console.log('week: ', result.map(getISOWeek));
  }
  transactionHistory() {
    let params = new HttpParams();
    params = params.append('dateFrom', '');
    params = params.append('dateTo', '');
    params = params.append('monthYear', '');

    this.userService.getTransaction(params).subscribe((res) => {
      console.log(res);
    });
  }
  logout() {
    this.router.navigate(['/login']);
    localStorage.clear();
  }
  ngOnInit(): void {
    this.transactionHistory();
  }
  ngDoCheck() {
    if (this.isCollapsed) {
      this.menuType = 'menu-type icon-center';
      this.menuText = 'not-display';
    } else {
      this.menuType = 'menu-type';
      setTimeout(() => {
        this.menuText = '';
      }, 100);
    }
  }
}
