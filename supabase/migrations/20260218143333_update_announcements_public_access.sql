/*
  # Update announcements table policies for public access

  1. Changes
    - Drop existing restrictive SELECT policy
    - Create new policy allowing anyone (authenticated or not) to view published announcements
    - Keep admin policies unchanged for creating/updating/deleting

  2. Security
    - Public users can only SELECT published announcements
    - Only authenticated users can modify announcements
*/

DROP POLICY IF EXISTS "Authenticated users can view published announcements" ON announcements;

CREATE POLICY "Anyone can view published announcements"
  ON announcements
  FOR SELECT
  TO authenticated, anon
  USING (is_published = true);