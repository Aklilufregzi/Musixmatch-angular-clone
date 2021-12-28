import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist.model';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.scss'],
})
export class MusiclistComponent implements OnInit {
  artists: Artist[];
  constructor(private router: Router, private songService: SongService) {}

  ngOnInit() {
    this.artists = this.songService.getArtists();
  }

  toAlbum(id) {
    this.router.navigateByUrl(`album/${id}`);
  }
}
