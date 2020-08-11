import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from "@aws-cdk/pipelines";

export class DemoPipelineStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
      super(scope, id, props);

      const sourceArtifact = new codepipeline.Artifact();
      const cloudAssemblyArtifact = new codepipeline.Artifact();

      const pipeline = new CdkPipeline(this, 'Pipeline', {
          pipelineName: 'cdkPipelineTest',
          cloudAssemblyArtifact,

          sourceAction: new codepipeline_actions.GitHubSourceAction({
              actionName: 'Github',
              output: sourceArtifact,
              oauthToken: SecretValue.secretsManager('github-token'),
              owner: 'Jiwon Yeom',
              repo: 'https://github.com/yjw113080/cdk-pipeline-test',
              trigger: codepipeline_actions.GitHubTrigger.POLL
          }),

          synthAction: SimpleSynthAction.standardNpmSynth({
              sourceArtifact,
              cloudAssemblyArtifact,
              buildCommand: 'npm run build'
          })
      })
    }
}
