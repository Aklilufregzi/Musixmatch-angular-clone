import { Artist, Track } from './artist.model';

export interface Album {
  id: number;
  title: string;
  artist: Artist;
  tracks: Track[];
}
