// ==UserScript==
// @name DuckDuckGo Region Filter Toggle Shortcut
// @description A keyboard shortcut to toggle the region filter
// @namespace com.teddywing
// @match https://duckduckgo.com/*
// @run-at document-idle
// ==/UserScript==

// Copyright (c) 2018  Teddy Wing
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

var toggle = document.querySelector('.js-region-filter-switch');

document.addEventListener('keydown', function(e) {
	if (e.key === 'r' && e.ctrlKey) {
		toggle.click();
	}
});
