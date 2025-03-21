import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { TableUsersComponent } from './table-users/table-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    TableUsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    
  ]
})
export class UsersModule { }
