DROP TABLE users;
CREATE TABLE users (
    user_id VARCHAR(30),
    channel_id VARCHAR(30),
    attack_stat BIGINT,
    jump_stat BIGINT,
    shield_stat BIGINT,
    focus_stat BIGINT,
    currency BIGINT,
    PRIMARY KEY (user_id, channel_id)
)