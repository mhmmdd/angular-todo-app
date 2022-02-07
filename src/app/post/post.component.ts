import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() yazi: string = '';
  @Output() eventYolla = new EventEmitter<string>();

  post: Post = new Post();

  inputVerisi: string = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }


  yaziYaz() {
    this.postService.getPost(1).subscribe(
      a => this.post = a
    );
    this.yazi = 'Yazi Değişti'
    this.eventYolla.emit(this.yazi);
  }

  inputVeriAl(e: any) {
    this.inputVerisi = e.target.value;
  }




}
