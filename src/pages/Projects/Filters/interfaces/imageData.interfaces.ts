export type Image = ImageModel[];

export interface ImageModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
