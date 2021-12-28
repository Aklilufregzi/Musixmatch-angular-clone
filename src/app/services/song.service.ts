import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Artist, Track } from '../models/artist.model';
import { Playlist } from '../models/playlist.model';
import { LyricsService } from './lyrics.service';

@Injectable({
  providedIn: 'root',
})
export class SongService {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
  playlists: Playlist[];

  constructor(private ls: LyricsService) {
    this.artists = [
      {
        id: 1,
        name: 'Chronixx',
        cover: 'assets/chronix.jpeg',
      },

      {
        id: 2,
        name: 'Buju Banton',
        cover: 'assets/buju.jpeg',
      },

      {
        id: 3,
        name: 'Chronixx',
        cover: 'assets/chronology.jpeg',
      },
      {
        id: 4,
        name: 'Bob Marley',
        cover: 'assets/bob.jpeg',
      },
    ];

    this.playlists = [
      {
        name: 'Best Reggae',
        id: 1,
        songs: [
          {
            name: 'That Day Will come',
            artist: 'Capelton',
            src: 'assets/thatday-will-come.mp3',
          },
        ],
      },
    ];

    this.tracks = [
      {
        id: 1,
        name: 'Sandman ',
        artist: 'Dey',
        src: 'assets/sandman.mp3',
        lyrics: ls.getLyrics(),
      },
      {
        id: 2,
        name: 'Crash',
        artist: 'Unknown Artist',
        src: 'assets/crash.mp3',
        lyrics: ls.getLyrics(),
      },
    ];

    this.albums = [
      {
        id: 1,
        tracks: [
          {
            id: 3,
            name: 'Smile jamaica',
            src: '',
            artist: 'Chronixx',
          },
        ],
        title: 'Chronology',
        artist: {
          name: 'Chronixx',
          id: 1,
          cover: 'assets/chronix.jpeg',
        },
      },
    ];
  }

  getArtists() {
    return this.artists;
  }
  getAlbums() {
    return this.albums;
  }
  getTracks() {
    return this.tracks;
  }
  getPlaylists() {
    return this.playlists;
  }
  addPlaylist(playlist: Playlist) {
    this.playlists.push(playlist);
  }

  getTrack(id) {
    let t;
    t = this.tracks.find((track) => track.id == id);
    return t;
  }
}
