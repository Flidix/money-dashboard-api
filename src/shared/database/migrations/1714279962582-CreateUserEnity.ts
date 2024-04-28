import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserEnity1714279962582 implements MigrationInterface {
    name = 'CreateUserEnity1714279962582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" DROP CONSTRAINT "FK_721278d9926031fa60936270543"`);
        await queryRunner.query(`ALTER TABLE "money" RENAME COLUMN "categoryId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "money" ALTER COLUMN "userId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "money" ADD CONSTRAINT "FK_4012e714b7bca607eba56fea9fd" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" DROP CONSTRAINT "FK_4012e714b7bca607eba56fea9fd"`);
        await queryRunner.query(`ALTER TABLE "money" ALTER COLUMN "userId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "money" RENAME COLUMN "userId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "money" ADD CONSTRAINT "FK_721278d9926031fa60936270543" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
