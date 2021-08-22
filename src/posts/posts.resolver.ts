import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post, NewPost, UpdatePost } from 'src/graphql';
import { NotFoundException } from '@nestjs/common';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postService: PostsService) {}

  @Query('posts')
  async posts() {
    throw new NotFoundException();
    return this.postService.posts();
  }

  @Query('post')
  async post(@Args('id') args: string) {
    return this.postService.post(args);
  }

  @Mutation('createPost')
  async create(@Args('input') args: NewPost) {
    return this.postService.createPost(args);
  }

  @Mutation('updatePost')
  async update(@Args('input') args: UpdatePost) {
    return this.postService.updatePost(args);
  }

  @Mutation('deletePost')
  async delete(@Args('id') args: string) {
    return this.postService.deletePost(args);
  }
}
