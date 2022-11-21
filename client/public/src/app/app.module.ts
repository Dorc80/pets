import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HandleErrorService } from './services/handleError/handle-error.service';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetsNewPageComponent } from './pages/pets-new-page/pets-new-page.component';
import { PetsDetailPageComponent } from './pages/pets-detail-page/pets-detail-page.component';
import { PetsEditPageComponent } from './pages/pets-edit-page/pets-edit-page.component';
import { FormsModule } from "@angular/forms";
import { PetService } from './services/pet.service';
import { HttpClientModule } from "@angular/common/http";
import { PetComponent } from './components/pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsPageComponent,
    PetsNewPageComponent,
    PetsDetailPageComponent,
    PetsEditPageComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HandleErrorService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
