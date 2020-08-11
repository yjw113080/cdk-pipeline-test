#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkPipelineTestStack } from '../lib/cdk-pipeline-test-stack';

const app = new cdk.App();
new CdkPipelineTestStack(app, 'CdkPipelineTestStack');
