import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsPageRoutingModule } from './assets-page-routing.module';
import { AssetsPageComponent } from './assets-page.component';
import { CoreModule } from 'src/app/core/core.module';
import { AssetsModule } from 'src/app/features/assets/assets.module';

@NgModule({
  declarations: [AssetsPageComponent],
  imports: [CommonModule, AssetsPageRoutingModule, CoreModule, AssetsModule],
})
export class AssetsPageModule {}
