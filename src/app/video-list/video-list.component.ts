import { Component, OnInit } from '@angular/core';

    @Component({
        selector: 'app-video-list',
        templateUrl: './video-list.component.html',
        styleUrls: ['./video-list.component.css']
    })
export class VideoListComponent implements OnInit {

    title = 'Video list title';
    // videoList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    videoList = [
        {
            name : 'Item 1',
            slug : 'item-1'
        },
        {
            name : 'Item 2',
            slug : 'item-2'
        },
        {
            name : 'Item 3',
            slug : 'item-3'
        },
        {
            name : 'Item 4',
            slug : 'item-4'
        },
        {
            name : 'Item 5',
            slug : 'item-5'
        }
    ];

    constructor() { }
    ngOnInit() {
    }

}
