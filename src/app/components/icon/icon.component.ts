import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  Input,
} from '@angular/core';

@Component({
  selector: 'p3-icon',
  template: `
      <a mat-button
        ><mat-icon class="material-icons-outlined"> {{ icon }} </mat-icon></a
      >
    `,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnInit {
  @Input() icon: string = '';
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, MatIconModule],
  exports: [IconComponent],
})
export class IconModule {}
