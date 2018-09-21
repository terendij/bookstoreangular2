import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {

  private _rating: number;

  @Input()
  set rating(rate: number){
    this._rating = rate;
    this.buildStars(rate);
  };
  get rating(): number {
    return this._rating;
  }

  @Output()
  ratingChange = new EventEmitter<number>();

  tabEtoiles: boolean[];

  constructor() {
  }

  ngOnInit() {
  }

  buildStars(rate: number){
    this.tabEtoiles = [1, 2, 3, 4, 5].map(i => i<= rate);
  }

  updateRate(rate: number){
    this.ratingChange.emit(rate+1);
  }

  onLeave() {
    this.buildStars(this.rating);
  }

  onEnter(i: number) {
    this.buildStars(i+1);
  }

}
