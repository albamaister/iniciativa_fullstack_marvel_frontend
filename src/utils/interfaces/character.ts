export interface Character {
  id: string;
  name?: string;
  title?: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
}
