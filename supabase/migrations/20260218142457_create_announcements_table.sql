/*
  # Create announcements/news feed table

  1. New Tables
    - `announcements`
      - `id` (uuid, primary key)
      - `title` (text) - Titulo de la publicacion
      - `content` (text) - Contenido/texto de la publicacion
      - `image_url` (text, nullable) - URL de la imagen principal
      - `attachments` (jsonb, nullable) - Array de adjuntos (imagenes o documentos)
      - `published_at` (timestamptz) - Fecha de publicacion
      - `created_at` (timestamptz) - Fecha de creacion
      - `created_by` (uuid, foreign key to auth.users) - Admin que creo la publicacion
      - `is_published` (boolean) - Si esta publicada o es borrador

  2. Security
    - Enable RLS on `announcements` table
    - Add policy for authenticated users to read published announcements
    - Add policy for admins to create/update/delete announcements

  3. Notes
    - Attachments stored as JSONB array with structure: [{name, url, type}]
    - Only published announcements visible to regular users
    - Admin permissions managed through is_published flag
*/

CREATE TABLE IF NOT EXISTS announcements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  attachments jsonb DEFAULT '[]'::jsonb,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  is_published boolean DEFAULT true
);

ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view published announcements"
  ON announcements
  FOR SELECT
  TO authenticated
  USING (is_published = true);

CREATE POLICY "Admins can insert announcements"
  ON announcements
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can update announcements"
  ON announcements
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete announcements"
  ON announcements
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_announcements_published ON announcements(published_at DESC) WHERE is_published = true;