import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  content: any[] = [
    {
      text: "Asia's Safest, Singapore's Best Bank",
      subText: 'Now across India.',
      img: '../../../assets/images/thumbnail 60-55-04.webp',
    },
    {
      text: '  Asian Insights',
      subText: 'Insights & Analysis through research findings.',
      img: '../../../assets/images/asian-insights.jpg',
    },
  ];
  tabList = [
    {
      title: 'DBS Bank India',
    },
    {
      title: 'Personal Banking',
    },
    {
      title: 'Corporate and SME Banking',
    },
    {
      title: 'DBS Tech India',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigate(path) {
    this.router.navigate([path]);
  }
  learn() {
    window.open('https://www.dbs.com/india/default.page', '_blank');
  }
}
