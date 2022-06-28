import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreatAccountAdminComponent } from './creat-account-admin/creat-account-admin.component';

const routes: Routes = [
  {path:"login", component:AdminLoginComponent},
  {path:"createAccount", component:CreatAccountAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
