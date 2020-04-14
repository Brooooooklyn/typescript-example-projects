import { Controller, Get, Param } from '@nestjs/common'

import { randomName } from '~/utils'

@Controller('/user')
export class UserController {
  @Get('/:id')
  getUserById(@Param('id') id: string) {
    return {
      _id: id,
      name: randomName(),
    }
  }
}
