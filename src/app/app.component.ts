import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {username: 'Peter', age: 13, list: [1, 2, 3, 4, 5, 6, 7, 8, 9]}

  sum(a: number, b: number):number{
    return a + b;
  }

  addProperty(): void{
    (this.user as any)['test123'] = 'test123';
    this.user.list = [...this.user.list, 100]
    console.log(this.user);

  }

  p = Promise.resolve(100)
}
