// ce service permet de partager des données plus facilement, car en regrouppant ces données la, nous diminons les repétitions.
import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'My best friend since childhood!',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'Paris',
    },

    {
      id: 2,
      title: 'Three Rock Mountain',
      description: 'A wonderful place for hiking.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 0,
      location: 'the mountain',
    },
    {
      id: 3,
      title: 'A good meal',
      description: "Mmmm that's good!",
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 0,
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'like' | 'unlike'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
