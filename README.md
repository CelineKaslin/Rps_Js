# Rock-Paper-Scissor web application #

## Challenge - my approach ##

In the dedicated week that I have to learn *JavaScript* during makers bootcamp I was enrolled, following my process to learn a new language, I have decided to reproduce a previous project that I have done in an other programming language : Rps web app.<br/>
The app build is one player against the computer. With more time I will probably have build a possibility for 2 players to play against each other.
After having done some research about it, I have decided to use the popular *Jasmine* testing framework to build the program following the strict TDD process.<br/>
The design of the app in inexistent without any styling at all. If I will have more time, I will have style it using *Css*.<br/><br/>
The app is pretty basic, and the MVP I built is the following one :
- One user can play Rock Paper Scissors game against the computer.
- The user can choose one option between Rock, Paper and Scissors, by clicking on the button of it.
- As soon as the user have clicked on his weapon, the result of the game is automatically displayed.

![RPS_APP_SCREENSHOT](https://user-images.githubusercontent.com/43742795/52734622-9fedd880-2fbd-11e9-9261-2bfa727df181.png)

### Tech stack ###

* JavaScript
* Html
* Jasmine - testing framework

![RPS_JASMINE](https://user-images.githubusercontent.com/43742795/52734796-f9560780-2fbd-11e9-8e18-813852789724.png)

## How to use ##

1. clone the repo<br/>
Under the repo name click *clone or download*<br/>
Click on *use HTTPs*, copy the clone URL of the repo<br/>
In the terminal go on the working directory where you want the cloned directory to be<br/>
Use the `git clone` command and paste the clone URL then press enter :

```shell
$ git clone https://github.com/your-username/your-repositary.git
```

2. On your local machine go inside of the *Rps_Js* directory :

```shell
$ cd Rps_Js
```
3. You can see the different files by using the `ls` command :<br/>

```shell
$ ls
```

4. You can open the *.js* file that you want to read and change the code in your text editor or using `vim` :

```shell
$ vim wanted_exercise_file.js
```
Or you can just read the contains of it from the command line with `cat` :

```shell
$ cat wanted_exercise_file.js
```
## Run the tests ##

1. On your command line, from your root directory, type the `open SpecRunner.html` command :

```shell
$ open SpecRunner.html
```
This will open a page on your browser where will be displayed the tests (they are all passing)


## Run the app ##

1. On your command line, from your root directory, use the `pwd` command to see the path of your *html* file:

```shell
$ pwd
$ /Users/yourUsername/Desktop/directory-of-your-project/SimpleWebPage_Js
```

2. In your browser copy and past this path, and add at the end of it */index.html* <br/>
The page will be displayed on your browser.

3. If you use google chrome you can also open the page on your browser directly from your command line from your root directory, by using the command `open -a “Google Chrome” "index.html"` :

```shell
$ open -a “Google Chrome” index.html
```
The page will be opened on your browser.
