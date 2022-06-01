import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter,
} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modald',
  templateUrl: './modald.component.html',
  styleUrls: ['./modald.component.css'],
  styles: ['#btnOpen { margin: 0px 0px 15px 0px; }'],
  encapsulation: ViewEncapsulation.None,
})
export class ModaldComponent implements OnInit {
  @Output() funcion: EventEmitter<any> = new EventEmitter();
  @Output() refresh: EventEmitter<any> = new EventEmitter();
  public buttonDisabled: boolean;
  private _NgbModalRef: NgbModalRef;

  constructor(private modalService: NgbModal) {}

  public open(content) {
    this._NgbModalRef = this.modalService.open(content, {
      size: 'lg',
      centered: false,
    });
    this._NgbModalRef.result.then(
      (result) => {},
      (reason) => {
        console.log('CLOSE REASON => ', reason);
      }
    );
  }

  public closeModal(event) {
    this._NgbModalRef.close();
  }
  public search(event) {
    console.log('GG');
  }

  ngOnInit() {
    this.buttonDisabled = false;
  }
}
