import { BaseEntity } from 'src/common/entities/base.entities';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  constructor(name: string, description: string, email: string) {
    super();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
