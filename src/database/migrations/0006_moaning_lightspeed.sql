ALTER TABLE `establishments` ADD `email` text;--> statement-breakpoint
ALTER TABLE `establishments` ADD `password` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `establishments_email_unique` ON `establishments` (`email`);--> statement-breakpoint
ALTER TABLE `establishments` DROP COLUMN `owner_id`;