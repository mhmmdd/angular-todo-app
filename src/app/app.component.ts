import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'todo-app';

  constructor(private router: Router) {
  }

  eventAl(yazi: string) {
    this.title = yazi;
  }

  contact() {
    this.router.navigateByUrl('contact');
  }

  post() {
    this.router.navigateByUrl('post');
  }
}
