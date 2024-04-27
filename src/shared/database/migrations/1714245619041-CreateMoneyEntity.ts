import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMoneyEntity1714245619041 implements MigrationInterface {
    name = 'CreateMoneyEntity1714245619041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "money" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, "isPositive" boolean NOT NULL, "description" character varying NOT NULL, "balanceId" integer NOT NULL, CONSTRAINT "PK_532685f389ab66b70115668bf09" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "money" ADD CONSTRAINT "FK_ddec06bd2a5dc6af2e0a6374c0a" FOREIGN KEY ("balanceId") REFERENCES "balances"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "money" DROP CONSTRAINT "FK_ddec06bd2a5dc6af2e0a6374c0a"`);
        await queryRunner.query(`DROP TABLE "money"`);
    }

}
