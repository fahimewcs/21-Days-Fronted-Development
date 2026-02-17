import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {

  apiUrl = 'http://localhost:3001/users';
  users: any[] = [];
  editId: number | null = null;

  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>(this.apiUrl).subscribe(users => this.users = users);
  }

  saveUser() {
    const user = this.userForm.value;

    if (this.editId !== null) {
      // Update
      this.http.put(`${this.apiUrl}/${this.editId}`, user).subscribe(() => {
        this.resetForm();
        this.loadUsers();
      });
    } else {
      // Create
      this.http.post(this.apiUrl, user).subscribe((newUser) => {
        this.users.push(newUser);
        this.resetForm();
        // this.loadUsers();
      });
    }
  }

  editUser(user: any) {
    this.userForm.setValue({
      name: user.name,
      address: user.address,
      phone: user.phone
    });
    this.editId = user.id;
  }

  deleteUser(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.loadUsers());
  }

  resetForm() {
    this.userForm.reset();
    this.editId = null;
  }
}

