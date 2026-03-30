/*
  # Create Crowdfunding Platform Schema

  1. New Tables
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Full project description
      - `short_description` (text) - Brief summary
      - `category` (text) - e.g., Remodelación, Desarrollo, Campaña solidaria
      - `status` (text) - Activo, Financiando, En ejecución, Finalizado
      - `image_url` (text) - Main project image
      - `target_amount` (numeric) - Funding goal
      - `raised_amount` (numeric) - Amount raised so far
      - `min_investment` (numeric) - Minimum investment amount
      - `estimated_return_min` (numeric) - Min estimated return percentage
      - `estimated_return_max` (numeric) - Max estimated return percentage
      - `annual_return` (numeric) - Annualized return percentage
      - `duration_months` (integer) - Project duration
      - `deadline` (timestamptz) - Funding deadline
      - `location` (text) - Physical location
      - `created_at` (timestamptz)
    - `testimonials`
      - `id` (uuid, primary key)
      - `name` (text) - Reviewer name
      - `rating` (integer) - Star rating 1-5
      - `quote` (text) - Review text
      - `project_name` (text) - Associated project
      - `created_at` (timestamptz)
    - `faqs`
      - `id` (uuid, primary key)
      - `question` (text)
      - `answer` (text)
      - `sort_order` (integer) - Display order
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add read-only policies for anonymous users on all tables (public data)
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL DEFAULT '',
  short_description text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'Financiando',
  image_url text NOT NULL DEFAULT '',
  target_amount numeric NOT NULL DEFAULT 0,
  raised_amount numeric NOT NULL DEFAULT 0,
  min_investment numeric NOT NULL DEFAULT 100000,
  estimated_return_min numeric NOT NULL DEFAULT 0,
  estimated_return_max numeric NOT NULL DEFAULT 0,
  annual_return numeric NOT NULL DEFAULT 0,
  duration_months integer NOT NULL DEFAULT 12,
  deadline timestamptz,
  location text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (status IN ('Financiando', 'Activo', 'En ejecución', 'Finalizado'));

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  rating integer NOT NULL DEFAULT 5,
  quote text NOT NULL,
  project_name text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (rating >= 1 AND rating <= 5);

CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view FAQs"
  ON faqs FOR SELECT
  TO anon, authenticated
  USING (sort_order >= 0);