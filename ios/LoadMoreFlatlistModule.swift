//
//  LoadMoreFlatlistModule.swift
//  LoadMoreFlatlistModule
//
//  Copyright © 2022 Vikram Kaldoke. All rights reserved.
//

import Foundation

@objc(LoadMoreFlatlistModule)
class LoadMoreFlatlistModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
