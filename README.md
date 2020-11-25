# Project Name
> School Catalogue

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Code Examples](#code-examples)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
A JavaScript exercise using classes to create a school catalogue showing collection of teachers, levels and number of students

## Technologies
* JavaScript
* Git/GitHub

## Setup
To be executed in the console 

## Code Examples
Show examples of usage:
`class School {
    constructor(name, level, numOfStudents){
        this._name = name;
        this._level = level;
        this._numOfStudents = numOfStudents;      
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numOfStudents(){
        return this._numOfStudents;
    }
    set numOfStudents(newNum){
        if (typeof newNum === 'Number'){
            this._numOfStudents = newNum;
        } else {
            console.log('Invalid input: numOfStudents must be set to a Number');
        }
    }`


## Status
Project is: _finished_

## Inspiration
Created with Codecademy's Full Stack Engineer program 

## Contact
Created by TarrMarr(https://www.tarrynmarr.me) - feel free to contact me!
