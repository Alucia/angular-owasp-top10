import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = sessionStorage.getItem('token');

  return !!token;
};

// ejecutar en console browser sessionStorage.setItem("token", "123")
