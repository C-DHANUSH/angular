import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from './cart.service';
import { PostService } from './post.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';
  users: any[] = [];
  searchTerm: string = '';

  posts: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private http: HttpClient,private cartService: CartService,private postService: PostService) {}

  // addToCart(item: any) {
  //   this.cartService.addToCart(item);
  // }

  // ngOnInit() {
  //   this.http
  //     .get<any[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((data) => {
  //       this.users = data;
  //     });
  // }

   ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.loading = false;
      },
    });

  // get filteredUsers() {
  //   return this.users.filter((user) =>
  //     user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }
}
}
