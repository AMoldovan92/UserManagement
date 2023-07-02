import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserAddComponent } from './Components/user-add/user-add.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add-user', component: UserAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
