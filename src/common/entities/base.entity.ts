import { Column, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

export abstract class BaseEntity {
  @PrimaryColumn('uuid')
  id: string = v4();

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  cteatedAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
