// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#ff3030'}, function() {
    console.log("The color is firebrick1.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
              pageUrl: { urlEquals: 'https://www.ebay.com/bhp/real-turtle-shell' },
          }),
              new chrome.declarativeContent.PageStateMatcher({
                  pageUrl: { hostEquals: 'www.fursource.com' },
              }),
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
  });
});
