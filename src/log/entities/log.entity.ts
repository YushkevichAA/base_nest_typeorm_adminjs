import { AbstractBaseEntity } from 'src/common/entities/base.entity';
import { Column, Entity } from 'typeorm';

export interface ILog {
  id: string;
  action: string;
  resource: string;
  userId: string | null;
  recordId: number;
  recordTitle: string | null;
  difference: Record<string, unknown> | null;
  createdAt: Date;
  updatedAt: Date;
}

@Entity({ name: 'logs' })
export class Log extends AbstractBaseEntity implements ILog {
  @Column({ name: 'record_id', type: 'integer', nullable: false })
  public recordId: number;

  @Column({ name: 'record_title', type: 'text', nullable: true, default: '' })
  public recordTitle: string | null;

  @Column({ name: 'difference', type: 'jsonb', nullable: true, default: {} })
  public difference: Record<string, unknown> | null;

  @Column({ name: 'action', type: 'varchar', length: 128, nullable: false })
  public action: string;

  @Column({ name: 'resource', type: 'varchar', length: 128, nullable: false })
  public resource: string;

  @Column({ name: 'user_id', type: 'varchar', nullable: false })
  public userId: string;
}
