'use strict';

var utils = require('../utils/writer.js');
var DealersStores = require('../service/DealersStoresService');

module.exports.deleteDealersStoresByDealerIdStoreId = function deleteDealersStoresByDealerIdStoreId (req, res, next, dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset) {
  DealersStores.deleteDealersStoresByDealerIdStoreId(dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDealersStoresByDealerId = function getDealersStoresByDealerId (req, res, next, dealerId, acceptLanguage, acceptEncoding, acceptCharset, brandCode, storeName, storeId) {
  DealersStores.getDealersStoresByDealerId(dealerId, acceptLanguage, acceptEncoding, acceptCharset, brandCode, storeName, storeId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDealersStoresByDealerIdStoreId = function getDealersStoresByDealerIdStoreId (req, res, next, dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset) {
  DealersStores.getDealersStoresByDealerIdStoreId(dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDealersStoresByDealerId = function postDealersStoresByDealerId (req, res, next, body, dealerId, acceptLanguage, acceptEncoding, acceptCharset) {
  DealersStores.postDealersStoresByDealerId(body, dealerId, acceptLanguage, acceptEncoding, acceptCharset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDealersStoresByDealerIdStoreId = function putDealersStoresByDealerIdStoreId (req, res, next, body, dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset) {
  DealersStores.putDealersStoresByDealerIdStoreId(body, dealerId, storeId, acceptLanguage, acceptEncoding, acceptCharset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
