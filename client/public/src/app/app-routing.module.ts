import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsDetailPageComponent } from './pages/pets-detail-page/pets-detail-page.component';
import { PetsEditPageComponent } from './pages/pets-edit-page/pets-edit-page.component';
import { PetsNewPageComponent } from './pages/pets-new-page/pets-new-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';

const routes: Routes = [
  {
    path: 'pets',
    children: [
      {
        path: '',
        component: PetsPageComponent
      },
      {
        path: 'new',
        component: PetsNewPageComponent
      },
      {
        path: ':id/edit',
        component: PetsEditPageComponent
      },
      {
        path: ':id',
        component: PetsDetailPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
