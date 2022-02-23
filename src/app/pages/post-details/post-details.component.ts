import { APIService } from 'src/app/API.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from, tap } from 'rxjs';
import { BlogFacade } from 'src/app/store/blog.facade';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostDetailsComponent  {
  someShit$ = from(this.api.GetPost((this.activatedRoute.snapshot.params as any).id)).pipe(tap(console.log));

  constructor(
    private blogFacade: BlogFacade,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: APIService
  ) {}

  navigateBack() {
    this.router.navigate(['/'])
  }
}
