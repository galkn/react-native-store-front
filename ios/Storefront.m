#import "Storefront.h"
#import "ArtworkImageData.h"
#import <AVFoundation/AVFoundation.h>
#import <React/RCTUIManager.h>
#import <TagLibSwift/TLAudio.h>

@implementation Storefront

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(getStoreFront:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject) {
    if (@available(iOS 13.0, )) {
        SKStorefront skStoreFront = [SKPaymentQueue defaultQueue].storefront;
        if(skStoreFront != nil)
            resolve(skStoreFront.countryCode);
        else
            resolve(nil);
    } else {
        resolve(nil);
    }
}

@end
