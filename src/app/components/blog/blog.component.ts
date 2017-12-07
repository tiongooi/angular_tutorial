import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts:Post[]

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts) => this.posts = posts)
  }

}

interface Post {
  body:string,
  // userId:number,
  id:number,
  title:string,
}
