import { Component, OnInit } from '@angular/core';
import { BorrowedBookResponse, FeedbackRequest, PageResponseBorrowedBookResponse } from 'src/app/commons/models';
import { BookService, FeedbackService } from 'src/app/commons/services';

@Component({
  selector: 'app-borrowed-book-list',
  templateUrl: './borrowed-book-list.component.html',
  styleUrls: ['./borrowed-book-list.component.scss']
})
export class BorrowedBookListComponent implements OnInit {
  borrowedBooks: PageResponseBorrowedBookResponse = {};
  feedbackRequest: FeedbackRequest = {
    bookId: 0,
    rate: 0,
    comment: ''
  };
  page: number = 0;
  size: number = 5;
  selectedBook: BorrowedBookResponse | undefined = undefined;

  constructor(
    private bookService: BookService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.fetchAllBorrowedBook();
  }

  returnBorrowedBook(book: BorrowedBookResponse) {
    this.selectedBook = book;
    this.feedbackRequest.bookId = book.id as number;
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

  get isLastPage(): boolean {
    return this.page === this.borrowedBooks.totalPages as number - 1
  }

  goToFirstPage() {
    this.page = 0;
    this.fetchAllBorrowedBook();
  }
  
  goToPreviousPage() {
    this.page--;
    this.fetchAllBorrowedBook();
  }
  
  goToPage(page: number) {
    this.page = page;
    this.fetchAllBorrowedBook();
  }
  
  goToNextPage() {
    this.page++;
    this.fetchAllBorrowedBook();
  }

  goToLastPage() {
    this.page = this.borrowedBooks.totalPages as number - 1;
    this.fetchAllBorrowedBook();
  }

  returnBook(withFeedback: boolean) {
    this.bookService.returnBorrowedBook({
      "book-id": this.selectedBook?.id as number
    }).subscribe({
      next: () => {
        if(withFeedback) {
          this.giveFeedback();
        }

        this.selectedBook = undefined;
        this.fetchAllBorrowedBook();
      }
    });
  }

  private giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next: () => {}
    })
  }
}
