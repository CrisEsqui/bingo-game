-- DROP FUNCTION IF EXISTS insert_player

-- Insert one player in the table player
CREATE OR REPLACE FUNCTION public.insert_player (
	p_id_number VARCHAR(9),
	p_first_name VARCHAR(256),
	p_last_name VARCHAR(256),
	p_mail VARCHAR(64)
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
	BEGIN TRANSACTION
	INSERT INTO player (id_number, first_name, last_name, mail)
	VALUES (p_id_number, p_first_name, p_last_name, p_mail);
	COMMIT TRANSACTION
	
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
	GROUP BY pl.id_player;
EXCEPTION
	WHEN others THEN
		ROLLBACK TRANSACTION
		RAISE EXCEPTION others;
END 
$BODY$;

-- TEST
-- SELECT * from public.insert_player('1180706897', 'Cristhian', 'Esquivel', 'cr@gmail.com')
