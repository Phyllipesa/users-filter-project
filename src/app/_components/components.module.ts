import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '../_angular-material/angular-material/angular-material.module';

import { PipesModule } from '../_pipes/pipes.module';
import { FilterComponent } from './filter/filter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FilterComponent,
    UsersListComponent,
    UserDetailsComponent,
  ],
  imports: [
    FormsModule,
    PipesModule,
    CommonModule,
    AngularMaterialModule,
  ],
  exports: [
    FilterComponent,
    UsersListComponent,
    UserDetailsComponent,
  ]
})
export class ComponentsModule { }
