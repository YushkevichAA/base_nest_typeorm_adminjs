import { CreateDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 } from 'uuid';

export abstract class BaseEntity {
  @PrimaryColumn('uuid')
  id: string = v4();

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  cteatedAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
