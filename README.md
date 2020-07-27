# Workshop TestCafe

Welcome, the target of this workshop is to develop the necessary knowledge to automate E2E user interface (UI) tests using [TestCafe](https://devexpress.github.io/testcafe/). We will do practical exercises, you will understand the use of the framework to create a successful automation project. We will explain how to create a project from the begining, how to start using testcafe, and the use of Github and Gitflow for the delivery of a software product.

To make this workshop without problems the student is required to have a little knowledge in the following topics:

* Git (You can go to this [link](https://github.github.com/training-kit/) to see the most used commands)
* Javascript/Typescript (basic knowledge)

### Table of Contents

1. [Initial project setup](#1-initial-project-setup)
1. [Adding HTML report](#1-initial-project-setup)


### 1. Initial project setup

**Description**: We are going to configure our project with [TypeScript](https://www.typescriptlang.org/) and [TestCafé](https://devexpress.github.io/testcafe/) framework, and we are going to do a test on the [Google](https://www.google.com/) page. Additionaly we will create the necessary configuration for [Github](https://help.github.com/) repository.

**Note:** If you don't have knowledge about [Github](https://help.github.com/) we recommend doing the [Github guide](https://guides.github.com/activities/hello-world/) or the [Github Introduction](https://lab.github.com/githubtraining/introduction-to-github)

1. Create an account on Github if you don't already have it (If you already have an account created that can be useful)
1. Create an empty Github repository with the name “**testcafe-workshop-2020**”
1. Create a folder on you computer named `testcafe-workshop-2020` and open a console (cmd/bash) located in that folder you created 
1. Follow the instructions below to make the first commit (use the ones that appear on the github page)

    ``` shell
    echo "# testcafe-workshop-2020" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:<su-usuario>/testcafe-workshop-2020.git
    git push -u origin master
    ```

1. In the configuration of the Github repository in the branches option you must protect the Master branch configuring that the pull requests require to be reviewed before merging and that it requires the state check before merging
1. In the collaborators menu add:
   * [srodriguezg](https://github.com/srodriguezg)

1. [Install JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) on your computer if you don't have it installed
1. [Install NodeJS](https://nodejs.org/es/download/package-manager/) on your computer if you don't have it installed. **Note:** We recommend using an equal or higher version of NodeJS 10 and NPM 6
1. Create a new branch in you repository named **project-setup**

    ``` bash
    git checkout -b project-setup
    ```

1. Create the .editorconfig file at the root of the project with the following information:

    ```properties
    root = true

    [*]
    indent_style = space
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    indent_size = 2

    [*.md]
    indent_size = 4
    trim_trailing_whitespace = false
    ```

1. Install the Visual Studio Code extension named `EditorConfig for VS Code` (This requires restarting the IDE)
1. Run in a console `npm init` inside the path where the repository is located and put the following information:

   | Parameter          | Value                                           |
   | ------------------ | ----------                                      |
   | **Name**           | workshop-testcafe                               |
   | **Version**        | _[Default]_                                     |
   | **Description**    | This is a Workshop about TestCafe               |
   | **Entry Point**    | _[Default]_                                     |
   | **Test Command**   | `testcafe chrome test.ts`                       |
   | **Git Repository** | _[Default]_                                     |
   | **Keywords**       | ui-testing, dojo, practice, testcafe, workshop  |
   | **Author**         | _[Your Name]_ <_[You email]_> (_[Your github]_) |
   | **License**        | MIT                                             |

1. Install testcafe dependency
  `npm install --save-dev testcafe`

1. Install Typescript development dependencies
  `npm install --save-dev typescript`

1. Install NodeJS types
  `npm install --save-dev @types/node`

1. Install Chai dependencies
  `npm install --save-dev chai`

1. Create a folder at the root of the project named **test** and inside the folder create a file named **google.ts**

   ``` ts
   import { Selector } from 'testcafe';
   import { expect } from 'chai';

   fixture `This is my first test using testcafe`
    .page `http://www.google.com`;

   test('should have a title', async t => {
     expect(await Selector("title").innerText).to.equal('Google');
   });
   ```


1. Modify the scripts inside the package.json with the following information:

    ``` json
    "test": "testcafe chrome test/google.ts --reporter spec"
    ```

1. In a console (Visual Studio Code terminal) execute `npm test` and check that the test passes successfully
1. Create new file named **.gitignore** at the root of the project. Go to web <https://www.gitignore.io/> and type in the text area the _SOS_, _IDE's_ and _NodeJS_, example _Windows Node VisualStudioCode_. Generate the file and copy it into the **.gitignore** file.
1. Create the file named **LICENSE** at the root of the project and add inside it the information of <https://en.wikipedia.org/wiki/MIT_License> (_Keep in mind to change the year and copyright holders_)
1. Create a folder named **.github** in the root of the project and inside the folder create a file named **CODEOWNERS** with the following information:

    ``` bash
    * @srodriguezg
    ```

1. Do a commit adding all the files created with the message "setup testcafe configuration" and upload the changes to the repository

    ```bash
    git add .
    git commit -m "setup testcafe configuration"
    git push origin project-setup
    ```

1. Create a pull request (PR), assign reviewers to it and wait for approval or comments from reviewers. If you don't know how to do this follow the [instructions](https://help.github.com/articles/creating-a-pull-request/)
1. As soon as it is approved, please merge to the master branch by selecting the option "squash and merge"

### 2. Adding HTML report

**Description**: We are going to use the [testcafe-reporter-html](https://www.npmjs.com/package/testcafe-reporter-html) dependency to add a report in HTML format and visualize our execution result better.

1. From the master branch create a new branch named **adding-html-report**
1. Install testcafe-reporter-html dependency
  `npm install --save-dev testcafe-reporter-html`
1. Modify the scripts inside the package.json with the following information:

    ``` json
    "test": "testcafe chrome test/google.ts --reporter spec,html:report/report.html"
    ```
**Note:** It is necessary to keep the **spec** in the report to be able to see in console the step by step of our test.

1. In a console (Visual Studio Code terminal) execute `npm test`, check that the test passes successfully and a folder named reports is created in the root of the project, look inside the report folder and report.html must be exist, abra esto es un navegador y verifique la información.
1. Do a commit adding all the files created with the message "adding html report" and upload the changes to the repository.
1. Create a pull request (PR), assign reviewers to it and wait for approval or comments from reviewers.
1. As soon as it is approved, please merge to the master branch by selecting the option "squash and merge"

