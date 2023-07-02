import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';
import { UserListService } from 'src/app/Services/user-list-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  showFormStatus: boolean = false;
  tableContainerClass: string = 'table-container';

  constructor(private userService: UserService, private userListService: UserListService) {}

  ngOnInit(): void {
    this.getUsers();
    this.userListService.showForm$.subscribe((showForm) => {
      this.showFormStatus = showForm;
      this.updateTableContainerClass();
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error) => {
        console.error('Error retrieving users:', error);
      }
    );
  }

  editUser(user: User): void {
    user.editable = true;
  }

  saveUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      (updatedUser: User) => {
        console.log('User updated:', updatedUser);
        user.editable = false;
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  cancelEdit(user: User): void {
    user.editable = false;
  }

  confirmDeleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.deleteUser(userId);
    }
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  updateTableContainerClass(): void {
    this.tableContainerClass = this.showFormStatus ? 'table-container-form' : 'table-container';
    console.log('Updated tableContainerClass:', this.showFormStatus);
  }
}
