import { MatMenuModule } from '@angular/material/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BlogFacade } from 'src/app/store/blog.facade';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'p3-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() drawer!: MatDrawer;
  blog$ = this.blogFacade.blog$;

  constructor(private blogFacade: BlogFacade) {}
}

@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [NavbarComponent, OverlayModule, MatMenuModule],
  declarations: [NavbarComponent],
})
export class NavbarModule {}
