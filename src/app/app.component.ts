import { IUser } from './_interfaces/user/user.interface';
import { UsersList } from './_data/users-list';
import { IFilterOption } from './_interfaces/filter-options-interface';
import { filterUserList } from './utils/filter-users-list';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  
  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = UsersList
      this.usersListFiltered = UsersList
    }, 1)
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IFilterOption) {
    console.log(filterOptions);

    this.usersListFiltered = filterUserList(filterOptions, this.usersList)
  }
}
