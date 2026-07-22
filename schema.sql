
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS heavy_metals(
    metal_id INTEGER PRIMARY KEY AUTOINCREMENT,
    metal_name TEXT NOT NULL,
    symbol TEXT UNIQUE NOT NULL,
    atomic_number INTEGER,
    description TEXT
);

CREATE TABLE IF NOT EXISTS background_concentration(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metal_id INTEGER NOT NULL,
    background_concentration REAL CHECK(background_concentration>=0),
    unit TEXT,
    reference_source TEXT,
    FOREIGN KEY(metal_id) REFERENCES heavy_metals(metal_id)
);

CREATE TABLE IF NOT EXISTS crops(
    crop_id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_name TEXT UNIQUE NOT NULL,
    crop_category TEXT
);

CREATE TABLE IF NOT EXISTS permissible_limits(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_id INTEGER,
    metal_id INTEGER,
    permissible_limit REAL,
    organization TEXT,
    unit TEXT,
    UNIQUE(crop_id,metal_id),
    FOREIGN KEY(crop_id) REFERENCES crops(crop_id),
    FOREIGN KEY(metal_id) REFERENCES heavy_metals(metal_id)
);

CREATE TABLE IF NOT EXISTS toxicity_response_factor(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    metal_id INTEGER UNIQUE,
    toxicity_factor REAL,
    reference_source TEXT,
    FOREIGN KEY(metal_id) REFERENCES heavy_metals(metal_id)
);

CREATE TABLE IF NOT EXISTS transfer_factor(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_id INTEGER,
    metal_id INTEGER,
    transfer_factor REAL,
    reference_source TEXT,
    UNIQUE(crop_id,metal_id),
    FOREIGN KEY(crop_id) REFERENCES crops(crop_id),
    FOREIGN KEY(metal_id) REFERENCES heavy_metals(metal_id)
);

CREATE TABLE IF NOT EXISTS bioaccumulation_factor(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    crop_id INTEGER,
    metal_id INTEGER,
    BAF REAL,
    reference_source TEXT,
    UNIQUE(crop_id,metal_id),
    FOREIGN KEY(crop_id) REFERENCES crops(crop_id),
    FOREIGN KEY(metal_id) REFERENCES heavy_metals(metal_id)
);

CREATE TABLE IF NOT EXISTS soil_texture(
    texture_id INTEGER PRIMARY KEY AUTOINCREMENT,
    texture_name TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS index_classification(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    index_name TEXT,
    lower_limit REAL,
    upper_limit REAL,
    label TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS recommendations(
    recommendation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    risk_type TEXT,
    recommendation TEXT
);
