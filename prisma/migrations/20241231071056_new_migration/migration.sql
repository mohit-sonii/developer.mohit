/*
  Warnings:

  - You are about to drop the column `servicetype` on the `contactform` table. All the data in the column will be lost.
  - Added the required column `service` to the `contactform` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contactform" DROP COLUMN "servicetype",
ADD COLUMN     "service" TEXT NOT NULL,
ALTER COLUMN "contact" SET DATA TYPE TEXT;
