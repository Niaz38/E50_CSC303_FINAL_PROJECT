-- DropIndex
DROP INDEX `post_authorId_authorName_fkey` ON `post`;

-- DropIndex
DROP INDEX `question_uniqueId_fkey` ON `question`;

-- CreateTable
CREATE TABLE `courseoutline` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseCode` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `courseTitle` VARCHAR(191) NOT NULL,
    `marks` INTEGER NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `faculty` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `objectives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `objective` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `policy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `policy` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `outcome` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `outcome` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `schedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `week` VARCHAR(191) NOT NULL,
    `topic` VARCHAR(191) NOT NULL,
    `readings` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `resource` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `courseOutlineId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `post_authorId_authorName_fkey` FOREIGN KEY (`authorId`, `authorName`) REFERENCES `user`(`id`, `name`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
