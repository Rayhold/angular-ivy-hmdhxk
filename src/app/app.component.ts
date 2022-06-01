import { Component, VERSION } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private _NgbModalRef: NgbModalRef;
  name = 'Angular ' + VERSION.major;
  constructor(private modalService: NgbModal) {}

  closeModal(event) {
    if (event) {
      this._NgbModalRef.close();
    }
    if (event == 'REFRESH') {
      console.log('redundant');
    }
  }
}
