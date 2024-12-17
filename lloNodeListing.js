
class Node {
    constructor(value) {
        this.value = value;  
        this.next = null;    
    }
}


class LinkedList {
    constructor() {
        this.head = null;  
        this.size = 0;     
    }

    
    append(value) {
        let newNode = new Node(value); 

        
        if (this.head === null) {
            this.head = newNode;
        } else {
           
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            
            current.next = newNode;
        }
        
        this.size++;  
        this.print();  
    }

    
    print() {
        let current = this.head;  
        let result = "";
        
        
        while (current !== null) {
            result += current.value;  
            if (current.next !== null) {
                result += " -> "; 
            }
            current = current.next; 
        }
        
        console.log(result);  
    }
}


let linkedList = new LinkedList();

linkedList.append("Data Structures - Array");
linkedList.append("Variable Type - Integer");
linkedList.append("Sorting Algorithm - Bubble Sort");
