import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-data-card',
  templateUrl: './asset-data-card.component.html',
  styleUrls: ['./asset-data-card.component.scss'],
})
export class AssetDataCardComponent {
  @Input() label: string;
  @Input() value: string;
  @Input() set change(value: string) {
    this.changeAmount = Number(value);
  }
  @Input() isLarge: boolean = false;
  changeAmount = 0;
}
