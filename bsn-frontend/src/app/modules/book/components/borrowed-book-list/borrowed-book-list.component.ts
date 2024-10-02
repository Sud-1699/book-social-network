import { Component, OnInit } from '@angular/core';
import { BorrowedBookResponse, PageResponseBorrowedBookResponse } from 'src/app/commons/models';
import { BookService } from 'src/app/commons/services';

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrls: ['./borrowed-book-list.component.scss']
})
export class BorrowedBookListComponent implements OnInit {

  borrowedBooks: PageResponseBorrowedBookResponse = {};
  page: number = 0;
  size: number = 5;

  constructor(
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.fetchAllBorrowedBook();
  }

  returnBorrowedBook(book: BorrowedBookResponse) {

  }

  private fetchAllBorrowedBook() {
    this.bookService.findAllBorrowedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (response: PageResponseBorrowedBookResponse) => {
        this.borrowedBooks = response;
      }
    })
  }
}
