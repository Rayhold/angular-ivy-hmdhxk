import { NgModule } from '@angular/core';
import { SharedComponent } from './index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule],
  declarations: [SharedComponent],
  exports: [SharedComponent],
  providers: [],
})
export class SharedComponentModule {}
