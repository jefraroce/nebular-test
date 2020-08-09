import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SongsService } from '../../../services/songs.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss']
})
export class SongFormComponent implements OnInit {
  songForm: FormGroup;
  wasSubmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private songsService: SongsService
  ) {
    this.songForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      artista: ['', Validators.required],
      album: ['', Validators.required],
      enlace: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(songData) {
    // this.songForm.reset();

    this.wasSubmitted = true;

    // console.log('nombre ', this.songForm.get('nombre'))

    if (this.songForm.valid) {
      console.warn('Your order has been submitted', songData);

      const song = this.songForm.value;
      console.log('song');
      this.songsService.createSong(song)
        .subscribe(
          (createdSong) => {
            console.log('created song ', createdSong);
          },
          (error) => {
            console.error('Error creating song ', error);
          }
        );
    } else {
      console.error('El formulario no es valido', this.songForm);
    }
  }
}
