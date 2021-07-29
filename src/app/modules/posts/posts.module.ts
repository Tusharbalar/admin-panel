import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    // MatIconModule,
    // MatFormFieldModule,
  ]
})
export class PostsModule { }
