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

	get(index){  //get anything by index
		if(index <0 ||index >=this.length){
			return undefined 
		} else{
			let temp = this.head
			for(let i =0;i<index;i++){
				temp = temp.next
			}
			return temp
		}	
	}

    set(index, value){
		let temp = this.get(index)

		if(temp){
			temp.value = value
			return true
		}
		return false
	}
	}


let myLinkedList1 = new LinkedList(11)
myLinkedList1.push(3)
myLinkedList1.push(23)
myLinkedList1.push(7)