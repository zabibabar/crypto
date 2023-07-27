import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDetailsPageComponent } from './asset-details-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: AssetDetailsPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetDetailsPageRoutingModule {}
