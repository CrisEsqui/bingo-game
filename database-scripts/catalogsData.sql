-- Guardar datos de las tablas cat�logo
USE bingo_db
GO

INSERT INTO cell_column (letter, min_number, max_number)
VALUES	('A', 1, 15),
		('B', 16, 30),
		('C', 31, 45),
		('D', 46, 60),
		('E', 61, 75);


INSERT INTO game_configuration (configuration_name, configuration_description)
VALUES	('Juego en X', 'El jugador debe llenar la diagonal principal y secundaria para poder ganar el juego..'),
		('Juego en cuatro esquinas', 'El jugador debe llenar las las cuatro esquinas del cart�n para poder ganar el juego.'),
		('Carton lleno', 'El jugador debe llenar todas las celdas del cart�n para poder ganar el juego.'),
		('Juego en Z', 'El jugador debe llenar la primera fila, la diagonal secundaria y la �ltima fila para poder ganar el juego.');