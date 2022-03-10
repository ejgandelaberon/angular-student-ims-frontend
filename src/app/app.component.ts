import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title: string = 'Student Information Management System';
  sidebarOpen: boolean = false;

  ngOnInit(): void {
    
  }

  sidebarToggler() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
