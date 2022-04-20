import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/common/guard/auth.guard';
import { NotFoundComponent } from './pages/common/notfound/notfound.component';
import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', component: IndexComponent, canActivate: [AuthGuard]
  },
  {
    path: 'layout', component: LayoutComponent, canActivate: [AuthGuard]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
