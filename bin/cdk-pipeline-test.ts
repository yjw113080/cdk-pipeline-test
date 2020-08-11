#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelineTestStack } from '../lib/cdk-pipeline-test-stack';
import { DemoPipelineStack } from '../lib/pipeline-demo-stack';

const app = new cdk.App();
new CdkpipelineTestStack(app, 'CdkPipelineTestStack');
new DemoPipelineStack(app, 'cdk-pipeline-test');