import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { 
    // console.log('funcioina esta mierda');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBf_s9AaR7IO9vsN4UQzYkTivzMyfga1KWlJrPndTJ9tibboqDib9Lh0GYieURqqS_IcKbTpqH7OQ1uhzY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .pipe( map( (data: any) =>  data.albums.items));
  } 

  getArtist(termino: string ){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBcCetIQ0ev63ttjyw9jGKyqzGA-9Wk9LVGBQjEIzwHekAhxAzHa-ASDRqSR94Y0KA1I650Fb7tTi1eDu0'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
      .pipe( map((data: any) => data.artists.items));
  }
}
