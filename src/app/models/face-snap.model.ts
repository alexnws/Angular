// Ce modéle de donné comporte toute les propriétés d'une publication. Permet de centraliser les données de plusieurs publications.
export class FaceSnap {
  id!: number;
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?: string;
}
