import { NgModule } from '@angular/core';
import { SystemLayoutRoutingModule } from './system-layout-routing.module';
import { SystemLayoutComponent } from './system-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../../icons-provider.module';

@NgModule({
    imports: [
        IconsProviderModule,
        NzLayoutModule,
        NzMenuModule, 
        
        SystemLayoutRoutingModule,
    ],
    declarations: [SystemLayoutComponent],
    exports: [SystemLayoutComponent]
})
export class SystemLayoutModule { }
