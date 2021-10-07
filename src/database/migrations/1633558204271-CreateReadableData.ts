import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReadableData1633558204271 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "readable_data",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
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
            name: "z_value",
            type: "float",
          },
          {
            name: "x_value",
            type: "float",
          },
          {
            name: "y_value",
            type: "float",
          },
          {
            name: "streetId",
            type: "uuid",
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
    await queryRunner.dropTable("readable_data");
  }
}
