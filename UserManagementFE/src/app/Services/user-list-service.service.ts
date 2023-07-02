import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private userAddedSource = new Subject<void>();
  private showForm = new BehaviorSubject<boolean>(false);

  userAdded$ = this.userAddedSource.asObservable();
  showForm$ = this.showForm;

  constructor() {}

  notifyUserAdded(): void {
    this.userAddedSource.next();
  }

  setShowForm(show: boolean): void {
    this.showForm.next(show);
  }

  getShowForm(): boolean {
    return this.showForm.getValue();
  }
}
