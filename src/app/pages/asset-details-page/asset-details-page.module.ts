import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDetailsPageComponent } from './asset-details-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { AssetsModule } from 'src/app/features/assets/assets.module';
import { AssetDetailsPageRoutingModule } from './asset-details-page-routing.module';

@NgModule({
  declarations: [AssetDetailsPageComponent],
  imports: [
    CommonModule,
    AssetsModule,
    CoreModule,
    AssetDetailsPageRoutingModule,
  ],
})
export class AssetDetailsPageModule {}
