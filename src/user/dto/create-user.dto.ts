import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '076011377',
    description: 'The phone of the User',
    type: 'string',
  })
  phone: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the User',
    type: 'string',
  })
  name: string;

  @ApiProperty({
    example: '41284712747121',
    description: 'The telegramId of the User',
    type: 'string',
  })
  telegramId?: string;
}
