import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../authenticate/auth';
import { CommonModule } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(
    public auth: Auth, 
    private router: Router, 
    private userService:User, 
    private cdr: ChangeDetectorRef) {}

    users: any []=[];

  ngOnInit(){
    this.userService.getUsers().subscribe((data:any)=>{
      this.users = data;
      console.log(this.users);

      this.cdr.detectChanges();
    })
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }


}
