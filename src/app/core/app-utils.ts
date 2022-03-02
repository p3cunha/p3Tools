import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AppUtils {
  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/']);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl('/'+ route);
  }
}
