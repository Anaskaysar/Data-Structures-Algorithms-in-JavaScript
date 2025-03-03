class Node{
    constructor(value){
        this.value = value
        this.next = null 
    }
}

class LinkedList {
	constructor(value){
	    const newNode = new Node(value)
	    this.head = newNode
	    this.tail = this.head
	    this.length = 1
	}

    push(value) {
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }


        unshift(value){
        const newNode = new Node (value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
            
        }
        this.length++
        return this
    }
}

let myLinkedList1 = new LinkedList(11)
myLinkedList1.push(3)
myLinkedList1.push(23)
myLinkedList1.push(7)