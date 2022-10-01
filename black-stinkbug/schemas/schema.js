// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schema
import property from './property'
import propertyImage from './propertyImage'
import review from './Review'
import traveller from './Traveller'
import host from './Host'
import person from './Person'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    property,
    propertyImage,
    review,
    traveller,
    host,
    person,
  ]),
})
