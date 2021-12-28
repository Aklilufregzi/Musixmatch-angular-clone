import { Lyrics } from './lyrics.model';

export interface Artist {
  id: number;
  name: string;
  cover: string;
  songs?: Track[];
}

export interface Track {
  id?: number;
  name: string;
  artist: string;
  src: string;
  lyrics?: Lyrics;
}
