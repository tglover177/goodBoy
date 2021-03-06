import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map'
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class PetInfoService {
  finishPetLoad: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  petInfo = [];

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get('./assets/pets.json')
      .subscribe(res => {
        this.petInfo.push(res);
        this.finishPetLoad.next(true);
      })
  }
}
