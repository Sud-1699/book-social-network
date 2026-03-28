import { Component } from '@angular/core';
import { BorrowedBookResponse } from 'src/app/commons/models';
import { PageResponseBorrowedBookResponse } from 'src/app/commons/models/page-response-borrowed-book-response';
import { BookService } from 'src/app/commons/services/book.service';

@Component({
  selector: 'app-return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.scss']
})
export class ReturnBooksComponent {
  returnedBooks: PageResponseBorrowedBookResponse = {};
  page: number = 0;
  size: number = 5;
  message: string = '';
  alertLevel: string = 'success';


  constructor(
    private bookService: BookService,
  ) {}

  ngOnInit(): void {
    this.fetchAllReturnedBook();
  }

  private fetchAllReturnedBook() {
    this.bookService.findAllReturnedBooks({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (response: PageResponseBorrowedBookResponse) => {
        this.returnedBooks = response;
      }
    })
  }

  get isLastPage(): boolean {
    return this.page === this.returnedBooks.totalPages as number - 1
  }

  goToFirstPage() {
    this.page = 0;
    this.fetchAllReturnedBook();
  }
  
  goToPreviousPage() {
    this.page--;
    this.fetchAllReturnedBook();
  }
  
  goToPage(page: number) {
    this.page = page;
    this.fetchAllReturnedBook();
  }
  
  goToNextPage() {
    this.page++;
    this.fetchAllReturnedBook();
  }

  goToLastPage() {
    this.page = this.returnedBooks.totalPages as number - 1;
    this.fetchAllReturnedBook();
  }

  approveBookReturn(book: BorrowedBookResponse) {
    if(!book.returned) {
      this.alertLevel = 'error';
      this.message = 'The book is not yet returned';
      return
    };

    this.bookService.approveReturnBorrowedBook({
      "book-id": book.id as number
    }).subscribe({
      next: () => {
        this.alertLevel = 'success';
        this.message = 'Book return approved';
        this.fetchAllReturnedBook();
      }
    });
  }
}
