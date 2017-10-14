import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  courts: any[];
  games: any[];
  participations: any[];
  users: any[];
  visitedcounts: any[];

  constructor(public http: Http) {
    // Get all the courts
    this.http.get('./assets/courts.json').subscribe(data => {
      this.courts = JSON.parse(data['_body']);
      console.log(this.courts);
    });

    // Get all the games
    this.http.get('./assets/games.json').subscribe(data => {
      this.games = JSON.parse(data['_body']);
      console.log(this.games);
    });

    // Get all the participations
    this.http.get('./assets/participation.json').subscribe(data => {
      this.participations = JSON.parse(data['_body']);
      console.log(this.participations);
    });

    // Get all the assets
    this.http.get('./assets/users.json').subscribe(data => {
      this.users = JSON.parse(data['_body']);
      console.log(this.users);
    });

    // Get all the visited counts
    this.http.get('./assets/visitedcounts.json').subscribe(data => {
      this.visitedcounts = JSON.parse(data['_body']);
      console.log(this.visitedcounts);
    });
  }

}
