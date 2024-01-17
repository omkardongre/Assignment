import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { TechnologyComponent } from './technology/technology.component';


// import { SecondCompComponent } from './second-comp/second-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BooksComponent, TechnologyComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Assignment14';
  showHeader=true;

  constructor(private router:Router){}

  ngOnInit() {
    this.router.events.subscribe((event)=>{
      if (event instanceof NavigationEnd) {
        this.showHeader = !event.url.includes('/books');
        this.showHeader = !event.url.includes('/technology');
        this.showHeader = !event.url.includes('/**');
      }
    })

  }
}
