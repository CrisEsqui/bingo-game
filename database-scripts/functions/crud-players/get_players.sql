-- DROP FUNCTION IF EXISTS get_players

-- Returns all the information of the players
-- with their statistics in the game
CREATE OR REPLACE FUNCTION public.get_players(
	)
    RETURNS TABLE(id_player INT,
				  id_number VARCHAR(9),
				  first_name VARCHAR(256),
				  last_name VARCHAR(256),
				  mail VARCHAR(64),
				  won_games BIGINT,
				  played_games BIGINT
				 )
    LANGUAGE 'plpgsql'

AS $BODY$
 
BEGIN
	RETURN QUERY
	SELECT 	pl.id_player AS id_player, 
			pl.id_number AS id_number, 
			pl.first_name AS first_name, 
			pl.last_name AS last_name, 
			pl.mail AS mail,
			COUNT(w.id_winner) AS won_games,
			COUNT(gm.id_game) AS played_games
	FROM player pl
	FULL JOIN winner w ON w.id_player = pl.id_player
	FULL JOIN game gm ON gm.id_game = w.id_game
	GROUP BY pl.id_player
	ORDER BY won_games DESC;
END 
$BODY$;

-- TEST
-- SELECT * from get_players()
