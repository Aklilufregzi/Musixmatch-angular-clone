export interface Lyrics {
  id: number;
  songDuration: number;
  content: string;
  lines: Line[];
}

export interface Line {
  content: string;
  lineStart: number;
  lineEnd: number;
}
