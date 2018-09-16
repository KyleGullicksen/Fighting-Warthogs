// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  console.log('chrome background listener is running...');

  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  console.log('the page has changed! and we REMOVED RULES');

  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({pageUrl: {hostEquals: 'horrible_poachers.com'},})
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }
  ]);
});
