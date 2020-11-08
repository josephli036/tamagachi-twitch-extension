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
      url: 'upgrade/attempt',
      data: formData,
      headers: {
        'x-extension-jwt': authToken,
      }
    }).then(response => response.data);
  },
};