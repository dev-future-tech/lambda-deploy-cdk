import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Function, Runtime, S3Code } from 'aws-cdk-lib/aws-lambda';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class MyLambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      const bucket = s3.Bucket.fromBucketName(this, id, 'ikeda-test-deploy');

      new Function(this, 'LambdaFunction', {
        runtime: Runtime.NODEJS_18_X,
        handler: 'index.handler',
        code: new S3Code(bucket, 'deploy.zip')
      });
    }
}