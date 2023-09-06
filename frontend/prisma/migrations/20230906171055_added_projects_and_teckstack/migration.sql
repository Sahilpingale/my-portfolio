/*
  Warnings:

  - You are about to drop the `Projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Projects";

-- CreateTable
CREATE TABLE "TechStackItem" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "TechStackItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnTechStackItem" (
    "projectId" INTEGER NOT NULL,
    "techStackItemId" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "ProjectsOnTechStackItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ProjectToTechStackItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToTechStackItem_AB_unique" ON "_ProjectToTechStackItem"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToTechStackItem_B_index" ON "_ProjectToTechStackItem"("B");

-- AddForeignKey
ALTER TABLE "ProjectsOnTechStackItem" ADD CONSTRAINT "ProjectsOnTechStackItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTechStackItem" ADD CONSTRAINT "ProjectsOnTechStackItem_techStackItemId_fkey" FOREIGN KEY ("techStackItemId") REFERENCES "TechStackItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechStackItem" ADD CONSTRAINT "_ProjectToTechStackItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTechStackItem" ADD CONSTRAINT "_ProjectToTechStackItem_B_fkey" FOREIGN KEY ("B") REFERENCES "TechStackItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
