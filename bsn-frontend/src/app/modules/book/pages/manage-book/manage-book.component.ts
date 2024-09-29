import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookRequest } from 'src/app/commons/models';
import { BookService } from 'src/app/commons/services';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent {

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
    private router: Router
  ) {}

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
}
