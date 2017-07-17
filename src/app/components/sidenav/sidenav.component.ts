import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navLinks = [
    { name: 'Employees', path: '/employees'},
    { name: 'Offices', path: '/offices'},
    { name: 'Contracts', path: '/contracts'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
