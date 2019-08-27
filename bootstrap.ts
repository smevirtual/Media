/*!
 * Copyright (c) Alliedstrand Corporation. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at http://www.apache.org/licenses/LICENSE-2.0

 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 * WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.

 * See the Apache Version 2.0 License for specific language governing permissions
 * and limitations under the License.
 */

/**
 * Performs initial set-up tasks and sanity checks on the repository.
 */

import { exec } from 'child_process';
import * as hasbin from 'hasbin';

import { mainStory } from 'storyboard';
import 'storyboard-preset-console';

/**
 * Checks if the Git LFS binary is installed on the machine and warns the user if not.
 */
function checkGitLFSIsPresentSync() {
  if (hasbin.sync('git-lfs')) {
    mainStory.info('Git LFS is available on your system.');
  } else {
    mainStory.error(
      'Git LFS does not appear to be available on your system. Please install it. Git operations will not work without it.'
    );
    mainStory.error('See https://git-lfs.github.com');
    process.exit(1);
  }
}

/** Install Git LFS hooks on the Git repository. */
function installGitLFS() {
  exec('git lfs install', (err, stdout, stderr) => {
    if (err) {
      mainStory.error(`Failed to install Git LFS on repository: ${err}`);
      process.exit(1);
    }

    mainStory.info(`Installing Git LFS...`);
    mainStory.info(`${stdout}`);
  });
}

mainStory.info(
  'Hang on while we set up the project on your system and do some checks...'
);

checkGitLFSIsPresentSync();
installGitLFS();
