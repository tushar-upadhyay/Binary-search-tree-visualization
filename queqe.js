class Queqe{
    constructor(){
        this.front = null;
        this.rear = null;
    }
    add(x){
        var node =new qNode(x);
        if(this.front==null){
            this.front=node;
            this.rear = node;
            return
        }
        this.rear.next = node;
        this.rear = node;
    }
    remove(){
        if(this.front){
        var temp = this.front.next;
        this.front = temp;
        }
    }
    show(){
        var temp = this.front;
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next;
        }
    }
}