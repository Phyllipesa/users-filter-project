import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../_interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  
  @Input({ required: true })
  userList: IUser[] = [];

  @Output('userSelected')
  userSelectedEmitt = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
