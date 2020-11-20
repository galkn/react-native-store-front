#import "StoreFront.h"

#import <StoreKit/StoreKit.h>

@implementation StoreFront

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getStoreFront:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    if (@available(iOS 13.0, *)) {
        SKStorefront* skStoreFront = [SKPaymentQueue defaultQueue].storefront;
        if(skStoreFront != nil)
            resolve(skStoreFront.countryCode);
        else
            resolve(nil);
    } else {
        resolve(nil);
    }
}

@end
