import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateStreet1633558192047 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "streets",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "quality",
            type: "varchar",
          },
          {
            name: "lat",
            type: "float",
          },
          {
            name: "long",
            type: "float",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("streets");
  }
}
