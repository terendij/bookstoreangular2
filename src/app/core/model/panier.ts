import {Book} from "./book";

export class PanierRow{

  book?: Book;
  quantite: number = 0;

  constructor(book: Book){
    this.book = book;
    this.quantite = 1;
  }

  get montant(): number{
    let mnt: number = 0;
    if(this.book){
      mnt = this.book.price * this.quantite;
    }
    return mnt;
  }

}

export class Panier {
  liste: PanierRow[];
  constructor(){
    this.liste = [];
  }

  get montant(): number{
    return this.liste
      .map(row => row.montant)
      .reduce((total, value) => total + value, 0);
  }

  get quantite(): number{
    return this.liste
      .map(row => row.quantite)
      .reduce((total, value) => total + value, 0);
  }

  addBook(book: Book) {
    const row:PanierRow = this.findBook(book);
    if(row){
      row.quantite++;
    }else{
      this.liste.push(new PanierRow(book));
    }
  }

  findBook(book: Book):PanierRow{
    return this.liste && this.liste.find(ligne => ligne.book.title === book.title);
  }

  deleteLigne(row: PanierRow) {
    this.liste = this.liste.filter(ligne => ligne.book.title !== row.book.title);
  }
}
