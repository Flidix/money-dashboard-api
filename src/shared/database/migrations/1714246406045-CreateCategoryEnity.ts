import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryEnity1714246406045 implements MigrationInterface {
    name = 'CreateCategoryEnity1714246406045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "money" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "money" ADD CONSTRAINT "FK_721278d9926031fa60936270543" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" DROP CONSTRAINT "FK_721278d9926031fa60936270543"`);
        await queryRunner.query(`ALTER TABLE "money" DROP COLUMN "categoryId"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
