import { Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongChoiceComponent } from './wrong-choice/wrong-choice.component';

export const routes: Routes = [
    { path: 'books', component:  BooksComponent },
    { path: 'technology', component: TechnologyComponent },
    {path: '', component: TechnologyComponent},
    {path: '**', component: WrongChoiceComponent}
];
