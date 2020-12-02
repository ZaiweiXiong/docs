package test;
import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.annotations.DataProvider;


public class testSort {
	
	
	@Test (priority = 3, dataProvider = "test1")
	public void testBs(int[] arr) {
		
		
		for (int i=0;i<arr.length;i++) {
			
			for (int j=0;j<arr.length-i-1;j++) {
				
				if (arr[j]>arr[j+1]) {
					
					int temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1]=temp;
				}
			}
			
		}
		
		showAll(arr);
		Assert.assertSame("1", "1");

	}
	
	@Test (priority = 2)
	public void testsS() {
		
		int[] arr = {3,0,1};
		
		for (int i=0;i<arr.length-1;i++) {
			int min = i;
			for (int j=i+1;j<arr.length;j++) {
				
				  if (arr[j]<arr[min]) {
					  int temp = arr[min];
					  arr[min]=arr[j];
					  arr[j] = temp;
				  }
			}
			
		}
		
		showAll(arr);
		
	}
	
	@Test(priority = 1)
	
	public void testinsertS() {
		
		int[] arr = {3,0,1};
		
		for (int i=1;i<arr.length;i++) {
			int key = arr[i];
			int j=i-1;
			while (j>=0 && arr[j]>key) {
				arr[j+1]=arr[j];
				j--;
			}
			arr[j+1]=key;
		}
			showAll(arr);
	}
	
	@Test(priority = 1, dataProvider = "test1")

	
	public void testqs(int[] arr) {
		
		//int arr[] = {10, 7, 8, 9, 1, 5}; 
		sort(arr, 0,arr.length-1); 
		System.out.println("quick sorted array"); 
		showAll(arr);
	}
	
	public void  sort(int arr[], int low, int high) 
    { 
        if (low < high) 
        { 
            /* pi is partitioning index, arr[pi] is  
              now at right place */
            int pi = partition(arr, low, high); 
  
            // Recursively sort elements before 
            // partition and after partition 
            sort(arr, low, pi-1); 
            sort(arr, pi+1, high); 
        } 
    } 
	
	int partition(int arr[], int low, int high) 
    { 
        int pivot = arr[high];  
        int i = (low-1); // index of smaller element 
        for (int j=low; j<high; j++) 
        { 
            // If current element is smaller than the pivot 
            if (arr[j] < pivot) 
            { 
                i++; 
  
                // swap arr[i] and arr[j] 
                int temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
            } 
        } 
  
        // swap arr[i+1] and arr[high] (or pivot) 
        int temp = arr[i+1]; 
        arr[i+1] = arr[high]; 
        arr[high] = temp; 
  
        return i+1; 
    } 

	@DataProvider(name = "test1")
	public Object[][] createData1() {
		 return new Object[][] {
			 new Object[] {10, 7, 8, 9, 1, 5}
		 };
		}

	public void showAll(int [] arr) {
		
			for (int i=0;i<arr.length;i++) {
			
			System.out.print(arr[i]+" ");
		}
	}

}
