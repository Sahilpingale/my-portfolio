/*
  Warnings:

  - The primary key for the `ProjectsOnTechStackItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProjectsOnTechStackItem` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `TechStackItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "demoURL" TEXT,
ADD COLUMN     "githubURL" TEXT;

-- AlterTable
ALTER TABLE "ProjectsOnTechStackItem" DROP CONSTRAINT "ProjectsOnTechStackItem_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ProjectsOnTechStackItem_pkey" PRIMARY KEY ("projectId", "techStackItemId");

-- CreateTable
CREATE TABLE "Tool" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Tool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnTools" (
    "projectId" INTEGER NOT NULL,
    "toolId" INTEGER NOT NULL,

    CONSTRAINT "ProjectsOnTools_pkey" PRIMARY KEY ("projectId","toolId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tool_code_key" ON "Tool"("code");

-- CreateIndex
CREATE UNIQUE INDEX "TechStackItem_code_key" ON "TechStackItem"("code");

-- AddForeignKey
ALTER TABLE "ProjectsOnTools" ADD CONSTRAINT "ProjectsOnTools_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTools" ADD CONSTRAINT "ProjectsOnTools_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
