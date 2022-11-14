import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private authService: AuthService) { }
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const logged = await this.authService.isLoggedIn();
    if(!logged){
      this.router.navigateByUrl('/login');
    }else{
      return logged;
    }
  }
}
