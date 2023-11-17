import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  console.log(route)
  console.log(state)
  const currentPath = route.url[0].path
  const router = inject(Router)
  if(currentPath !== 'main'){
    router.navigate(['/access-denied'])
    return false
  }else{
    return true
  }



 
};
