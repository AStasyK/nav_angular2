import { Component, OnInit, ViewChild } from '@angular/core';

import { SidenavService } from './components/sidenav/sidenav.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') public sidenav: MdSidenav;
  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService.setSidenav(this.sidenav);
  }
}
