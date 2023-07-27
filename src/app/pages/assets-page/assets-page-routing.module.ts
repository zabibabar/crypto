import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetsPageComponent } from './assets-page.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: '', component: AssetsPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetsPageRoutingModule {}
