import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../../model/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets-page',
  templateUrl: './pets-page.component.html',
  styleUrls: ['./pets-page.component.css']
})
export class PetsPageComponent implements OnInit {

  pets: Array<Pet> = [];

  constructor(private _petService: PetService, private _router:Router) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets() {
    let observable = this._petService.getPets();
    observable.subscribe({
      next: resp => {
        this.pets = resp.pets;
      },
      error: error => {
        console.log('error', error);
      }
    })
  }

  onDetailBtn(pet: Pet) {
    this._router.navigate(['/pets', pet._id]);
  }
  
  onEditBtn(pet: Pet) {
    this._router.navigate(['/pets', pet._id, 'edit']);
  }

}
