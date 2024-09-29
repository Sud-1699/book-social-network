import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookResponse, PageResponseBookResponse } from 'src/app/commons/models';
import { BookService } from 'src/app/commons/services';

@Component({
  selector: 'app-my-book',
  templateUrl: './my-book.component.html',
  styleUrls: ['./my-book.component.scss']
})
export class MyBookComponent implements OnInit {
  page: number = 0;
  size: number = 5;
  bookResponse: PageResponseBookResponse = {};

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  get isLastPage(): boolean {
    return this.page === this.bookResponse.totalPages as number - 1
  }

  
  goToFirstPage() {
    this.page = 0;
    this.fetchBooks();
  }
  
  goToPreviousPage() {
    this.page--;
    this.fetchBooks();
  }
  
  goToPage(page: number) {
    this.page = page;
    this.fetchBooks();
  }
  
  goToNextPage() {
    this.page++;
    this.fetchBooks();
  }

  goToLastPage() {
    this.page = this.bookResponse.totalPages as number - 1;
    this.fetchBooks();
  }

  public archiveBook(book: BookResponse) {

  }

  public shareBook(book: BookResponse) {

  }

  public editBook(book: BookResponse) {

  }

  private fetchBooks() {
    this.bookService.findAllBooksByOwner({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books: PageResponseBookResponse) => {
        this.bookResponse = books;
      }
    })
  }
}
