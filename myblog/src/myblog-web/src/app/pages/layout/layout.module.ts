import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../../icons-provider.module';

@NgModule({
    imports: [
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule, 
        
        LayoutRoutingModule,

       
    ],
    declarations: [LayoutComponent],
    exports: [LayoutComponent]
})
export class LayoutModule { }
