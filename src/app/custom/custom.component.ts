import { style } from '@angular/animations';
import { Component} from '@angular/core';

@Component(
{
selector: 'nikss-root',
template:`<div><p>{{names}}custom page having birthday on{{date}}</p></div>`,
styles:[`div{background-color:orange}`, `p{text-align:center;color:pink}`]




})


export class Piyu 
{

names='nikhil mutkules'
date='29th'
}