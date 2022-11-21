import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Pet } from 'src/app/model/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets-detail-page',
  templateUrl: './pets-detail-page.component.html',
  styleUrls: ['./pets-detail-page.component.css']
})
export class PetsDetailPageComponent implements OnInit {

  pet: Pet = {
    name: '',
    type: '',
    description: '',
    likes: 0
  };

  isLiked: Boolean = false;

  constructor(private _route: ActivatedRoute, private _petService: PetService, private _router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        let id = params['id'];
        this.getPet(id);
      }
    })
  }

  getPet(id: string) {
    this._petService.getPet(id).subscribe({
      next: resp => {
        this.pet = resp.pet
      }
    });
  }

  onLikeBtn() {
    if(!this.isLiked) {
      this.pet.likes++;
      this.updatePet();
    }
  }

  updatePet() {
    this._petService.updatePet(this.pet).subscribe({
      next: resp => {
        console.log('resp.pet', resp);
        this.pet = resp.pet;
        this.isLiked = true
      },
      error: resp => {
        console.log('error', resp);
      }
    })
  }

  deletePet() {
    this._petService.deletePet(this.pet).subscribe({
      next: resp => {
        this._router.navigate(['/']);
      }
    });
  }

  onAdoptBtn() {
    this.deletePet();
  }

}
