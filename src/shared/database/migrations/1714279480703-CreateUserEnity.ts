import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserEnity1714279480703 implements MigrationInterface {
    name = 'CreateUserEnity1714279480703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_ee0e324a6ec4891a73f04f5f77c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balanceId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "balanceId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_ee0e324a6ec4891a73f04f5f77c" FOREIGN KEY ("balanceId") REFERENCES "balances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
