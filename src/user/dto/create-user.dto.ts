import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '076011377',
    description: 'The phone of the User',
    type: 'string',
  })
  phone: string;
}
