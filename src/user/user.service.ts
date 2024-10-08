import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const { phone } = createUserDto;
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (user) {
      return user;
    }

    return this.prisma.user.create({ data: createUserDto });
  }
}
