import { MyAccountComponent } from './pages/my-account/my-account.component';
import { UserAccountsComponent } from './pages/user-accounts/user-accounts.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent},
  {path:'user-accounts', component:UserAccountsComponent},
  {path:'my-account', component:MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
