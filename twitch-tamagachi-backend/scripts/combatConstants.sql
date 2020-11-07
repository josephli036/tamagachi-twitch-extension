
DROP TABLE combatConstants;
CREATE TABLE combatConstants (
    channel_id VARCHAR(30),
    attack_modifier BIGINT,
    jump_modifier BIGINT,
    shield_modifier BIGINT,
    focus_modifier BIGINT,
    battle_formula BIGINT,
    PRIMARY KEY (channel_id)
)
