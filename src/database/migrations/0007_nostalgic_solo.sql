DROP INDEX IF EXISTS "establishments_email_unique";--> statement-breakpoint
ALTER TABLE `establishments` ALTER COLUMN "email" TO "email" text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `establishments_email_unique` ON `establishments` (`email`);