import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [IndexRoutingModule],
  declarations: [IndexComponent],
  exports: [IndexComponent]
})
export class IndexModule { }
