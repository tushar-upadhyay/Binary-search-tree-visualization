class Node {
    constructor(data,x,y){
    this.left= null;
    this.right = null;
    this.data = data;
    this.x =x;
    this.y =y;

  }
  show(x,y){
  
    fill('red');
    stroke(255,0,0);
    ellipseMode(CENTER)
    textSize(20)
      textAlign(CENTER);
     var data = get(this.x+2,this.y-2)[0]
      if(data!=0){
        ellipse(this.x+40,this.y+15,30)
        if(x && y){
          line(this.x+40,this.y+15,x,y)
        }
        fill(255)
        text(this.data,this.x+40,this.y+15)
        this.x +=40;
        this.y+=10;
      }
      else{
        ellipse(this.x,this.y,30)
        if(x && y){
          line(this.x,this.y,x,y)
        }
        fill(255)
      text(this.data,this.x,this.y);
      }
       
  } 
  }
class Tree {
    constructor(data){
      this.root = null;
      this.y= 0;
      this.x = 0;
      this.ys = [30]
      this.level = 1;
    }
    Insert(pNode,node){
        if(node.data ==pNode.data || node.data==null){
          alert('Duplicate Nodes are not permitted')
          return 
        }
        if(node.data>pNode.data){
            if(pNode.right==null){
              node.x = pNode.x+60;
              node.y = pNode.y +80;
              pNode.right = node;
              node.show(pNode.x,pNode.y)
              return 
            }
            else{
              this.Insert(pNode.right,node);
              return 
            }
            // else{
            //   alert('Duplicate Nodes are not allowed')
            //   return 
            // }
          }
          else{
            
            if(pNode.left==null){
              node.x = pNode.x-60;
              node.y = pNode.y +80;
              node.show(pNode.x,pNode.y)
                pNode.left = node;
                return 
            }
            else{
              this.Insert(pNode.left,node);
            }

          }
         this.ys.push(node.y)
        }
    
    addData(data){
        if(data){
        var node = new Node(data);
        this.lastNode = node;
        if(this.root==null){
          node.x = width/2;
          node.y = 80;
          node.show()
          this.root  = node;
          return  
        }
        var pNode = this.root;
        this.Insert(pNode,node);
      }
      else{
        alert('enter data')
      }
     }
     remove(){
       this.removeNode(this.root)
     }
     removeNode(node){
       if(node.left==this.lastNode){
        node = null;
         return
       }
       else{
        this.removeNode(node.left);
       }
       if(node.right!=this.lastNode){
        node =null;
         return
       }
       else{
        this.removeNode(node.right);
       }
     }
     show(){
       var queue = new Queqe();
       var tempNode = this.root;
       ellipse(this.x,this.y,40)
       queue.add(tempNode)
       while(queue.front){
        var front = queue.front.data;
         if(front.left && front.right){
          this.level++;
           ellipse(this.x-40*this.level,this.y+40*this.level,40);
           ellipse(this.x+40*this.level,this.y+40*this.level,40)
          //  console.log(this.x)
          //  console.log(front.right.data)
           queue.add(front.left)
           queue.add(front.right)
           queue.remove()
         }
         else if(front.right && !front.left){
          //  console.log(front.right.data)
           queue.add(front.right)
           queue.remove()
         }
         else if(front.right==null && front.left){
              // console.log(front.left.data)
              queue.add(front.left)
          queue.remove()
         }
         else{
           if(this.level>0){
           this.level--;
           }
           queue.remove()
         }
       }
       console.log(queue)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
     }
     
   }
