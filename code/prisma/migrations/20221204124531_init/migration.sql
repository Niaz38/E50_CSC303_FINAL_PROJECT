/*
  Warnings:

  - You are about to drop the column `createdAt` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `questionpaper` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `questionpaper` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- AlterTable
ALTER TABLE `question` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `questionpaper` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
