# yext-sites-starter-v1

The repo shows how Yext Sites could work with react.

## Pages

Each file in pages maps to a static page. This is react component. There are no props sent into this component.

## Templates

Each file in this folder represents a steam template. The default export
is a react component. The stream document is automatically passed into the
component so you can access all the properties.

In addition there are two special exports:

### `getPaths`

Inspired by next.js this specifies the URL structure of the pages. This is
a function the returns a string.

### `streamId`

This is the streamId.
