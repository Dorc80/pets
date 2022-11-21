import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';
import { Router } from "@angular/router";
import { HandleErrorService } from 'src/app/services/handleError/handle-error.service';

@Component({
  selector: 'app-pets-new-page',
  templateUrl: './pets-new-page.component.html',
  styleUrls: ['./pets-new-page.component.css']
})
export class PetsNewPageComponent implements OnInit {

  pet: Pet = {
    name: '',
    type: '',
    description: '',
    skill1: '',
    skill2: '',
    skill3: '',
    likes: 0
  };

  errorMsg: string = ''

  constructor(private _petService: PetService, private _router: Router, private _handleErrorService: HandleErrorService) { }

  ngOnInit(): void {
  }

  onAddBtn() {

    let observable = this._petService.createPet(this.pet);
    observable.subscribe({
      next: (resp => {
        this._router.navigate(['/pets']);
      }),
      error: (error => {
        console.log('error', error);
        this.errorMsg = this._handleErrorService.handleError(error);
      })
    })

  }

}
