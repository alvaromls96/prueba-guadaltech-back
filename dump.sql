DROP DATABASE IF EXISTS guadaltech;

CREATE DATABASE guadaltech;
USE guadaltech;

CREATE TABLE persons (
  id varchar(36),
  name varchar(255)
);

INSERT INTO persons VALUES
  ('049a0df9-f3c6-40cc-b966-a5a08caa2153', 'Vivienne'),
  ('ced75bb5-ebf0-4af4-834b-4aaf6389b60f', 'Iga'),
  ('f4477317-892c-4917-af80-784fa1176530', 'Juan '),
  ('e4c75b06-c0cf-4f0f-b928-1f55887bf761', 'Riley')
;