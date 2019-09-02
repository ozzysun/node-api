const { GraphQLObjectType, GraphQLSchema } = require('graphql')
const { getTypeConfig, getFieldConfig } = require('../../core/graphql/util')

const rootConfig = getTypeConfig('Query')
const helloData = require('./hello')
rootConfig.fields[helloData.name] = getFieldConfig(helloData.config)
const sampleData = require('./sample')
rootConfig.fields[sampleData.name] = getFieldConfig(sampleData.config)
const queryType = new GraphQLObjectType(rootConfig)
const schema = new GraphQLSchema({ query: queryType })
module.exports = schema

