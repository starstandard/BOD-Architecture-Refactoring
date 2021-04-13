'use strict';


/**
 * Remove Dealer Store by store-id
 * Remove Dealer Store by store-id
 *
 * dealerId Integer unique identifier for a dealer-id
 * storeId Integer unique identifier for a dealer store
 * acceptLanguage String advertises which languages the client is able to understand (ex: en-US,en;fr-CH) (optional)
 * acceptEncoding String The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back (optional)
 * acceptCharset String Which character encodings the client understands (optional)
 * no response value expected for this operation
 **/
exports.deleteDealersStoresByDealerIdStoreId = function(dealerId,storeId,acceptLanguage,acceptEncoding,acceptCharset) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get All Dealer Stores By Criteria
 * Get All Dealer Stores By Criteria
 *
 * dealerId Integer unique identifier for a dealer-id
 * acceptLanguage String advertises which languages the client is able to understand (ex: en-US,en;fr-CH) (optional)
 * acceptEncoding String The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back (optional)
 * acceptCharset String Which character encodings the client understands (optional)
 * brandCode String Brand Code (optional)
 * storeName String Store Name (optional)
 * storeId String Store Id (optional)
 * returns Stores
 **/
exports.getDealersStoresByDealerId = function(dealerId,acceptLanguage,acceptEncoding,acceptCharset,brandCode,storeName,storeId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "preferredLanguageCode" : "English",
  "comments" : "Great Guy",
  "storesHref" : "/dealers/8b39cb22/stores",
  "departmentsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8",
  "specialRemarksDescription" : "Dealership is closed on Sundays",
  "storeId" : "5ca22014-5107-42e4-b8a7-8dfd5a253ad3",
  "languageCodes" : [ "languageCodes", "languageCodes" ],
  "contactMethodsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8/contactMethods",
  "countryCode" : "USA",
  "storeContact" : "Carson Thomas",
  "storeName" : "Aiden Automotive Dealership",
  "links" : [ {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  }, {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  } ],
  "storeCode" : "AWSE123",
  "brandCode" : [ "brandCode", "brandCode" ]
}, {
  "preferredLanguageCode" : "English",
  "comments" : "Great Guy",
  "storesHref" : "/dealers/8b39cb22/stores",
  "departmentsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8",
  "specialRemarksDescription" : "Dealership is closed on Sundays",
  "storeId" : "5ca22014-5107-42e4-b8a7-8dfd5a253ad3",
  "languageCodes" : [ "languageCodes", "languageCodes" ],
  "contactMethodsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8/contactMethods",
  "countryCode" : "USA",
  "storeContact" : "Carson Thomas",
  "storeName" : "Aiden Automotive Dealership",
  "links" : [ {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  }, {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  } ],
  "storeCode" : "AWSE123",
  "brandCode" : [ "brandCode", "brandCode" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Dealer Store
 * Get Dealer by Store Id
 *
 * dealerId Integer unique identifier for a dealer-id
 * storeId Integer unique identifier for a dealer store
 * acceptLanguage String advertises which languages the client is able to understand (ex: en-US,en;fr-CH) (optional)
 * acceptEncoding String The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back (optional)
 * acceptCharset String Which character encodings the client understands (optional)
 * returns Store
 **/
exports.getDealersStoresByDealerIdStoreId = function(dealerId,storeId,acceptLanguage,acceptEncoding,acceptCharset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "preferredLanguageCode" : "English",
  "comments" : "Great Guy",
  "storesHref" : "/dealers/8b39cb22/stores",
  "departmentsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8",
  "specialRemarksDescription" : "Dealership is closed on Sundays",
  "storeId" : "5ca22014-5107-42e4-b8a7-8dfd5a253ad3",
  "languageCodes" : [ "languageCodes", "languageCodes" ],
  "contactMethodsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8/contactMethods",
  "countryCode" : "USA",
  "storeContact" : "Carson Thomas",
  "storeName" : "Aiden Automotive Dealership",
  "links" : [ {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  }, {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  } ],
  "storeCode" : "AWSE123",
  "brandCode" : [ "brandCode", "brandCode" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Dealer Store
 * Create Dealer Store
 *
 * body Store store
 * dealerId Integer unique identifier for a dealer-id
 * acceptLanguage String advertises which languages the client is able to understand (ex: en-US,en;fr-CH) (optional)
 * acceptEncoding String The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back (optional)
 * acceptCharset String Which character encodings the client understands (optional)
 * returns Store
 **/
exports.postDealersStoresByDealerId = function(body,dealerId,acceptLanguage,acceptEncoding,acceptCharset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "preferredLanguageCode" : "English",
  "comments" : "Great Guy",
  "storesHref" : "/dealers/8b39cb22/stores",
  "departmentsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8",
  "specialRemarksDescription" : "Dealership is closed on Sundays",
  "storeId" : "5ca22014-5107-42e4-b8a7-8dfd5a253ad3",
  "languageCodes" : [ "languageCodes", "languageCodes" ],
  "contactMethodsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8/contactMethods",
  "countryCode" : "USA",
  "storeContact" : "Carson Thomas",
  "storeName" : "Aiden Automotive Dealership",
  "links" : [ {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  }, {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  } ],
  "storeCode" : "AWSE123",
  "brandCode" : [ "brandCode", "brandCode" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update Dealer Store by store-id
 * Update Dealer Store by store-id
 *
 * body Store store
 * dealerId Integer unique identifier for a dealer-id
 * storeId Integer unique identifier for a dealer store
 * acceptLanguage String advertises which languages the client is able to understand (ex: en-US,en;fr-CH) (optional)
 * acceptEncoding String The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back (optional)
 * acceptCharset String Which character encodings the client understands (optional)
 * returns Store
 **/
exports.putDealersStoresByDealerIdStoreId = function(body,dealerId,storeId,acceptLanguage,acceptEncoding,acceptCharset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "preferredLanguageCode" : "English",
  "comments" : "Great Guy",
  "storesHref" : "/dealers/8b39cb22/stores",
  "departmentsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8",
  "specialRemarksDescription" : "Dealership is closed on Sundays",
  "storeId" : "5ca22014-5107-42e4-b8a7-8dfd5a253ad3",
  "languageCodes" : [ "languageCodes", "languageCodes" ],
  "contactMethodsHref" : "/dealers/723a0283/stores/d405c08c/departments/25bbcca8/contactMethods",
  "countryCode" : "USA",
  "storeContact" : "Carson Thomas",
  "storeName" : "Aiden Automotive Dealership",
  "links" : [ {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  }, {
    "method" : "GET",
    "rel" : "self",
    "href" : "/dealers/232231",
    "title" : "Get Dealer Information"
  } ],
  "storeCode" : "AWSE123",
  "brandCode" : [ "brandCode", "brandCode" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

