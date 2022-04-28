import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './notfound/notfound.component';
import { CommonModule } from '@angular/common';

const nzModule = [
  NzLayoutModule,
  NzMenuModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzCheckboxModule,
  NzEmptyModule,
  NzDropDownModule,
  NzResultModule,
  NzImageModule,
  NzGridModule
];

const ngModule = [
  BrowserAnimationsModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
]

@NgModule({
  imports: [CommonModule, ...nzModule, ...ngModule],
  declarations: [NotFoundComponent,],
  exports: [NotFoundComponent, CommonModule, ...nzModule, ...ngModule]
})
export class SharedModule {}
