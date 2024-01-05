#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { LamdbaDeployCdkStack } from '../lib/lamdba-deploy-cdk-stack';

const app = new cdk.App();
new LamdbaDeployCdkStack(app, 'LamdbaDeployCdkStack', {
  env: {
    account: '',
    region: 'us-east-1'
  }
});

app.synth();
