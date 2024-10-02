import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { MyBookComponent } from './pages/my-book/my-book.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';
import { FormsModule } from '@angular/forms';
import { BorrowedBookListComponent } from './components/borrowed-book-list/borrowed-book-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    BookListComponent,
    BookCardComponent,
    RatingComponent,
    MyBookComponent,
    ManageBookComponent,
    BorrowedBookListComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ]
})
export class BookModule { }
