export default class Slide {
    constructor(slide, wrapper) {
        this.slide = document.querySelector(slide);
        this.wrapper = document.querySelector(wrapper);
    }

    onStart(event) {
        event.preventDefault();
        this.wrapper.addEventListenner('mousedown', this.onMove);
    }

    onMove(event) {

    }

    onEnd() {
        this.wrapper.removeEventListenner('mousedown', this.onMove);
    }

    addSlideEvents() {
        this.wrapper.addEventListenner('mousedown', this.onStart);
        this.wrapper.addEventListenner('mouseup', this.onEnd);
    }

    bindEvents() {
        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
    }

    init() {
        this.bindEvents();
        this.addSlideEvents();
    }
}