-- DROP FUNCTION get_game_configuration
CREATE OR REPLACE FUNCTION get_game_configuration()
RETURNS TABLE (
  id_config INT, 
  config_name VARCHAR(64),
  config_description TEXT
)
LANGUAGE 'plpgsql'
AS $BODY$ 
BEGIN
  RETURN QUERY
  SELECT 
    id_game_configuration AS id_config,
    configuration_name AS config_name,
    configuration_description AS config_description
  FROM game_configuration;
END 
$BODY$;