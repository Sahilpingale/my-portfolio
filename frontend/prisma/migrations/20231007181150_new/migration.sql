-- CreateEnum
CREATE TYPE "techStackType" AS ENUM ('TECHSTACK', 'TOOL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "githubURL" TEXT,
    "linkedinURL" TEXT,
    "instagramURL" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TechStackItem" (
    "id" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "type" "techStackType" NOT NULL,

    CONSTRAINT "TechStackItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "purposeAndGoal" TEXT,
    "testimonial" TEXT,
    "githubURL" TEXT,
    "demoURL" TEXT,
    "test" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectsOnTechStackItem" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "techStackItemId" TEXT NOT NULL,

    CONSTRAINT "ProjectsOnTechStackItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TechStackItem_value_key" ON "TechStackItem"("value");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTechStackItem" ADD CONSTRAINT "ProjectsOnTechStackItem_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectsOnTechStackItem" ADD CONSTRAINT "ProjectsOnTechStackItem_techStackItemId_fkey" FOREIGN KEY ("techStackItemId") REFERENCES "TechStackItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
