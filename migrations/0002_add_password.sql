-- Add password field to users table
ALTER TABLE users ADD COLUMN password TEXT;

-- Create admin user (password: admin1234)
-- Note: In production, use bcrypt or similar hashing
INSERT INTO users (email, name, password, membership_type, free_trial_count)
VALUES ('admin@calcare.ai', 'Admin', 'admin1234', 'premium', 999999)
ON CONFLICT(email) DO UPDATE SET
  password = excluded.password,
  membership_type = 'premium',
  free_trial_count = 999999;
