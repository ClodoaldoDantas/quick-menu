CREATE TABLE `establishment` (
	`id` text,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`owner_id` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
