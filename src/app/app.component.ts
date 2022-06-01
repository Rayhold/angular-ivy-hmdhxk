import { Component, VERSION, ViewChild } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('content') content: any;
  private _NgbModalRef: NgbModalRef;
  public name = 'Angular ' + VERSION.major;
  constructor(private modalService: NgbModal) {}

  public closeModal(event) {
    if (event) {
      this._NgbModalRef.close();
    }
    if (event == 'REFRESH') {
      console.log('redundant');
    }
  }
}
