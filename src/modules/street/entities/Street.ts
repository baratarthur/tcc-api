import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { ReadableData } from "./ReadableData";

@Entity("streets")
class Street {
  @PrimaryColumn()
  id?: string;

  @Column()
  name?: string;

  @Column()
  quality: string;

  @OneToMany(() => ReadableData, (data) => data.street, { cascade: true })
  @JoinTable()
  readable_data: ReadableData[];

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Street };
