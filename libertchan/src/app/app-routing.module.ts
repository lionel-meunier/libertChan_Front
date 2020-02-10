import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogDetailComponent } from './catalog/catalog-detail/catalog-detail.component';
import { CatalogMosaicComponent } from './catalog/catalog-mosaic/catalog-mosaic.component';
import { AuthGuard } from '@my/auth';

const routes: Routes = [
  {path: '', redirectTo: '/chan/ac', pathMatch: 'full'},
  {path: 'chan/:shortName', component: CatalogDetailComponent},
  {
    path: 'chan/:shortName/mosaic',
    component: CatalogMosaicComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
