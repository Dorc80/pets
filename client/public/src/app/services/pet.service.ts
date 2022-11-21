import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet, PetResp, PetsResp } from '../model/pet';
import { environment } from "../../environments/environment";

const { baseUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private _http: HttpClient) { }

  createPet(pet: Pet) {
    return this._http.post<PetResp>(`${baseUrl}/pets`, pet);
  }

  getPets() {
    return this._http.get<PetsResp>(`${baseUrl}/pets`);
  }

  getPet(id: string) {
    return this._http.get<PetResp>(`${baseUrl}/pets/${id}`);
  }

  updatePet(pet: Pet) {
    return this._http.put<PetResp>(`${baseUrl}/pets/${pet._id}`, pet)
  }

  deletePet(pet: Pet) {
    return this._http.delete(`${baseUrl}/pets/${pet._id}`);
  }

}
