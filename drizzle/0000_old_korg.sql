CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`pid` varchar(191) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`email` varchar(191) NOT NULL,
	`password` varchar(191) NOT NULL,
	`phone` varchar(191) NOT NULL,
	`roleId` int NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
