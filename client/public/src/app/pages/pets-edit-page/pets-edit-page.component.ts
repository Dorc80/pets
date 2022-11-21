import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HandleErrorService } from 'src/app/services/handleError/handle-error.service';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'app-pets-edit-page',
  templateUrl: './pets-edit-page.component.html',
  styleUrls: ['./pets-edit-page.component.css']
})
export class PetsEditPageComponent implements OnInit {

  pet: Pet = {
    name: '',
    type: '',
    description: '',
    likes: 0
  }

  errorMsg: string = '';

  constructor(
    private _route: ActivatedRoute,
    private _petService: PetService,
    private _router: Router,
    private _handleErrorService: HandleErrorService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        const id = params['id'];
        console.log('id', id);
        this.getPet(id);
      }
    });
  }

  getPet(id: string) {
    this._petService.getPet(id).subscribe({
      next: resp => {
        this.pet = resp.pet;
      },
      error: error => {
        console.log('error', error);
      }
    });
  }

  onEditBtn() {
    this.udpatePet();
  }

  udpatePet() {
    this._petService.updatePet(this.pet).subscribe({
      next: resp => {
        this.pet = resp.pet;
        this._router.navigate(['/']);
      },
      error: resp => {
        this.errorMsg = this._handleErrorService.handleError(resp);
      }
    });
  }

}
