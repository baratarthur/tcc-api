import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Street } from "./Street";

@Entity("readable_data")
class ReadableData {
  @PrimaryColumn()
  id?: string;

  @Column()
  num: number;

  @Column()
  z_value?: number;

  @Column()
  x_value?: number;

  @Column()
  y_value?: number;

  @ManyToOne(() => Street, (street) => street.readable_data)
  street: Street;

  @CreateDateColumn()
  created_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { ReadableData };
