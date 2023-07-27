import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'assets',
        pathMatch: 'full',
      },
      {
        path: 'assets',
        loadChildren: () =>
          import('./pages/assets-page/assets-page.module').then(
            (m) => m.AssetsPageModule
          ),
      },
      {
        path: 'assets/:id',
        loadChildren: () =>
          import('./pages/asset-details-page/asset-details-page.module').then(
            (m) => m.AssetDetailsPageModule
          ),
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./pages/wallet-page/wallet-page.module').then(
            (m) => m.WalletPageModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
