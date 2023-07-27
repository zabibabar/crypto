import { Component, Input } from '@angular/core';
import { Asset } from '../../interfaces/asset';

@Component({
  selector: 'app-asset-pricing',
  templateUrl: './asset-pricing.component.html',
  styleUrls: ['./asset-pricing.component.scss'],
})
export class AssetPricingComponent {
  @Input() asset: Asset;
}
