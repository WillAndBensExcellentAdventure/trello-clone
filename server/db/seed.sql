CREATE DATABASE trellio;

\c trellio;

CREATE TABLE users(
    ID UUID PRIMARY KEY,
    username VARCHAR(30) UNIQUE,
    passwordHash VARCHAR(60)
);

CREATE TABLE dashboards(
    ID UUID PRIMARY KEY,
    user_id UUID REFERENCES users(ID) ON DELETE CASCADE,
    title VARCHAR(20)
);

CREATE TABLE note(
    ID UUID PRIMARY KEY,
    dashboard_id UUID REFERENCES dashboards(ID) ON DELETE CASCADE
);

CREATE TABLE note_content(
    ID UUID PRIMARY KEY,
    note_id UUID REFERENCES note(ID) ON DELETE CASCADE,
    is_check_item BOOLEAN,
    is_checked BOOLEAN
    content VARCHAR(50)
);

CREATE TABLE user_dash_link(
    user_id UUID REFERENCES users(ID) ON DELETE CASCADE,
    dashboard_id UUID REFERENCES dashboards(ID) ON DELETE CASCADE,
    can_view BOOLEAN,
    can_edit BOOLEAN
);

CREATE TABLE dash_note_link(
    dashboard_id UUID REFERENCES dashboards(ID) ON DELETE CASCADE,
    note_id UUID REFERENCES note(ID) ON DELETE CASCADE
);

CREATE TABLE note_content_link(
    note_id UUID REFERENCES note(ID) ON DELETE CASCADE,
    note_content_id UUID REFERENCES note_content(ID) ON DELETE CASCADE
);