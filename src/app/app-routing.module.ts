import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: 'user/:id',
    component: UserDetailComponent,
  },
  {
    path: '',
    component: UserTableComponent,
  },
  {
    path: 'create',
    component: UserFormComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
