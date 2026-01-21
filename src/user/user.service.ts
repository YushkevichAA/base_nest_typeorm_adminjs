import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_REPOSITORY } from 'src/common/constants';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, description, email } = createUserDto;
    const isExist = await this.userRepository.findOneBy({
      email,
    });

    if (isExist) {
      return {
        status: 'error',
        message: 'user is exist',
      };
    }

    const user = new User(name, description, email);
    await this.userRepository.save(user);

    return {
      status: 'success',
      data: user,
    };
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return await this.userRepository.findOneByOrFail({ id } as any);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
