import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableExams1642967865795 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'exams',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'type',
                    type: 'enum',
                    enum: ['clinical_analysis', 'image'],
                    isNullable: false
                },
                {
                    name: 'is_active',
                    type: 'boolean'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: 'now()'
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.dropTable('exams', true, true, true);
    }

}
