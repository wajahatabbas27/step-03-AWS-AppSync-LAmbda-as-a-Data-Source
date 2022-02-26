import { CfnOutput, Duration, Expiration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as appsync from '@aws-cdk/aws-appsync-alpha'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Lambda } from 'aws-cdk-lib/aws-ses-actions';
// import { aws_appsync as appsync } from 'aws-cdk-lib';

export class Step03AppsyncLambdaAsDatasourceStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //APPSYNC API gives you a graphql api with api key
    const api = new appsync.GraphqlApi(this, 'GRAPHQL_API', {
      name: 'my-first-appsync-api',
      schema: appsync.Schema.fromAsset('graphql/Schema.gql'),           //path of schema
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,         //defining authorization type
          apiKeyConfig: {
            expires: Expiration.after(Duration.days(365))               //set expiration for API Key
          }
        },
      },
      xrayEnabled: true,                                                //Enables xray debugging
    });

    //print graphql api url on console after deploy
    new CfnOutput(this, "ApiUrl", {
      value: api.graphqlUrl
    })

    //print graphql api key on console after deploy
    new CfnOutput(this, "ApiKey", {
      value: api.apiKey || ''
    })

    //Lambda Function
    const lambda_function_for_appsync = new lambda.Function(this, "LambdaFunction", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',                                        //yh file leke ao - aur iske andar sari logics hngi -handler ka function bhi andar hi hai iske 
      code: lambda.Code.fromAsset('lambda'),                           //is folder mein hai handler hmare pass
      timeout: Duration.seconds(10)
    });

    //set lambda as a data source
    const lambdaDataSource = api.addLambdaDataSource("lambda-data-source", lambda_function_for_appsync);

    //Resolvers for notes and customNotes query
    lambdaDataSource.createResolver({
      typeName: "Query",
      fieldName: "notes"
    })

    lambdaDataSource.createResolver({
      typeName: "Query",
      fieldName: "customNote"
    })

  }
}
