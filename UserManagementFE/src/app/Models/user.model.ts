export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name?: string;
  date_of_birth: Date;
  editable?: boolean;

  constructor() {
    this.id = 0;
    this.username = '';
    this.email = '';
    this.password = '';
    this.first_name = '';
    this.last_name = '';
    this.date_of_birth = new Date();
  }
}
