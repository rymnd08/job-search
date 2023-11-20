import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SharedService } from './services/shared.service';

export const authGuard: CanActivateFn = (route, state) => {
  const currentPath = route.url[0].path
  const router = inject(Router)
  const shared = inject(SharedService)

  if(shared.getuserLoginState()){
    return true
  }else{
    router.navigate(['/access-denied'])
    return false
  }

};
