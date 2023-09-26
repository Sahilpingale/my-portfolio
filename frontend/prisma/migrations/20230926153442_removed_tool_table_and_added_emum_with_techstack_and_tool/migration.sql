/*
  Warnings:

  - You are about to drop the `ProjectsOnTools` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tool` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `type` to the `TechStackItem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "techStackType" AS ENUM ('TECHSTACK', 'TOOL');

-- DropForeignKey
ALTER TABLE "ProjectsOnTools" DROP CONSTRAINT "ProjectsOnTools_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectsOnTools" DROP CONSTRAINT "ProjectsOnTools_toolId_fkey";

-- AlterTable
ALTER TABLE "TechStackItem" ADD COLUMN     "type" "techStackType" NOT NULL;

-- DropTable
DROP TABLE "ProjectsOnTools";

-- DropTable
DROP TABLE "Tool";
