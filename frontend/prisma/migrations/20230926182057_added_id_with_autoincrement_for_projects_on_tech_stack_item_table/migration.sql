/*
  Warnings:

  - The primary key for the `ProjectsOnTechStackItem` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ProjectsOnTechStackItem" DROP CONSTRAINT "ProjectsOnTechStackItem_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ProjectsOnTechStackItem_pkey" PRIMARY KEY ("id");
