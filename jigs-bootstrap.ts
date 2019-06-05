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

import * as fs from "fs";
import * as path from "path";
import * as hasbin from "hasbin";

import { mainStory } from "storyboard";
import "storyboard-preset-console";

const GIT_HOOKS_MODE =
  fs.constants.S_IRUSR |
  fs.constants.S_IWUSR |
  fs.constants.S_IXUSR |
  fs.constants.S_IRGRP |
  fs.constants.S_IROTH;

/**
 * Recursively walks down a start directory and sets each file found with the permissions provided.
 * @param startPath Directory to walk
 * @param mode File mode to set on each file found
 * @throws If the `startPath` parameter is not a directory
 */
function setFileModeInDir(startPath: string, mode: number) {
  if (!fs.existsSync(startPath)) {
    let error_message = `${startPath} is not a directory`;
    mainStory.error(error_message);
    throw new Error(error_message);
  }

  let files = fs.readdirSync(startPath);

  for (var i = 0; i < files.length; i++) {
    let filepath = path.join(startPath, files[i]);
    let stat = fs.lstatSync(filepath);

    if (stat.isDirectory()) {
      setFileModeInDir(filepath, mode);
    } else {
      fs.chmod(filepath, mode, error => {
        if (error) {
          mainStory.error(`Failed to set permissions: ${error}`);
        } else {
          mainStory.info(`Set permissions on ${filepath}`);
        }
      });
    }
  }
}

/**
 * Checks if the Git LFS binary is installed on the machine and warns the user if not.
 */
function checkGitLFSIsPresent() {
  if (hasbin.sync("git-lfs")) {
    mainStory.info("Git LFS is available on your system.");
  } else {
    mainStory.error(
      "Git LFS does not appear to be available on your system. Please install it. Git operations will not work without it."
    );
    mainStory.error("See https://git-lfs.github.com");
  }
}

mainStory.info(
  "Hang on while we set up the project on your system and do some checks..."
);

setFileModeInDir(path.join(__dirname, ".githooks"), GIT_HOOKS_MODE);
checkGitLFSIsPresent();
