import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableLaboratoriesExams1642968340275 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'laboratories_exams',
            columns: [
                {
                    name: 'laboratory_id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: 'exam_id',
                    type: 'integer',
                    isPrimary: true
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
                    isNullable: true
                }
            ],
            foreignKeys: [
                {
                    name: 'laboratory_fg',
                    referencedTableName: 'laboratories',
                    referencedColumnNames: ['id'],
                    columnNames: ['laboratory_id'],
                    onUpdate: 'CASCADE'
                },
                {
                    name: 'exam_fg',
                    referencedTableName: 'exams',
                    referencedColumnNames: ['id'],
                    columnNames: ['exam_id'],
                    onUpdate: 'CASCADE'
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('laboratories_exams', true, true ,true);
    }

}
