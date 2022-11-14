import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from "../services/user.service";
import { Storage } from "@ionic/storage";
// import {userInfo} from "os";

@Component({
  selector: 'app-you-are-logged-in',
  templateUrl: 'you-are-logged-in.page.html',
  styleUrls: ['you-are-logged-in.page.scss'],
})
export class YouAreLoggedInPage implements OnInit{



  userName: any = '';


  constructor(private router: Router, private authService: AuthService, private userService: UserService, private storage: Storage) {}

  async ngOnInit() {
    const token = await this.storage.get('token');
    this.userName = await this.storage.get('name');
    console.log('logged in')

  }

  async ionViewWillEnter() {

  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl('/home');
    });
  }

  gotoJuguetes() {
    this.router.navigateByUrl('/juguetes-nia');
  };

  gotoCrearJuguete() {
    this.router.navigateByUrl('/juegues-nia-form/0');
  };


}


