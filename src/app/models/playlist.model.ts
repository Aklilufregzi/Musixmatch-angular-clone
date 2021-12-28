import { Track } from './artist.model';

export interface Playlist {
  id: number;
  name: string;
  songs: Track[];
}
