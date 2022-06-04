import { registerLocaleData } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './component/archive/archive.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { DashBoardComponent } from './component/dash-board/dash-board.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';

import { LogInComponent } from './component/log-in/log-in.component';
import { RegisterComponent } from './component/register/register.component';
import { TrashComponent } from './component/trash/trash.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  {path: `register`,component:RegisterComponent},
  
  {path:'',redirectTo:`/log-in`,pathMatch:'full'},
  {path:`log-in`,component:LogInComponent},
 
  {path:`forgetpassword`,component:ForgetPasswordComponent},
  {path:`ChangePassword/:token`,component:ChangePasswordComponent},
  {path:`dashBoard`,component:DashBoardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:`note`,component:GetAllNotesComponent},
    {path:`Archive`,component:ArchiveComponent},
    {path:`Trash`,component:TrashComponent}, 
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
