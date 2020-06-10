class Form{
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','100px');
        this.button.style('height','50px');
        this.button.style('background-color','lightpink')
    }
    display(){
        this.button.position(250,50)
    }
}