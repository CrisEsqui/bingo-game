
CREATE DATABASE bingo_db
GO

CREATE TABLE cell_column (
	id_cell_column SERIAL PRIMARY KEY NOT NULL,
	letter CHAR NOT NULL,
	min_number SMALLINT NOT NULL CHECK (min_number BETWEEN 1 AND 75),
	max_number SMALLINT NOT NULL CHECK (max_number BETWEEN 1 AND 75)
);


CREATE TABLE game_configuration (
	id_game_configuration SERIAL PRIMARY KEY NOT NULL,
	configuration_name VARCHAR(64) NOT NULL,
	configuration_description TEXT NOT NULL
);


CREATE TABLE game (
	id_game SERIAL PRIMARY KEY NOT NULL,
	id_game_configuration SMALLINT NOT NULL, 
	prize DECIMAL(8, 2) NOT NULL CHECK (prize >= 0),
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT fk_game_game_configuration
	FOREIGN KEY (id_game_configuration) REFERENCES game_configuration(id_game_configuration)
);

CREATE TABLE IF NOT EXISTS draw_number (
	id_draw_number SERIAL PRIMARY KEY NOT NULL,
	id_game INT NOT NULL,
	draw_number SMALLINT NOT NULL,
	CONSTRAINT fk_draw_number_game
	FOREIGN KEY (id_game) REFERENCES game(id_game)
);

CREATE TABLE IF NOT EXISTS player (
	id_player SERIAL PRIMARY KEY NOT NULL,
	id_number VARCHAR(9) UNIQUE NOT NULL,
	first_name VARCHAR(256) NOT NULL,
	last_name VARCHAR(256) NOT NULL,
	mail VARCHAR(64) UNIQUE NOT NULL CHECK (mail LIKE '%@%.com')
);

CREATE TABLE winner (
	id_winner SERIAL PRIMARY KEY NOT NULL,
	id_player INT NOT NULL,
	id_game INT NOT NULL,
	CONSTRAINT fk_winner_game
	FOREIGN KEY (id_game) REFERENCES game(id_game),
	CONSTRAINT fk_winner_player
	FOREIGN KEY (id_player) REFERENCES player(id_player)
);

CREATE TABLE bingo_card (
	id_bingo_card SERIAL PRIMARY KEY NOT NULL,
	id_game INT NOT NULL,
	code VARCHAR(6) NOT NULL CHECK (code ~ '^[A-Z]{3}[0-9]{3}$'),
	assigned BOOL NOT NULL DEFAULT FALSE,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT fk_bingo_card_game
	FOREIGN KEY (id_game) REFERENCES game(id_game)
);

CREATE TABLE assigned_bingo_card (
	id_assigned_bingo_card INT NOT NULL PRIMARY KEY,
	id_player INT NOT NULL ,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
	CONSTRAINT fk_assigned_bingo_card_bingo_card
	FOREIGN KEY (id_assigned_bingo_card) REFERENCES bingo_card(id_bingo_card),
	CONSTRAINT fk_assigned_bingo_card_player
	FOREIGN KEY (id_player) REFERENCES player(id_player)
);

CREATE TABLE cell (
	id_cell SERIAL NOT NULL PRIMARY KEY,
	id_card INT NOT NULL,
	id_cell_column SMALLINT NOT NULL,
	cell_row SMALLINT NOT NULL CHECK (cell_row BETWEEN 1 AND 5),
	cell_value SMALLINT NOT NULL CHECK (cell_value BETWEEN 1 AND 75),
	CONSTRAINT fk_cell_card
	FOREIGN KEY (id_card) REFERENCES bingo_card(id_bingo_card),
	CONSTRAINT fk_cell_cell_column
	FOREIGN KEY (id_cell_column) REFERENCES cell_column(id_cell_column)
);

-- CREATE TABLE comment (
-- 	id_comment SERIAL NOT NULL PRIMARY KEY,
-- 	id_player INT NOT NULL FOREIGN KEY REFERENCES player(id_player),
-- 	id_game INT NOT NULL FOREIGN KEY REFERENCES game(id_game),
-- 	comment VARCHAR(1024) NOT NULL,
-- 	created_at DATETIME NOT NULL DEFAULT NOW()
-- );
