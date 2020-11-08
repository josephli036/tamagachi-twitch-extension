import HTTP from './common.js'

export default {
  /**
   * @typedef {integer} userId
   * @typedef {integer} channelId
   * @typedef {string} attribute
   * @typedef {string} upgradeType
   * @typedef {any} authToken
   */
  upgrade(userId, channelId, attribute, upgradeType, authToken) {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('channelId', channelId);
    formData.append('attribute', attribute);
    formData.append('upgradeType', upgradeType);
    return HTTP({
      method: 'post',
      url: 'upgrades/attempt',
      data: formData,
      headers: {
        'authorization': `Bearer ${authToken}`,
      }
    }).then(response => response.data);
  },

  updatePoints(userId, channelId, authToken) {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('channelId', channelId);
    return HTTP({
      method: 'post',
      url: 'players',
      data: formData,
      headers: {
        'authorization': `Bearer ${authToken}`,
      }
    }).then(response => response.data);
  }
};