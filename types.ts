export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  format: 'EPUB' | 'PDF' | 'MOBI';
  rating: number;
  size: string;
  added: string;
  tags: string[];
}

export interface Download {
  id: string;
  bookId: string;
  progress: number;
  status: 'downloading' | 'queued' | 'completed' | 'failed';
  speed?: string;
}

export interface UserStats {
  dailyDownloads: number;
  maxDailyDownloads: number;
  rank: string;
  points: number;
}