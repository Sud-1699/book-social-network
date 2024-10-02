import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { MyBookComponent } from './pages/my-book/my-book.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';
import { BorrowedBookListComponent } from './components/borrowed-book-list/borrowed-book-list.component';
import { authGuard } from 'src/app/commons/services/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: BookListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-books',
        component: MyBookComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage',
        component: ManageBookComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage/:bookId',
        component: ManageBookComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-borrowed-books',
        component: BorrowedBookListComponent,
        canActivate: [authGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
