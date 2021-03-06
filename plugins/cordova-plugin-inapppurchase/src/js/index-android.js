/*!
 *
 * Author: Alex Disler (alexdisler.com)
 * github.com/alexdisler/cordova-plugin-inapppurchase
 *
 * Licensed under the MIT license. Please see README for more information.
 *
 */

const inAppPurchase = { utils };

const createIapError = (reject) => {
  return (err = {}) => {
    err.errorCode = err.code;
    return reject(err);
  };
};

const nativeCall = (name, args = []) => {
  return new Promise((resolve, reject) => {
    window.cordova.exec((res) => {
      resolve(res);
    }, createIapError(reject), 'InAppBillingV3', name, args);
  });
};

inAppPurchase.getProducts = (productIds) => {
  return new Promise((resolve, reject) => {
    if(!inAppPurchase.utils.validArrayOfStrings(productIds)) {
      reject(new Error(inAppPurchase.utils.errors[101]));
    } else {
      nativeCall('init', []).then(() => {
        return nativeCall('getSkuDetails', productIds);
      })
      .then((items) => {
        const arr = items.map((val) => {
          return {
            productId   : val.productId,
            title       : val.title,
            description : val.description,
            price       : val.price,
          };
        });
        resolve(arr);
      }).catch(reject);
    }
  });
};

const executePaymentOfType = (type, productId, oldProductIds = null) => {
  return new Promise((resolve, reject) => {
    if (!inAppPurchase.utils.validString(productId)) {
      reject(new Error(inAppPurchase.utils.errors[102]));
    } else if(oldProductIds != null && !inAppPurchase.utils.validArrayOfStrings(oldProductIds)) {
      reject(new Error(inAppPurchase.utils.errors[101]));
    } else {
      nativeCall(type, [productId, oldProductIds]).then((res) => {
        resolve({
          signature: res.signature,
          productId: res.productId,
          transactionId: res.purchaseToken,
          type : res.type,
          productType : res.type,
          receipt : res.receipt,
        });
      }).catch(reject);
    }
  });
};

inAppPurchase.buy = (productId) => {
  return executePaymentOfType('buy', productId);
};

inAppPurchase.subscribe = (productId, oldProductIds) => {
  return executePaymentOfType('subscribe', productId, oldProductIds);
};

inAppPurchase.consume = (type, receipt, signature) => {
  return new Promise((resolve, reject) => {
    if(!inAppPurchase.utils.validString(type)) {
      reject(new Error(inAppPurchase.utils.errors[103]));
    } else if (!inAppPurchase.utils.validString(receipt)) {
      reject(new Error(inAppPurchase.utils.errors[104]));
    } else if (!inAppPurchase.utils.validString(signature)) {
      reject(new Error(inAppPurchase.utils.errors[105]));
    } else {
      nativeCall('consumePurchase', [type, receipt, signature]).then(resolve).catch(reject);
    }
  });
};

inAppPurchase.restorePurchases = () => {
  return nativeCall('init', [])
    .then(() => {
      return nativeCall('restorePurchases', []);
    })
    .then((purchases) => {
      let arr = [];
      if (purchases) {
        arr = purchases.map((val) => {
          return {
            productId: val.productId,
            state : val.state,
            transactionId: val.orderId,
            date : val.date,
            type : val.type,
            productType : val.type,
            signature: val.signature,
            receipt : val.receipt,
          };
        });
      }
      return Promise.resolve(arr);
    });
};

inAppPurchase.getReceipt = () => {
  return Promise.resolve('');
};

module.exports = inAppPurchase;
