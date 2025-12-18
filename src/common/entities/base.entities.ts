import { Column, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

export abstract class BaseEntity {
  @PrimaryColumn('uuid')
  id: string = v4();

  @Column('timestamp')
  cteatedAt = Date.now();

  @Column('timestamp')
  updatedAt = Date.now();
}
