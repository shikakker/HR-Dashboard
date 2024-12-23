/*
  # Create employees table

  1. New Tables
    - `employees`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `department` (text)
      - `position` (text)
      - `start_date` (date)
      - `status` (text)
      - `avatar` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `employees` table
    - Add policies for authenticated users to:
      - Read all employees
      - Insert new employees
      - Update employee details
*/

CREATE TABLE IF NOT EXISTS employees (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  department text NOT NULL,
  position text NOT NULL,
  start_date date NOT NULL,
  status text NOT NULL DEFAULT 'active',
  avatar text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow authenticated users to read employees"
  ON employees
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert employees"
  ON employees
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update employees"
  ON employees
  FOR UPDATE
  TO authenticated
  USING (true);