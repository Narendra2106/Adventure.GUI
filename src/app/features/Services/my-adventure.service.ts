import { Injectable,Inject } from '@angular/core';
import {AdventureDecisionTree} from '../model/Adventure-Decision-Tree';
import {Adventure} from '../model/Adventure';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MyAdventureService {

  constructor(@Inject('API_URL') private readonly baseUrl: any, private readonly http: HttpClient) {

  }

  getAdventure(id: number): Observable<Adventure> {
    return this.http.get<Adventure>(`${this.baseUrl}/adventure/${id}`);
  }

  getAllAdventure(): Observable<AdventureDecisionTree> {
    return this.http.get<AdventureDecisionTree>(`${this.baseUrl}/adventure/decisionTree`);
  }


}
