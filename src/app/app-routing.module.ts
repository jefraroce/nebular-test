import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongFormComponent } from './components/songs/form/song-form.component';
import { SongListComponent } from './components/songs/list/song-list.component';


const routes: Routes = [
  {
    path: '',
    component: SongFormComponent
  },
  {
    path: 'canciones',
    component: SongListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
