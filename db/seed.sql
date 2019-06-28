CREATE TABLE users (
    ID UUID PRIMARY KEY,
    username VARCHAR(30),
    passwordHash VARCHAR(60),
    dashboards INT[]
);

CREATE TABLE dashboards (
    ID UUID PRIMARY KEY,
    user_id UUID REFERENCES users(ID) ON DELETE CASCADE,
    notes INT[]
);

CREATE TABLE notes (
    ID UUID PRIMARY KEY,
    dashboard_id UUID REFERENCES dashboards(ID) ON DELETE CASCADE,
    contents VARCHAR(30)[],
    is_check_item BOOLEAN,
    is_checked BOOLEAN
);

CREATE TABLE dashboard_permissions (
    user_id UUID REFERENCES users(ID) ON DELETE CASCADE,
    dashboard_id UUID REFERENCES dashboards(ID) ON DELETE CASCADE,
    can_view BOOLEAN,
    can_edit BOOLEAN
);