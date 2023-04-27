/*
  Warnings:

  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `course_courseOutlineId_fkey` ON `course`;

-- DropIndex
DROP INDEX `faculty_courseOutlineId_fkey` ON `faculty`;

-- DropIndex
DROP INDEX `objectives_courseOutlineId_fkey` ON `objectives`;

-- DropIndex
DROP INDEX `outcome_courseOutlineId_fkey` ON `outcome`;

-- DropIndex
DROP INDEX `policy_courseOutlineId_fkey` ON `policy`;

-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- DropIndex
DROP INDEX `resource_courseOutlineId_fkey` ON `resource`;

-- DropIndex
DROP INDEX `schedule_courseOutlineId_fkey` ON `schedule`;

-- DropTable
DROP TABLE `post`;

-- DropTable
DROP TABLE `user`;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `faculty` ADD CONSTRAINT `faculty_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `objectives` ADD CONSTRAINT `objectives_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `policy` ADD CONSTRAINT `policy_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `outcome` ADD CONSTRAINT `outcome_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedule` ADD CONSTRAINT `schedule_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `resource` ADD CONSTRAINT `resource_courseOutlineId_fkey` FOREIGN KEY (`courseOutlineId`) REFERENCES `courseoutline`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
