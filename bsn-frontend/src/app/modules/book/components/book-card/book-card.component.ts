import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookResponse } from 'src/app/commons/models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  private _book: BookResponse = {};
  get book() {
    return this._book;
  }
  
  @Input()
  set book(value: BookResponse) {
    this._book = value;
  }

  private _bookCover: string | undefined;
  get bookCover() {
    if(this._book.cover) return `data:image/jpg;base64,${this._book.cover}`;
    return '../../../../../assets/images/no-cover.jpg';
  }

  private _manage: boolean = false;
  get manage() {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }

  @Output()
  public borrow = new EventEmitter<BookResponse>();
  @Output()
  public waitList = new EventEmitter<BookResponse>();
  @Output()
  public edit = new EventEmitter<BookResponse>();
  @Output()
  public share = new EventEmitter<BookResponse>();
  @Output()
  public archive = new EventEmitter<BookResponse>();

  public showDetail() {

  }

  public borrowBook() {
    this.borrow.emit(this._book);
  }

  public addToWaitList() {
    this.waitList.emit(this._book);
  }

  public editBook() {
    this.edit.emit(this._book);
  }

  public shareBook() {
    this.share.emit(this._book);
  }

  public archiveBook() {
    this.archive.emit(this._book);
  }
}
