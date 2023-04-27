/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id,name]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorName` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `post_authorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- AlterTable
ALTER TABLE `post` ADD COLUMN `authorName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_name_key` ON `user`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `user_id_name_key` ON `user`(`id`, `name`);

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_authorName_fkey` FOREIGN KEY (`authorId`, `authorName`) REFERENCES `user`(`id`, `name`) ON DELETE RESTRICT ON UPDATE CASCADE;
