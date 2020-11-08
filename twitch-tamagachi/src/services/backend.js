import HTTP from "./common.js";

export default {
  getLeaderboard(userId, channelId, authToken) {
    return HTTP({
      method: "get",
      url: "hiscores",
      data: {
        userId: userId,
        channelId: channelId,
      },
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }).then((response) => response.data);
  },
  /**
   * @typedef {integer} userId
   * @typedef {integer} channelId
   * @typedef {string} attribute
   * @typedef {string} upgradeType
   * @typedef {any} authToken
   */
  upgrade(userId, channelId, attribute, upgradeType, authToken) {
    return HTTP({
      method: "post",
      url: "upgrades/attempt",
      data: {
        userId: userId,
        channelId: channelId,
        attribute: attribute,
        upgradeType: upgradeType,
      },
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }).then((response) => response.data);
  },

  updatePoints(userId, channelId, authToken) {
    return HTTP({
      method: "post",
      url: "players",
      contentType: "application/json",
      data: {
        userId: userId,
        channelId: channelId,
      },
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    }).then((response) => response.data);
  },
};
