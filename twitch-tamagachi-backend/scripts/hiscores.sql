DROP TABLE hiscores;
CREATE TABLE hiscores (
    channel_id VARCHAR(30),
    user_id VARCHAR(30),
    opaque_user_id VARCHAR(30),
	last_updated TIMESTAMP default CURRENT_TIMESTAMP not null,
	points BIGINT,
	PRIMARY KEY (channel_id, opaque_user_id)
);

DROP TABLE dailyConstants;
CREATE TABLE dailyConstants (
    channel_id VARCHAR(30),
    attack_modifier BIGINT,
    jump_modifier BIGINT,
    shield_modifier BIGINT,
    focus_modifier BIGINT,
    battle_formula BIGINT,
    PRIMARY KEY (channel_id)
)

DROP TABLE users;
CREATE TABLE users (
    user_id VARCHAR(30),
    attack_stat BIGINT,
    jump_stat BIGINT,
    shield_stat BIGINT,
    focus_stat BIGINT,
    currency BIGINT,
    PRIMARY KEY (user_id)
)

INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user1', 'Uuser1', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user2', 'Uuser2', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user3', 'Uuser3', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user4', 'Uuser4', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user5', 'Uuser5', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user6', 'Uuser6', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user7', 'Uuser7', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user8', 'Uuser8', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user9', 'Uuser9', current_timestamp, 10);
INSERT INTO hiscores (channel_id,user_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'user10', 'Uuser10', current_timestamp, 10);
INSERT INTO hiscores (channel_id,opaque_user_id, last_updated,points) VALUES ('test_channel', 'UG12X345T6J78', current_timestamp, 0);