import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './user-table/user-table.component';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserTableComponent, UserDetailComponent, UserFormComponent, UserEditComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, ReactiveFormsModule],
  exports: [UserTableComponent],
})
export class UserModule {}
