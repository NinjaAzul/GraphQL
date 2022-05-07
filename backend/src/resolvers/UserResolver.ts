import cripto from 'crypto'

import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { User } from '../models/User'
@Resolver()
export class UserResolver {
  // @Query(() => User)
  // async user() {
  //     return {

  private data: User[] = []

  @Query(() => [User])
  async users() {
    return this.data
  }

  @Mutation(() => User)
  async createUser(@Arg('name') name: string) {
    const user = { id: cripto.randomUUID(), name: name }
    this.data.push(user)
    return user
  }
}
