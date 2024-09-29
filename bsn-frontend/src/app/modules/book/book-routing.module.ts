import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { MyBookComponent } from './pages/my-book/my-book.component';
import { ManageBookComponent } from './pages/manage-book/manage-book.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'my-books',
        component: MyBookComponent
      },
      {
        path: 'manage',
        component: ManageBookComponent
      },
      {
        path: 'manage/:bookId',
        component: ManageBookComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
