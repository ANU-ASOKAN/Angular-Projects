import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'form', loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule) }, 
  { path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: '', redirectTo:'form',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
