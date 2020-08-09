import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Song } from '../models/song';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private http: HttpClient) { }

  getAllSongs() {
    return this.http.get<Song[]>(`${environment.urlApi}/canciones`);
  }

  getSong(id: string) {
    return this.http.get<Song>(`${environment.urlApi}/canciones/${id}`);
  }

  createSong(song: Song) {
    return this.http.post<Song>(`${environment.urlApi}/canciones`, song);
  }
}
