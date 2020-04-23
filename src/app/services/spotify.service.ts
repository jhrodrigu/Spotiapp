import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { 
    console.log('funcioina esta mierda');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQAUizWcsS-9PrVgiiitghPVWBkW-9ewaAMB4qKGEH2O79JZGDEUGo6EfmTx3n_wQrBX5vWe8pfE_eAmhOo'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
     
  } 
}
