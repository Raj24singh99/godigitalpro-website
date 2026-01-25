alter table if exists lms_subsections
  add column if not exists video_embed_html text;
