export class Etoile{

  private etoilePleine: string = "★";
  private etoileVide: string = "☆";
  tabEtoiles: string[];
  etoiles: string;

  constructor(rate: number) {
    this.updateRate(rate);
  }

  updateRate(rate: number){
    this.tabEtoiles = [];
    this.etoiles = "";

    for (let i = 0; i < rate; i++) {
      this.etoiles+=this.etoilePleine;
      this.tabEtoiles.push(this.etoilePleine);
    }

    for (let i = rate; i < 5; i++) {
      this.etoiles+=this.etoileVide;
      this.tabEtoiles.push(this.etoileVide);
    }
  }



}
