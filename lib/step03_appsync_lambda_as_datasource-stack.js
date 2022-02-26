"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step03AppsyncLambdaAsDatasourceStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const appsync = require("@aws-cdk/aws-appsync-alpha");
const lambda = require("aws-cdk-lib/aws-lambda");
// import { aws_appsync as appsync } from 'aws-cdk-lib';
class Step03AppsyncLambdaAsDatasourceStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //APPSYNC API gives you a graphql api with api key
        const api = new appsync.GraphqlApi(this, 'GRAPHQL_API', {
            name: 'my-first-appsync-api',
            schema: appsync.Schema.fromAsset('graphql/Schema.gql'),
            authorizationConfig: {
                defaultAuthorization: {
                    authorizationType: appsync.AuthorizationType.API_KEY,
                    apiKeyConfig: {
                        expires: aws_cdk_lib_1.Expiration.after(aws_cdk_lib_1.Duration.days(365)) //set expiration for API Key
                    }
                },
            },
            xrayEnabled: true,
        });
        //print graphql api url on console after deploy
        new aws_cdk_lib_1.CfnOutput(this, "ApiUrl", {
            value: api.graphqlUrl
        });
        //print graphql api key on console after deploy
        new aws_cdk_lib_1.CfnOutput(this, "ApiKey", {
            value: api.apiKey || ''
        });
        //Lambda Function
        const lambda_function_for_appsync = new lambda.Function(this, "LambdaFunction", {
            runtime: lambda.Runtime.NODEJS_12_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
            timeout: aws_cdk_lib_1.Duration.seconds(10)
        });
        //set lambda as a data source
        const lambdaDataSource = api.addLambdaDataSource("lambda-data-source", lambda_function_for_appsync);
        //Resolvers for notes and customNotes query
        lambdaDataSource.createResolver({
            typeName: "Query",
            fieldName: "notes"
        });
        lambdaDataSource.createResolver({
            typeName: "Query",
            fieldName: "customNote"
        });
    }
}
exports.Step03AppsyncLambdaAsDatasourceStack = Step03AppsyncLambdaAsDatasourceStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcDAzX2FwcHN5bmNfbGFtYmRhX2FzX2RhdGFzb3VyY2Utc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwMDNfYXBwc3luY19sYW1iZGFfYXNfZGF0YXNvdXJjZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBaUY7QUFFakYsc0RBQXFEO0FBQ3JELGlEQUFpRDtBQUVqRCx3REFBd0Q7QUFFeEQsTUFBYSxvQ0FBcUMsU0FBUSxtQkFBSztJQUM3RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLGtEQUFrRDtRQUNsRCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtZQUN0RCxJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztZQUN0RCxtQkFBbUIsRUFBRTtnQkFDbkIsb0JBQW9CLEVBQUU7b0JBQ3BCLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPO29CQUNwRCxZQUFZLEVBQUU7d0JBQ1osT0FBTyxFQUFFLHdCQUFVLENBQUMsS0FBSyxDQUFDLHNCQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQWUsNEJBQTRCO3FCQUN6RjtpQkFDRjthQUNGO1lBQ0QsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsK0NBQStDO1FBQy9DLElBQUksdUJBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQzVCLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVTtTQUN0QixDQUFDLENBQUE7UUFFRiwrQ0FBK0M7UUFDL0MsSUFBSSx1QkFBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDNUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRTtTQUN4QixDQUFDLENBQUE7UUFFRixpQkFBaUI7UUFDakIsTUFBTSwyQkFBMkIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQzlFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLGVBQWU7WUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyQyxPQUFPLEVBQUUsc0JBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzlCLENBQUMsQ0FBQztRQUVILDZCQUE2QjtRQUM3QixNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBRXBHLDJDQUEyQztRQUMzQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDOUIsUUFBUSxFQUFFLE9BQU87WUFDakIsU0FBUyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFBO1FBRUYsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1lBQzlCLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFNBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FBQTtJQUVKLENBQUM7Q0FDRjtBQXBERCxvRkFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZm5PdXRwdXQsIER1cmF0aW9uLCBFeHBpcmF0aW9uLCBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgYXBwc3luYyBmcm9tICdAYXdzLWNkay9hd3MtYXBwc3luYy1hbHBoYSdcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCB7IExhbWJkYSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1zZXMtYWN0aW9ucyc7XG4vLyBpbXBvcnQgeyBhd3NfYXBwc3luYyBhcyBhcHBzeW5jIH0gZnJvbSAnYXdzLWNkay1saWInO1xuXG5leHBvcnQgY2xhc3MgU3RlcDAzQXBwc3luY0xhbWJkYUFzRGF0YXNvdXJjZVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vQVBQU1lOQyBBUEkgZ2l2ZXMgeW91IGEgZ3JhcGhxbCBhcGkgd2l0aCBhcGkga2V5XG4gICAgY29uc3QgYXBpID0gbmV3IGFwcHN5bmMuR3JhcGhxbEFwaSh0aGlzLCAnR1JBUEhRTF9BUEknLCB7XG4gICAgICBuYW1lOiAnbXktZmlyc3QtYXBwc3luYy1hcGknLFxuICAgICAgc2NoZW1hOiBhcHBzeW5jLlNjaGVtYS5mcm9tQXNzZXQoJ2dyYXBocWwvU2NoZW1hLmdxbCcpLCAgICAgICAgICAgLy9wYXRoIG9mIHNjaGVtYVxuICAgICAgYXV0aG9yaXphdGlvbkNvbmZpZzoge1xuICAgICAgICBkZWZhdWx0QXV0aG9yaXphdGlvbjoge1xuICAgICAgICAgIGF1dGhvcml6YXRpb25UeXBlOiBhcHBzeW5jLkF1dGhvcml6YXRpb25UeXBlLkFQSV9LRVksICAgICAgICAgLy9kZWZpbmluZyBhdXRob3JpemF0aW9uIHR5cGVcbiAgICAgICAgICBhcGlLZXlDb25maWc6IHtcbiAgICAgICAgICAgIGV4cGlyZXM6IEV4cGlyYXRpb24uYWZ0ZXIoRHVyYXRpb24uZGF5cygzNjUpKSAgICAgICAgICAgICAgIC8vc2V0IGV4cGlyYXRpb24gZm9yIEFQSSBLZXlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgeHJheUVuYWJsZWQ6IHRydWUsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9FbmFibGVzIHhyYXkgZGVidWdnaW5nXG4gICAgfSk7XG5cbiAgICAvL3ByaW50IGdyYXBocWwgYXBpIHVybCBvbiBjb25zb2xlIGFmdGVyIGRlcGxveVxuICAgIG5ldyBDZm5PdXRwdXQodGhpcywgXCJBcGlVcmxcIiwge1xuICAgICAgdmFsdWU6IGFwaS5ncmFwaHFsVXJsXG4gICAgfSlcblxuICAgIC8vcHJpbnQgZ3JhcGhxbCBhcGkga2V5IG9uIGNvbnNvbGUgYWZ0ZXIgZGVwbG95XG4gICAgbmV3IENmbk91dHB1dCh0aGlzLCBcIkFwaUtleVwiLCB7XG4gICAgICB2YWx1ZTogYXBpLmFwaUtleSB8fCAnJ1xuICAgIH0pXG5cbiAgICAvL0xhbWJkYSBGdW5jdGlvblxuICAgIGNvbnN0IGxhbWJkYV9mdW5jdGlvbl9mb3JfYXBwc3luYyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJMYW1iZGFGdW5jdGlvblwiLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTJfWCxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy95aCBmaWxlIGxla2UgYW8gLSBhdXIgaXNrZSBhbmRhciBzYXJpIGxvZ2ljcyBobmdpIC1oYW5kbGVyIGthIGZ1bmN0aW9uIGJoaSBhbmRhciBoaSBoYWkgaXNrZSBcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhJyksICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pcyBmb2xkZXIgbWVpbiBoYWkgaGFuZGxlciBobWFyZSBwYXNzXG4gICAgICB0aW1lb3V0OiBEdXJhdGlvbi5zZWNvbmRzKDEwKVxuICAgIH0pO1xuXG4gICAgLy9zZXQgbGFtYmRhIGFzIGEgZGF0YSBzb3VyY2VcbiAgICBjb25zdCBsYW1iZGFEYXRhU291cmNlID0gYXBpLmFkZExhbWJkYURhdGFTb3VyY2UoXCJsYW1iZGEtZGF0YS1zb3VyY2VcIiwgbGFtYmRhX2Z1bmN0aW9uX2Zvcl9hcHBzeW5jKTtcblxuICAgIC8vUmVzb2x2ZXJzIGZvciBub3RlcyBhbmQgY3VzdG9tTm90ZXMgcXVlcnlcbiAgICBsYW1iZGFEYXRhU291cmNlLmNyZWF0ZVJlc29sdmVyKHtcbiAgICAgIHR5cGVOYW1lOiBcIlF1ZXJ5XCIsXG4gICAgICBmaWVsZE5hbWU6IFwibm90ZXNcIlxuICAgIH0pXG5cbiAgICBsYW1iZGFEYXRhU291cmNlLmNyZWF0ZVJlc29sdmVyKHtcbiAgICAgIHR5cGVOYW1lOiBcIlF1ZXJ5XCIsXG4gICAgICBmaWVsZE5hbWU6IFwiY3VzdG9tTm90ZVwiXG4gICAgfSlcblxuICB9XG59XG4iXX0=