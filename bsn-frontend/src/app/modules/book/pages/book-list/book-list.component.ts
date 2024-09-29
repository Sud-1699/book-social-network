import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookResponse, PageResponseBookResponse } from 'src/app/commons/models';
import { BookService } from 'src/app/commons/services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  page: number = 0;
  size: number = 5;
  bookResponse: PageResponseBookResponse = {};
  message: string = '';
  alertLevel: string = 'success';

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

  borrowBook(book: BookResponse) {
    this.message = '';
    this.bookService.borrowBook({
      "book-id": book.id as number
    }).subscribe({
      next: () => {
        this.alertLevel = 'success';
        this.message = 'Book successfully added to you'
      },
      error: (error) => {
        console.error(error);
        this.alertLevel = 'error';
        this.message = error.error.error;
      }
    })
  }

  private fetchBooks() {
    this.bookService.findAllBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (books: PageResponseBookResponse) => {
        this.bookResponse = books;
      }
    })
  }
}
