# element-range

Create a selection range over the contents of an element.

## Usage

var elementRange = require('element-range');

// Get a range result
var result = elementRange(someElement);

// Browser-dependant range object (always the same unless IE)
result.range

// Create a selection from the range.
result.select();