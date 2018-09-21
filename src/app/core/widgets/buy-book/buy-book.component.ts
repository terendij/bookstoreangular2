import {Component, Input, OnInit} from '@angular/core';
import {ActionsService} from "../../services/actions.service";
import {Book} from "../../model/book";

@Component({
  selector: 'app-buy-book',
  templateUrl: './buy-book.component.html',
  styleUrls: ['./buy-book.component.css']
})
export class BuyBookComponent implements OnInit {

  @Input()
  book: Book;

  constructor(public actions: ActionsService) { }

  ngOnInit() {
  }

  buyBook(book: Book){
    this.actions.buyBook(book);
  }

}
