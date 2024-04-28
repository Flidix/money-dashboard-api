import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryEnity1714280093666 implements MigrationInterface {
    name = 'CreateCategoryEnity1714280093666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "money" ADD CONSTRAINT "FK_721278d9926031fa60936270543" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" DROP CONSTRAINT "FK_721278d9926031fa60936270543"`);
        await queryRunner.query(`ALTER TABLE "money" DROP COLUMN "categoryId"`);
    }

}
