import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { UserListService } from 'src/app/Services/user-list-service.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
  animations: [
    trigger('formCollapseAnimation', [
      state('open', style({ opacity: 1 })),
      state('closed', style({ opacity: 0, height: '0', padding: '0' })),
      transition('open <=> closed', animate('200ms ease-in-out'))
    ]),
    trigger('formFieldAnimation', [
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('open <=> closed', animate('1000ms ease-in-out'))
    ]),
    trigger('buttonAnimation', [
      state('open', style({
        transform: 'scale(1)'
      })),
      state('closed', style({
        transform: 'scale(0)'
      })),
      transition('open <=> closed', animate('1000ms ease-in-out'))
    ])
  ]
})
export class UserAddComponent {
  user: User = new User();
  showForm: boolean = false;
  formState: 'open' | 'closed' = 'closed';

  constructor(private userService: UserService, private userListService: UserListService) {}

  ngOnInit(): void {}

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      (response: User) => {
        console.log('User added:', response);

        this.userListService.notifyUserAdded();
        this.user = new User();
      },
      (error) => {
        console.error('Error adding user:', error);
        alert("Please make sure that all mandatory fields are filled");
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.userListService.setShowForm(this.showForm);
  }
}
