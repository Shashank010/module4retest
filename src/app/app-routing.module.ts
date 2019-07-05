import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { FindComponent } from './find/find.component';


const routes: Routes = [
  {path:'',redirectTo:'/add',pathMatch:'full'},
  {path:'add',component:AddComponent,pathMatch:'full'},
  {path:'show',component:ShowComponent,pathMatch:'full'},
  {path:'find',component:FindComponent,pathMatch:'full'},
  {path:'**',redirectTo:'/add',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})  

export class AppRoutingModule { }
