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

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  randomPicture: string;

  constructor(name: string, description: string, email: string) {
    super();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
