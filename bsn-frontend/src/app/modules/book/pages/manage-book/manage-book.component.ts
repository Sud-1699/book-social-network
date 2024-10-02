import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookRequest, BookResponse } from 'src/app/commons/models';
import { BookService } from 'src/app/commons/services';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  errorMsg: Array<string> = [];
  bookRequest: BookRequest = {
    authorName: '',
    isbn: '',
    synopsis: '',
    title: ''
  };
  selectedBookCover: any;
  selectedCover: string = '../../../../../assets/images/no-cover.jpg';

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['bookId'];
    if(bookId) {
      this.getBookById(bookId);
    }
  }

  selectedFile(event: any) {
    this.selectedBookCover = event?.target.files[0];
    console.log(this.selectedBookCover);
    if(this.selectedBookCover) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedCover = reader.result as string;
      }

      reader.readAsDataURL(this.selectedBookCover);
    }
  }

  saveBook() {
    this.errorMsg = [];
    this.bookService.saveBook({
      body: this.bookRequest
    }).subscribe({
      next: (bookId: number) =>{
        this.bookService.uploadBookCover({
          "book-id": bookId,
          body: {
            file: this.selectedBookCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/books/my-books']);
          }
        })
      },
      error: (error) => {
        this.errorMsg = error.error.validationErrors;
      }
    })
  }

  private getBookById(bookId: number) {
    this.bookService.findBookById({
      "book-id": bookId
    }).subscribe({
      next: (response: BookResponse) => {
        this.bookRequest = {
          authorName: response.authorName!,
          isbn: response.isbn!,
          synopsis: response.synopsis!,
          title: response.title!,
          shareable: response.shareable
        }

        if(response.cover) {
          this.selectedCover = `data:image/jpg;base64,${response.cover}`
        }
      }
    })
  }
}
