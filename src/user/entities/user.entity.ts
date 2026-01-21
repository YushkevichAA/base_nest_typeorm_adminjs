import { Role } from './../../common/enums/roles.enum';
import { AbstractBaseEntity } from './../../common/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends AbstractBaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  // прикрутить в каком-либо виде ролевую модель на взаимодействие с системой

  @Column({ enum: Role, default: Role.GUEST })
  role: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  randomPicture: string;

  // обработать сохраненный пароль хэшом/ при первом входе пользователя потребовать создать пароль
  @Column({
    nullable: false,
    default: 'no_password',
  })
  password: string;

  constructor(name: string, description: string, email: string) {
    super();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
