# mdn-count-descendants

A simple app to count the descendant pages for any MDN page.

The script takes an entered URL, fetches the JSON available for that doc tree at URL + $children (e.g. [https://developer.mozilla.org/en-US/docs/Tools$children](https://developer.mozilla.org/en-US/docs/Tools$children)), then recursively counts all the children of that page (and each descendant) as contained inside the "subpages" member for each page.

Each result is displayed inside a list item — you can do multiple counts and display them all simultaneously.

Note that non-MDN pages will not work, and the main MDN homepage won't work either, e.g. https://developer.mozilla.org, as it doesn't have $children JSON available.
