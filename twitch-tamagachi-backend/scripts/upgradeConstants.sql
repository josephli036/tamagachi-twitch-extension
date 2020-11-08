DROP TABLE combatConstants;
CREATE TABLE combatConstants (
    channel_id VARCHAR(30),
    last_updated TIMESTAMP default CURRENT_TIMESTAMP not null,
    attack_modifier BIGINT,
    jump_modifier BIGINT,
    shield_modifier BIGINT,
    focus_modifier BIGINT,
    battle_formula BIGINT,
    PRIMARY KEY (channel_id)
)