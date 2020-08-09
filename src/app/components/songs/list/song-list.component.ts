import { Component, OnInit } from '@angular/core';
import { Song } from '../../../models/song';
import { SongsService } from '../../../services/songs.service'

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  canciones: Song[] = [];
  cancionSeleccionada;

  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
    this.songsService.getAllSongs()
      .subscribe((canciones) => {
        this.canciones = canciones;
      },
      (error) => {
        console.error('Error: ', error);
      })
  }

  play(cancion) {
    console.log('cancion ', cancion)
    this.cancionSeleccionada = new Audio(cancion.enlace);
    this.cancionSeleccionada.addEventListener('loadeddata', () => {
      console.log('this.cancionSeleccionada', this.cancionSeleccionada)
    })
    console.log('audio ', this.cancionSeleccionada)
    this.cancionSeleccionada.play()
  }

  stop() {
    try {
      this.cancionSeleccionada.pause();
      this.cancionSeleccionada.currentTime = 0;
    } catch(error) {
      console.error('Error deteniendo la canción: ', error);
    }
  }
}
