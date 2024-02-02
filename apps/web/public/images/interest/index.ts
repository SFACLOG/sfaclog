import frontend from './frontend.svg';
import backend from './backend.svg';
import machineLearning from './machinelearning.svg';
import cloudComputing from './cloudcomputing.svg';
import database from './database.svg';
import container from './container.svg';
import serverless from './serverless.svg';
import mobile from './mobile.svg';

interface InterestProposal {
  [key: string]: { [key: string]: string };
}

export const interestProposal: InterestProposal = {
  interest: {
    frontend,
    backend,
    machineLearning,
    cloudComputing,
    database,
    container,
    serverless,
    mobile,
  },
  proposal: {
    project: frontend,
    recruit: backend,
    opinion: machineLearning,
  },
};

export const intersts = Object.keys(interestProposal['interest']);
export const proposals = Object.keys(interestProposal['proposal']);
