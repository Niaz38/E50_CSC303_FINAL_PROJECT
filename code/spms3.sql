-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Apr 03, 2023 at 10:39 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spms3`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `courseCode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  `courseTitle` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `marks` int(11) NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `courseCode`, `semester`, `section`, `courseTitle`, `marks`, `courseOutlineId`) VALUES
(1, 'Cse303', 'Summer22', 1, 'Database Management', 100, 1),
(2, 'cse303', 'summer22', 1, 'title', 100, 2);

-- --------------------------------------------------------

--
-- Table structure for table `courseoutline`
--

DROP TABLE IF EXISTS `courseoutline`;
CREATE TABLE IF NOT EXISTS `courseoutline` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `courseoutline`
--

INSERT INTO `courseoutline` (`id`) VALUES
(1),
(2);

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

DROP TABLE IF EXISTS `faculty`;
CREATE TABLE IF NOT EXISTS `faculty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `designation` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `faculty_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `name`, `designation`, `department`, `email`, `courseOutlineId`) VALUES
(1, 'Dr. Sadita Khan', 'Assistant Professor', 'Computer Science & Engineering', 'sadita@iub.edu.bd', 1),
(2, 'Dr mahadi ', 'Faculty', 'Cse', 'mail@mail.com', 2);

-- --------------------------------------------------------

--
-- Table structure for table `obestudent`
--

DROP TABLE IF EXISTS `obestudent`;
CREATE TABLE IF NOT EXISTS `obestudent` (
  `student_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'No Name',
  `courseID` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CS-101',
  `section` int(11) NOT NULL DEFAULT '1',
  `semester` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Fall',
  `total` int(11) NOT NULL DEFAULT '0',
  `CO1` int(11) NOT NULL DEFAULT '0',
  `CO2` int(11) NOT NULL DEFAULT '0',
  `CO3` int(11) NOT NULL DEFAULT '0',
  `CO4` int(11) NOT NULL DEFAULT '0',
  `grade` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'F',
  `educationYear` int(11) NOT NULL DEFAULT '2023',
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `obestudent`
--

INSERT INTO `obestudent` (`student_id`, `student_name`, `courseID`, `section`, `semester`, `total`, `CO1`, `CO2`, `CO3`, `CO4`, `grade`, `educationYear`) VALUES
('2021358', 'Parvez Ahmed Fahim', 'CSE303', 4, 'Autumn22', 45, 57, 5, 10, 14, 'D', 2022),
('2021397', 'Injamam ul Haque', 'CSE303', 4, 'Autumn22', 90, 75, 10, 44, 41, 'A', 2022),
('2021462', 'Istiaq Ahmed', 'CSE303', 4, 'Autumn22', 87, 60, 25, 41, 41, 'A-', 2022),
('2021506', 'Fahim Faisal Rhythm', 'CSE303', 4, 'Autumn22', 65, 64, 5, 41, 19, 'C+', 2022),
('2021556', 'Miraj Hossain Pran', 'CSE303', 4, 'Autumn22', 61, 66, 20, 21, 18, 'C', 2022),
('2021580', 'Anjum Hussain Binu', 'CSE303', 4, 'Autumn22', 60, 57, 5, 27, 28, 'C', 2022),
('2021607', 'Syed Niaz Mohtasim', 'CSE303', 4, 'Autumn22', 90, 81, 10, 40, 38, 'A', 2022),
('2021768', 'Anshara chowdhury', 'CSE303', 4, 'Autumn22', 93, 76, 7, 50, 45, 'A', 2022),
('2021793', 'Sarah Binte Mahbub', 'CSE303', 4, 'Autumn22', 29, 21, 0, 14, 19, 'F', 2022),
('2021967', 'Mahfuja Khanam', 'CSE303', 4, 'Autumn22', 24, 37, 5, 7, 3, 'F', 2022),
('2022185', 'Showrov Mallick', 'CSE303', 4, 'Autumn22', 45, 29, 5, 15, 32, 'D', 2022),
('2022275', 'MAHIMA AHMED PRIOTEE', 'CSE303', 4, 'Autumn22', 45, 48, 5, 20, 10, 'D', 2022),
('2022335', 'Anika Tabassum', 'CSE303', 4, 'Autumn22', 60, 75, 7, 24, 19, 'C', 2022),
('2022430', 'MD ASIF INTESAR', 'CSE303', 4, 'Autumn22', 52, 47, 7, 12, 32, 'D+', 2022),
('2022504', 'MD. ZAHIDUL ISLAM', 'CSE303', 4, 'Autumn22', 23, 26, 0, 7, 11, 'F', 2022),
('2021278', 'ASHIM SAHA', 'CSE303', 4, 'Autumn22', 60, 55, 5, 16, 32, 'C', 2022),
('2021211', 'KM Shaide Afride', 'CSE303', 4, 'Autumn22', 30, 47, 3, 0, 11, 'F', 2022),
('2020924', 'Arif Ul Hoque', 'CSE303', 4, 'Autumn22', 80, 88, 7, 50, 19, 'B+', 2022),
('2010319', 'Faiza Omar Arpita', 'CSE303', 4, 'Autumn22', 91, 87, 3, 48, 41, 'A', 2022),
('1931150', 'Tanjina Sikder Tonny', 'CSE303', 4, 'Autumn22', 45, 45, 7, 15, 12, 'D', 2022),
('1930539', 'Md.Faisal Mahim', 'CSE303', 4, 'Autumn22', 26, 48, 5, 0, 4, 'F', 2022),
('1930426', 'ISHRAQUE RAHMAN', 'CSE303', 4, 'Autumn22', 51, 48, 15, 2, 30, 'D+', 2022),
('1930149', 'Mohsina Tabassum', 'CSE303', 4, 'Autumn22', 45, 36, 5, 4, 27, 'D', 2022),
('1930032', 'Umme Aiman', 'CSE303', 4, 'Autumn22', 61, 59, 5, 20, 33, 'C', 2022),
('1921770', 'Asifur Rahman Shikdar', 'CSE303', 4, 'Autumn22', 29, 32, 0, 5, 18, 'F', 2022),
('1921719', 'Md. Al-Abid Supto', 'CSE303', 4, 'Autumn22', 55, 45, 5, 7, 40, 'C-', 2022),
('1921562', 'FARDIN ISLAM', 'CSE303', 4, 'Autumn22', 60, 81, 5, 15, 20, 'C', 2022),
('1920741', 'ARAFAT AZAZ JESAN', 'CSE303', 4, 'Autumn22', 23, 39, 10, 2, 0, 'F', 2022),
('1920607', 'Tusher Debnath', 'CSE303', 4, 'Autumn22', 55, 55, 5, 10, 32, 'C-', 2022),
('1920511', 'Sabrin Anan Oyshee', 'CSE303', 4, 'Autumn22', 45, 60, 5, 11, 12, 'D', 2022),
('1920301', 'Nihad Tanfiz', 'CSE303', 4, 'Autumn22', 8, 17, 0, 0, 0, 'F', 2022),
('1920280', 'Shahria Sultana', 'CSE303', 4, 'Autumn22', 55, 74, 7, 15, 18, 'C-', 2022),
('1911212', 'ABIR HASAN', 'CSE303', 4, 'Autumn22', 14, 24, 0, 0, 5, 'F', 2022),
('1910902', 'Mohammad Azwad Saadat Sarwar', 'CSE303', 4, 'Autumn22', 4, 8, 0, 0, 0, 'F', 2022),
('1910600', 'Shahash Priya Barua Rion', 'CSE303', 4, 'Autumn22', 9, 21, 0, 0, 0, 'F', 2022),
('1910566', 'Md Sajed', 'CSE303', 4, 'Autumn22', 55, 74, 5, 9, 21, 'C-', 2022),
('1910517', 'Shah Jalal Mohammad Bin Shamim', 'CSE303', 4, 'Autumn22', 45, 42, 7, 5, 25, 'D', 2022),
('1711409', 'Fahim Fardin', 'CSE303', 1, 'Autumn22', 6, 10, 1, 0, 0, 'F', 2022),
('1720718', 'Tashdid Zaman', 'CSE303', 1, 'Autumn22', 33, 39, 5, 0, 18, 'F', 2022),
('1730469', 'Sumaiya Jannat', 'CSE303', 1, 'Autumn22', 16, 5, 5, 1, 13, 'F', 2022),
('1730648', 'Ragib Yasar Alam', 'CSE303', 1, 'Autumn22', 17, 40, 0, 0, 0, 'F', 2022),
('1731017', 'Md Neehad Kadir', 'CSE303', 1, 'Autumn22', 55, 61, 5, 13, 27, 'C-', 2022),
('1731374', 'Md Musaraf Hussain', 'CSE303', 1, 'Autumn22', 50, 54, 7, 10, 25, 'D+', 2022),
('1810665', 'Niaz Murshed Uz Zaman', 'CSE303', 1, 'Autumn22', 10, 22, 0, 0, 0, 'F', 2022),
('1811026', 'Noorjahan Sayeed', 'CSE303', 1, 'Autumn22', 34, 41, 0, 5, 18, 'F', 2022),
('1822089', 'Shamsad Sanzid Ahmed', 'CSE303', 1, 'Autumn22', 10, 22, 0, 0, 0, 'F', 2022),
('1830994', 'Mohammad Abu Hasan', 'CSE303', 1, 'Autumn22', 62, 42, 7, 36, 32, 'C', 2022),
('1910020', 'Mahib Sadman', 'CSE303', 1, 'Autumn22', 45, 28, 7, 25, 21, 'D', 2022),
('1910076', 'Ahnaf Ahmed Oyon', 'CSE303', 1, 'Autumn22', 24, 10, 0, 0, 26, 'F', 2022),
('1910539', 'Farhat Lamisa', 'CSE303', 1, 'Autumn22', 45, 32, 5, 26, 21, 'D', 2022),
('1910773', 'Mahdi Hasan Nabil', 'CSE303', 1, 'Autumn22', 17, 41, 0, 0, 0, 'F', 2022),
('1910807', 'Fatema Tamim', 'CSE303', 1, 'Autumn22', 60, 31, 3, 36, 35, 'C', 2022),
('1910932', 'Rafia Shehnil', 'CSE303', 1, 'Autumn22', 35, 19, 3, 13, 26, 'F', 2022),
('1920408', 'S.M Farhan Shariar', 'CSE303', 1, 'Autumn22', 5, 11, 0, 0, 0, 'F', 2022),
('1920500', 'Sharmin Aktar', 'CSE303', 1, 'Autumn22', 45, 42, 10, 22, 17, 'D', 2022),
('1920926', 'Tanzina Naznin Shaila', 'CSE303', 1, 'Autumn22', 62, 57, 5, 34, 25, 'C', 2022),
('1921433', 'Alphy Shahrin Sadma', 'CSE303', 1, 'Autumn22', 45, 46, 0, 15, 20, 'D', 2022),
('1921498', 'Koushik Dewri', 'CSE303', 1, 'Autumn22', 55, 58, 3, 25, 22, 'C-', 2022),
('1921553', 'Atika Sultana', 'CSE303', 1, 'Autumn22', 52, 45, 0, 23, 31, 'D+', 2022),
('1921627', 'Syed Misba Uddin Marjan', 'CSE303', 1, 'Autumn22', 33, 45, 7, 0, 13, 'F', 2022),
('1921650', 'Md. Riaduzzaman Khan', 'CSE303', 1, 'Autumn22', 26, 23, 0, 14, 13, 'F', 2022),
('1930095', 'Farhat Fatema Jameni', 'CSE303', 1, 'Autumn22', 60, 55, 5, 33, 25, 'C', 2022),
('1930160', 'Nure Jannat Disha', 'CSE303', 1, 'Autumn22', 6, 15, 0, 0, 0, 'F', 2022),
('1930725', 'Foyzul Hoque', 'CSE303', 1, 'Autumn22', 50, 27, 20, 10, 30, 'D+', 2022),
('1930931', 'Saiyara Raquib Oishy', 'CSE303', 1, 'Autumn22', 81, 49, 30, 40, 37, 'B+', 2022),
('1931159', 'Monour Hosan Saif', 'CSE303', 1, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('1931160', 'Syeda Abida Sultana', 'CSE303', 1, 'Autumn22', 26, 20, 0, 5, 20, 'F', 2022),
('2010189', 'Sumaiya Karim Katha', 'CSE303', 1, 'Autumn22', 65, 53, 7, 24, 37, 'C+', 2022),
('2010428', 'Md. Mustafizur Rahman', 'CSE303', 1, 'Autumn22', 6, 15, 0, 0, 0, 'F', 2022),
('2010784', 'Ahsanul Amin Shanto', 'CSE303', 1, 'Autumn22', 47, 41, 5, 25, 20, 'D', 2022),
('2020201', 'Sara Islam', 'CSE303', 1, 'Autumn22', 18, 8, 0, 0, 20, 'F', 2022),
('2020259', 'Mahmuda Nizam', 'CSE303', 1, 'Autumn22', 60, 52, 5, 31, 27, 'C', 2022),
('2020549', 'Mofajjel Hossain Chowdhury', 'CSE303', 1, 'Autumn22', 45, 47, 5, 10, 20, 'D', 2022),
('2020729', 'Sanjida Afrin', 'CSE303', 1, 'Autumn22', 37, 11, 7, 13, 30, 'F', 2022),
('2020877', 'Iram Ahmed Dhrubo', 'CSE303', 1, 'Autumn22', 61, 78, 5, 13, 27, 'C', 2022),
('2021261', 'Sheikh Mehenaz Rahman', 'CSE303', 1, 'Autumn22', 35, 13, 3, 13, 29, 'F', 2022),
('2021535', 'Shazid Chowdhury', 'CSE303', 1, 'Autumn22', 57, 61, 7, 19, 26, 'C-', 2022),
('2021868', 'Hummah Khadija Nirjana', 'CSE303', 1, 'Autumn22', 16, 0, 0, 0, 21, 'F', 2022),
('2022315', 'Tushar Basak', 'CSE303', 1, 'Autumn22', 18, 45, 0, 0, 0, 'F', 2022),
('2022385', 'Jenad Sultana Proma', 'CSE303', 1, 'Autumn22', 33, 33, 3, 15, 13, 'F', 2022),
('2022459', 'Md. Atikul Islam', 'CSE303', 1, 'Autumn22', 31, 3, 0, 19, 28, 'F', 2022),
('2022759', 'Avishak Sikdar', 'CSE303', 1, 'Autumn22', 3, 5, 0, 0, 0, 'F', 2022),
('2022815', 'Md. Rumman Hasan', 'CSE303', 1, 'Autumn22', 3, 5, 0, 0, 0, 'F', 2022),
('2030571', 'Mohammed Raihan Ur Rashid', 'CSE303', 1, 'Autumn22', 65, 34, 20, 40, 29, 'C+', 2022),
('2031361', 'Shahriar Amin Ronok', 'CSE303', 1, 'Autumn22', 32, 25, 0, 7, 23, 'F', 2022),
('2120009', 'Sm Aqib Hossain', 'CSE303', 1, 'Autumn22', 75, 49, 20, 36, 36, 'B', 2022),
('2120117', 'Ezharuddin Jubaer', 'CSE303', 1, 'Autumn22', 90, 67, 28, 44, 37, 'A', 2022),
('2120266', 'Faria Anjum', 'CSE303', 1, 'Autumn22', 90, 64, 30, 46, 36, 'A', 2022),
('2120267', 'Satirtha Mohanta Dibyo', 'CSE303', 1, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('2120326', 'Sami Rashid', 'CSE303', 1, 'Autumn22', 97, 74, 30, 49, 37, 'A', 2022),
('2120552', 'Md Fahim Shahriar', 'CSE303', 1, 'Autumn22', 90, 75, 30, 30, 37, 'A', 2022),
('2121028', 'Rizwan Mohammad Chowdhury', 'CSE303', 1, 'Autumn22', 56, 50, 28, 14, 20, 'C-', 2022),
('1611001', 'Iftakhirul Mohaimin Alif', 'CSE303', 2, 'Autumn22', 52, 43, 5, 28, 23, 'D+', 2022),
('1621313', 'Md. Zahidur Rahman', 'CSE303', 2, 'Autumn22', 30, 34, 5, 3, 16, 'F', 2022),
('1711283', 'Syed Shahriyar Ahmed', 'CSE303', 2, 'Autumn22', 16, 0, 0, 0, 21, 'F', 2022),
('1721820', 'Towhidur Rahman Talukdar', 'CSE303', 2, 'Autumn22', 18, 13, 0, 1, 16, 'F', 2022),
('1730580', 'Chowdhury Mohammad Jarifullah', 'CSE303', 2, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('1731663', 'Shehab Sharar Mazumder', 'CSE303', 2, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('1810246', 'Ashfak Wasif', 'CSE303', 2, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('1810471', 'Shahriar Alam Fahim', 'CSE303', 2, 'Autumn22', 36, 46, 5, 1, 18, 'F', 2022),
('1810656', 'Mustak Ali Virani', 'CSE303', 2, 'Autumn22', 27, 19, 5, 11, 16, 'F', 2022),
('1811016', 'Md. Mehedi Hasan', 'CSE303', 2, 'Autumn22', 6, 13, 0, 0, 0, 'F', 2022),
('1820290', 'Shah Javed  Hossain', 'CSE303', 2, 'Autumn22', 55, 54, 3, 37, 16, 'C-', 2022),
('1820735', 'Imam Tajnoor Hossain Amrit', 'CSE303', 2, 'Autumn22', 55, 68, 3, 11, 25, 'C-', 2022),
('1821013', 'Munabbirul Saqlain', 'CSE303', 2, 'Autumn22', 52, 40, 7, 31, 22, 'D+', 2022),
('1821503', 'Ananya Chakraborty Gourab', 'CSE303', 2, 'Autumn22', 4, 8, 0, 0, 0, 'F', 2022),
('1821984', 'Salma Maliha', 'CSE303', 2, 'Autumn22', 36, 22, 20, 5, 20, 'F', 2022),
('1830022', 'Nahiyan Ibn Ershad', 'CSE303', 2, 'Autumn22', 60, 57, 5, 29, 28, 'C', 2022),
('1830968', 'Md. Yakub Hossain', 'CSE303', 2, 'Autumn22', 20, 41, 2, 1, 0, 'F', 2022),
('1831124', 'Md Tuhin Al Jobayer', 'CSE303', 2, 'Autumn22', 4, 8, 0, 0, 0, 'F', 2022),
('1831178', 'A. K. M. Galib Hasan', 'CSE303', 2, 'Autumn22', 5, 10, 0, 0, 0, 'F', 2022),
('1910343', 'Jahedul Islam', 'CSE303', 2, 'Autumn22', 51, 30, 5, 45, 18, 'D+', 2022),
('1911041', 'Joyita Faruk', 'CSE303', 2, 'Autumn22', 65, 42, 22, 40, 23, 'C+', 2022),
('1911258', 'Maruf Ahmed Seeum', 'CSE303', 2, 'Autumn22', 29, 26, 0, 0, 24, 'F', 2022),
('1921717', 'Khademul  Islam', 'CSE303', 2, 'Autumn22', 10, 22, 0, 0, 0, 'F', 2022),
('1921860', 'Faiyaz Ahmed', 'CSE303', 2, 'Autumn22', 52, 61, 25, 2, 18, 'D+', 2022),
('1921887', 'Fahim Chowdhury', 'CSE303', 2, 'Autumn22', 10, 24, 0, 0, 0, 'F', 2022),
('1921949', 'Zahin Faiza Ahmed', 'CSE303', 2, 'Autumn22', 5, 11, 0, 0, 0, 'F', 2022),
('1930170', 'Soumik Dutta', 'CSE303', 2, 'Autumn22', 62, 58, 30, 24, 16, 'C', 2022),
('1930353', 'Fatema Tuj Johora', 'CSE303', 2, 'Autumn22', 8, 16, 0, 0, 0, 'F', 2022),
('1930374', 'Monosij Kanti Sarker', 'CSE303', 2, 'Autumn22', 32, 33, 0, 0, 24, 'F', 2022),
('1930666', 'Jahid Hasan Milon', 'CSE303', 2, 'Autumn22', 6, 15, 0, 0, 0, 'F', 2022),
('1930818', 'Tahmid Mobassir Khan', 'CSE303', 2, 'Autumn22', 6, 13, 0, 0, 0, 'F', 2022),
('1930921', 'Sk Sadia Tasnim Elma', 'CSE303', 2, 'Autumn22', 50, 46, 5, 19, 22, 'D+', 2022),
('1931102', 'Monjurul Hasan Emon', 'CSE303', 2, 'Autumn22', 9, 20, 0, 0, 0, 'F', 2022),
('1931122', 'Imtiaz Ahmmed', 'CSE303', 2, 'Autumn22', 35, 28, 20, 2, 16, 'F', 2022),
('1931179', 'Ashoat Hossain Shoumik', 'CSE303', 2, 'Autumn22', 36, 41, 7, 7, 16, 'F', 2022),
('1931283', 'Samiur Rahman Sami', 'CSE303', 2, 'Autumn22', 2, 1, 0, 0, 0, 'F', 2022),
('1931375', 'Atm Jannatul Mashroor', 'CSE303', 2, 'Autumn22', 2, 2, 0, 0, 0, 'F', 2022),
('2010361', 'Mohammed Fardeen  Ashraf ', 'CSE303', 2, 'Autumn22', 29, 17, 0, 0, 29, 'F', 2022),
('2020076', 'Abdur Rahman Ayon', 'CSE303', 2, 'Autumn22', 109, 90, 25, 48, 50, 'A', 2022),
('2020345', 'Tahmid Hossain Jit', 'CSE303', 2, 'Autumn22', 55, 34, 5, 2, 50, 'C-', 2022),
('2020374', 'Syed M Ateef Hassan', 'CSE303', 2, 'Autumn22', 21, 9, 0, 0, 23, 'F', 2022),
('2020403', 'Md. Farhin  Islam', 'CSE303', 2, 'Autumn22', 0, 0, 0, 0, 0, 'F', 2022),
('2020678', 'Tohfa Nure Zannat', 'CSE303', 2, 'Autumn22', 8, 18, 0, 0, 0, 'F', 2022),
('2021152', 'Lubaina Ali', 'CSE303', 2, 'Autumn22', 66, 65, 9, 29, 28, 'C+', 2022),
('2021249', 'Shajuti Paul', 'CSE303', 2, 'Autumn22', 2, 2, 0, 0, 0, 'F', 2022),
('2021251', 'Shuvro Sourav Sarker', 'CSE303', 2, 'Autumn22', 30, 31, 7, 2, 16, 'F', 2022),
('2021601', 'Md.Mushfiqul Islam Khan', 'CSE303', 2, 'Autumn22', 45, 34, 7, 2, 30, 'D', 2022),
('2021717', 'Hamida Akter Rumi', 'CSE303', 2, 'Autumn22', 12, 30, 0, 0, 0, 'F', 2022),
('2021843', 'Sadia Binte Jamal', 'CSE303', 2, 'Autumn22', 45, 45, 7, 5, 26, 'D', 2022),
('2021937', 'Sheikh Raiyan  Hossain', 'CSE303', 2, 'Autumn22', 23, 5, 3, 2, 25, 'F', 2022),
('2022056', 'Turag Wilson  Biswas', 'CSE303', 2, 'Autumn22', 18, 0, 0, 0, 25, 'F', 2022),
('2022242', 'Durjoy Mrong', 'CSE303', 2, 'Autumn22', 50, 53, 7, 2, 31, 'D+', 2022),
('2030330', 'Safina Islam Aboni', 'CSE303', 2, 'Autumn22', 34, 37, 0, 0, 24, 'F', 2022),
('2030550', 'Md. Hadiur Rahman Hamim', 'CSE303', 2, 'Autumn22', 38, 30, 5, 4, 29, 'F', 2022),
('2120394', 'Sanjidul Alam Chowdhury  ', 'CSE303', 2, 'Autumn22', 46, 41, 0, 19, 26, 'D', 2022),
('1710153', 'KAZI MOSTAFIR HASSAN SIFAT', 'CSE303', 4, 'Autumn22', 8, 13, 0, 4, 0, 'F', 2022),
('1710365', 'Fardeen Hossain Bhuiyan', 'CSE303', 4, 'Autumn22', 31, 39, 5, 5, 11, 'F', 2022),
('1710645', 'Yamin Zannat', 'CSE303', 4, 'Autumn22', 45, 56, 10, 18, 5, 'D', 2022),
('1710820', 'Tanha Shamree', 'CSE303', 4, 'Autumn22', 50, 70, 5, 17, 11, 'D+', 2022),
('1710937', 'Samiun Nabi', 'CSE303', 4, 'Autumn22', 13, 11, 0, 0, 11, 'F', 2022),
('1810222', 'Zeba Tusnia Towshi', 'CSE303', 4, 'Autumn22', 85, 62, 10, 43, 42, 'A-', 2022),
('1910090', 'Tanvir Ahmed Aadeef', 'CSE303', 4, 'Autumn22', 45, 39, 5, 14, 27, 'D', 2022),
('1910048', 'Rony Ahammed', 'CSE303', 4, 'Autumn22', 3, 5, 0, 0, 0, 'F', 2022),
('1830707', 'MD. AKRAM HOSSAIN', 'CSE303', 4, 'Autumn22', 91, 88, 3, 48, 40, 'A', 2022),
('1821552', 'POLOK KUMAR DAS', 'CSE303', 4, 'Autumn22', 18, 17, 7, 10, 3, 'F', 2022),
('1811135', 'Soumitro Roy', 'CSE303', 4, 'Autumn22', 66, 52, 28, 29, 22, 'C+', 2022),
('2022605', 'Saniul Islam Sani', 'CSE303', 4, 'Autumn22', 25, 34, 0, 0, 14, 'F', 2022),
('2022664', 'Sudipta Saha', 'CSE303', 4, 'Autumn22', 5, 12, 0, 0, 0, 'F', 2022),
('2030021', 'Atika Humayra', 'CSE303', 4, 'Autumn22', 70, 56, 20, 32, 28, 'B-', 2022),
('2030082', 'MD. SHEHAB UN NABI', 'CSE303', 4, 'Autumn22', 45, 41, 0, 13, 28, 'D', 2022),
('2030183', 'JAIMA JAHAN KHAN', 'CSE303', 4, 'Autumn22', 36, 10, 5, 19, 27, 'F', 2022),
('2030467', 'Muhammad Abdullah Al Hasan', 'CSE303', 4, 'Autumn22', 56, 38, 10, 15, 39, 'C-', 2022),
('2030486', 'Hasin Eshrak', 'CSE303', 4, 'Autumn22', 55, 51, 7, 17, 28, 'C-', 2022),
('2030657', 'Nahin Fatima', 'CSE303', 4, 'Autumn22', 37, 23, 3, 7, 29, 'F', 2022);

-- --------------------------------------------------------

--
-- Table structure for table `objectives`
--

DROP TABLE IF EXISTS `objectives`;
CREATE TABLE IF NOT EXISTS `objectives` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `objective` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `objectives_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `objectives`
--

INSERT INTO `objectives` (`id`, `objective`, `courseOutlineId`) VALUES
(1, 'Understand the basic concepts of web application development.', 1),
(2, 'Understand the basic concepts of web application development tools.', 1),
(3, 'Understand the basic concepts of web application development frameworks.', 1),
(4, 'Understand the basic concepts of web application security.', 1),
(5, 'dad', 2);

-- --------------------------------------------------------

--
-- Table structure for table `outcome`
--

DROP TABLE IF EXISTS `outcome`;
CREATE TABLE IF NOT EXISTS `outcome` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outcome` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `outcome_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `outcome`
--

INSERT INTO `outcome` (`id`, `outcome`, `courseOutlineId`) VALUES
(1, 'Develop web applications using HTML, CSS, and JavaScript.', 1),
(2, 'Develop web applications using React.js.', 1),
(3, 'Develop web applications using Node.js.', 1),
(4, 'Develop web applications using Node.js.', 1),
(5, 'dad', 2);

-- --------------------------------------------------------

--
-- Table structure for table `policy`
--

DROP TABLE IF EXISTS `policy`;
CREATE TABLE IF NOT EXISTS `policy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `policy` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `policy_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policy`
--

INSERT INTO `policy` (`id`, `policy`, `courseOutlineId`) VALUES
(1, '70% attendance is mandatory.', 1),
(2, 'Students are expected to be on time for the class.', 1),
(3, 'Students are expected to be polite and respectful to the instructor and other students.', 1),
(4, 'Students are expected to be honest and ethical in their academic work.', 1),
(5, 'adsd', 2);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `question` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `marks` int(11) NOT NULL,
  `co` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `question_uniqueId_fkey` (`uniqueId`)
) ENGINE=MyISAM AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `uniqueId`, `question`, `marks`, `co`) VALUES
(30, 'Cse101Summer221', 'What is a boolean data type ?', 2, 1),
(29, 'Cse101Summer221', 'Analyze : for(int i =5 ;i<=5;i++) {print (\"Hello world\");}', 8, 3);

-- --------------------------------------------------------

--
-- Table structure for table `questionpaper`
--

DROP TABLE IF EXISTS `questionpaper`;
CREATE TABLE IF NOT EXISTS `questionpaper` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniqueId` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `course_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `semester` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `section` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `questionpaper_uniqueId_key` (`uniqueId`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `questionpaper`
--

INSERT INTO `questionpaper` (`id`, `uniqueId`, `course_id`, `semester`, `section`) VALUES
(21, 'Cse101Summer221', 'Cse101', 'Summer22', 1);

-- --------------------------------------------------------

--
-- Table structure for table `resource`
--

DROP TABLE IF EXISTS `resource`;
CREATE TABLE IF NOT EXISTS `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `resource_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `resource`
--

INSERT INTO `resource` (`id`, `title`, `courseOutlineId`) VALUES
(1, 'Introduction to HTML', 1),
(2, 'Introduction to CSS', 1),
(3, 'Introduction to JavaScript', 1),
(4, 'Introduction to React.js', 1),
(5, 'add', 2);

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `week` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `readings` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `courseOutlineId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `schedule_courseOutlineId_fkey` (`courseOutlineId`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `week`, `topic`, `readings`, `courseOutlineId`) VALUES
(1, 'Week 1', 'Web App', 'Introduction to HTML', 1),
(2, 'Week 2', 'HTML', 'Introduction to HTML', 1),
(3, 'Week 3', 'CSS', 'Introduction to HTML', 1),
(4, 'Week 4', 'JS', 'Introduction to HTML', 1),
(5, 'Week 5', 'React', 'Introduction to HTML', 1),
(6, 'Week 6', 'Node', 'Introduction to HTML', 1),
(7, 'Week 7', 'Express', 'Introduction to HTML', 1),
(8, 'Week 8', 'MongoDB', 'Introduction to HTML', 1),
(9, '1', 'dad', 'add', 2);

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('26f6c982-f425-4d8f-845d-2662631fdbdb', '52544954d963725748feaa8c964889f8116285235d9471676d8c7e31aaabc440', '2022-12-04 16:46:50.912', '20221204124408_init', NULL, NULL, '2022-12-04 16:46:50.859', 1),
('5eeccbcb-6c4d-4678-8aa4-070a6c4df535', '28cdfc55d4a69e1d8cbb60bcfe00a8041a0df0a199676b5e96aac4f827be7801', '2022-12-04 16:46:51.017', '20221204124531_init', NULL, NULL, '2022-12-04 16:46:50.913', 1),
('05c6f5cf-d5ff-42fb-92ac-2c609578f9d3', '7503c96c7c000cf310bb0a4c16395c9235af21d07f080a39d29da29c9cc74a25', '2022-12-04 16:46:51.071', '20221204140743_init', NULL, NULL, '2022-12-04 16:46:51.017', 1),
('d2788f29-2f11-4e9a-88ae-85db23c9f22d', '6252a9dbfe376029af89dda9029f54d28a02827488e8a01f51a71d069700e853', '2022-12-04 16:46:51.137', '20221204150820_init', NULL, NULL, '2022-12-04 16:46:51.071', 1),
('7e2fa87b-b15b-4bb5-a91c-0d142cad6a6d', 'f66c802e08eaeb5bdb6c78154975f9cca463b2c33296ff673e661f4d2741b9b0', '2022-12-04 16:46:55.795', '20221204164655_init', NULL, NULL, '2022-12-04 16:46:55.651', 1),
('adda76d7-436b-410a-917e-5ecc775a4343', 'd8375cc81c8adb6e5770dea171b518462347f8ac09a23487b0fa1e2f566e0eaa', '2022-12-06 12:52:10.779', '20221206125210_init', NULL, NULL, '2022-12-06 12:52:10.356', 1),
('be1b9d2e-1c01-4f14-bac3-78f293fe2c9c', '852b02aec6596d20e3b23cb5a583bdde0f4d00fd7aaa2dd62c33ee06e0ccd9c5', '2022-12-06 12:55:49.713', '20221206125549_init', NULL, NULL, '2022-12-06 12:55:49.384', 1),
('f39f18e5-b666-409d-8943-07ec325e6a98', '311331ad7aefc8d5e459c01f941ee1ee400e5202d47bc05fc4d26e532e95a5a9', '2023-03-26 09:38:36.138', '20221207125913_init', NULL, NULL, '2023-03-26 09:38:35.674', 1),
('a6118109-ae53-4101-81f9-a7bf020ddeeb', '695a42f36492fb4ad6e6c8f3534a81c2c83a3a23ff4a55210f34f85c68497048', '2023-03-26 09:40:04.118', '20230326094003_init', NULL, NULL, '2023-03-26 09:40:03.673', 1),
('4e04d8f9-f2b9-4113-9505-659fbe8ec0f0', '046a714a5651a01806a577efbe02db39cca0785cd097afe3a706d86fab4ce6bc', '2023-03-26 10:01:10.476', '20230326100110_init', NULL, NULL, '2023-03-26 10:01:10.043', 1),
('b57dd5aa-400f-4f6e-a2cd-4dfb57350c59', '19bb9df91925fbd018356386172747ff7f3685bce36e034a7f9e2eb9ff71dd0a', '2023-03-26 11:19:54.774', '20230326111954_init', NULL, NULL, '2023-03-26 11:19:54.284', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
