/*
  Warnings:

  - You are about to drop the `_ProjectToTechStackItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ProjectToTechStackItem" DROP CONSTRAINT "_ProjectToTechStackItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProjectToTechStackItem" DROP CONSTRAINT "_ProjectToTechStackItem_B_fkey";

-- DropTable
DROP TABLE "_ProjectToTechStackItem";
