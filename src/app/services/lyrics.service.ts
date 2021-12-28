import { Injectable } from '@angular/core';
import { Lyrics } from '../models/lyrics.model';

@Injectable({
  providedIn: 'root',
})
export class LyricsService {
  lyrics: Lyrics;
  constructor() {
    this.lyrics = {
      id: 1,
      songDuration: 209,
      content: 'Lively up Yourself and dont be no drag',
      lines: [
        {
          content: 'Lively up yourself',
          lineStart: 3,
          lineEnd: 7,
        },
        {
          content: 'and dont be no drag',
          lineStart: 7,
          lineEnd: 10,
        },
      ],
    };
  }

  splitLyrics() {}

  getLyrics() {
    return this.lyrics;
  }
}
