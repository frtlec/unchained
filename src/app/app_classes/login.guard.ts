import { CanActivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot, Router } from '@angular/router';
import {Injectable} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(   private authService:AuthService,
        private router:Router) {
     
        
    }

   canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    let logged=this.authService.loggedIn();
    if(logged){
        return true;
    }
    this.router.navigateByUrl("/Auth");

    return false;

   }




}
