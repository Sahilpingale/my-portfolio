/*
  Warnings:

  - You are about to drop the column `code` on the `TechStackItem` table. All the data in the column will be lost.
  - You are about to drop the column `code` on the `Tool` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[value]` on the table `TechStackItem` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[value]` on the table `Tool` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `label` to the `TechStackItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `TechStackItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `Tool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Tool` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "TechStackItem_code_key";

-- DropIndex
DROP INDEX "Tool_code_key";

-- AlterTable
ALTER TABLE "TechStackItem" DROP COLUMN "code",
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tool" DROP COLUMN "code",
ADD COLUMN     "label" TEXT NOT NULL,
ADD COLUMN     "value" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TechStackItem_value_key" ON "TechStackItem"("value");

-- CreateIndex
CREATE UNIQUE INDEX "Tool_value_key" ON "Tool"("value");
