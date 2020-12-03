package test;

public class Queue {
	
	static final int MAX = 10;
    int top;
    int n =0;
    int a[] = new int[MAX]; // Maximum size of queue
    
    boolean isEmpty()
    {
        return (top < 0);
    }
    Queue()
    {
        top = -1;
    }
    boolean push(int x)
    {
        if (top >= (MAX - 1)) {
            System.out.println("Stack Overflow");
            return false;
        }
        else {
            a[++top] = x;
            System.out.println(x + " pushed into stack");
            return true;
        }
    }
    
    int pop()
    {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        else {
            int x = a[n++];
            //--top;
            return x;
        }
    }
    
    int peek()
    {
        if (top < 0) {
            System.out.println("Stack Underflow");
            return 0;
        }
        else {
            int x = a[this.n];
            return x;
        }
    }
    
    public void showall() {
    	
    	//System.out.println("n=>"+this.top);
    	while (this.n<=this.top) {
    		System.out.print(this.a[n]+" ");
    		this.n++;
    	}
    }
 
 
    

}
