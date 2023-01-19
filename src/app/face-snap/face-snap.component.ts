import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  constructor(
    private faceSnapsService: FaceSnapsService,
    private router: Router
  ) {}

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;
  //La méthode  ngOnInit() est appelée une fois par instance de component au moment de la création de cette instance.
  ngOnInit() {
    this.buttonText = 'Like';
  }
  // cette méthode permet d'aimer une publication et/ou de supprimer le j'aime.
  onSnap() {
    if (this.buttonText === 'Like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'like');
      this.buttonText = 'Unlike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unlike');
      this.buttonText = 'Like';
    }
  }
  //Permet de ce redigirer vers la page publication.
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
