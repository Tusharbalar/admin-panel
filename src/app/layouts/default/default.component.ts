import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  isOpened: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(e: any) {
    this.isOpened = !this.isOpened;
  }

}
