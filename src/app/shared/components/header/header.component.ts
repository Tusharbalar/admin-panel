import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toogleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.toogleSidebarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 200);
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }

}
