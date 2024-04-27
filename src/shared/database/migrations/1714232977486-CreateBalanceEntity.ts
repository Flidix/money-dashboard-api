import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateBalanceEntity1714232977486 implements MigrationInterface {
    name = 'CreateBalanceEntity1714232977486'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "balances" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "balance" integer NOT NULL, "title" character varying NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_74904758e813e401abc3d4261c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "balanceId" integer`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_ee0e324a6ec4891a73f04f5f77c" FOREIGN KEY ("balanceId") REFERENCES "balances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "balances" ADD CONSTRAINT "FK_414a454532d03cd17f4ef40eae2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "balances" DROP CONSTRAINT "FK_414a454532d03cd17f4ef40eae2"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_ee0e324a6ec4891a73f04f5f77c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "balanceId"`);
        await queryRunner.query(`DROP TABLE "balances"`);
    }

}
