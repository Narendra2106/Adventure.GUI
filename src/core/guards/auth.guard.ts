import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { UserAuthenticationService } from '../../auth/services/user-authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return true;

}
}
