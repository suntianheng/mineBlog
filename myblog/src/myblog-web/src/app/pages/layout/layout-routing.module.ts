import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../common/notfound/notfound.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'welcome', loadChildren:
          () => import('./welcome/welcome.module')
            .then(m => m.WelcomeModule)
      },
      {
        path: 'user', loadChildren:
          () => import('./user/user.module')
            .then(m => m.UserModule)
      },
    
    ]
  },
  {
    path: '**', component: NotFoundComponent
  },

];




@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
