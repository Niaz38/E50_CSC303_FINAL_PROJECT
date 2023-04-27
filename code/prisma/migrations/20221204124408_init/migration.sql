-- CreateTable
CREATE TABLE `questionpaper` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqueId` VARCHAR(191) NOT NULL,
    `course_id` VARCHAR(191) NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `questionpaper_uniqueId_key`(`uniqueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `uniqueId` VARCHAR(191) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `marks` INTEGER NOT NULL,
    `co` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obestudent` (
    `student_id` VARCHAR(191) NOT NULL,
    `student_name` VARCHAR(191) NOT NULL,
    `courseID` VARCHAR(191) NOT NULL,
    `section` INTEGER NOT NULL,
    `semester` VARCHAR(191) NOT NULL,
    `total` INTEGER NOT NULL,
    `CO1` INTEGER NOT NULL,
    `CO2` INTEGER NOT NULL,
    `CO3` INTEGER NOT NULL,
    `CO4` INTEGER NOT NULL,
    `grade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`student_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `question_uniqueId_fkey` FOREIGN KEY (`uniqueId`) REFERENCES `questionpaper`(`uniqueId`) ON DELETE RESTRICT ON UPDATE CASCADE;
