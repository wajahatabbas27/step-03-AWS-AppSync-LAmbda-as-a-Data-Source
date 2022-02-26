# appsync-alpha

Here i have used appsync-alpha in the stack as there are issues in the file.
importing it from:
import \* as appsync from '@aws-cdk/aws-appsync-alpha';

## lambda-Data-Source && Resolver

Set lambda as a datasource with the api as the api is providing only schema but the logic is there in the lambda function.
We are making this lambda data Source for the - Resolver

LambdaDataSource jo create kri hai hmne usse Resolver create kreinge hm apne pass

### Structure Revision

1- create Api using Appsync - graphql with the schema
2- create lambda function - which provides logic for the api
3- create Lambda-Data-Source - which combines the appsync api with the lambda function to create the resolver
4- create Resolver - from the lambda-data-source created above and then add the typeName : (Query/Mutation/Subscription) , fieldName : (the name of the query as used here are : notes/customNote)
