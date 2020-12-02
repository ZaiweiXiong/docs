package test;
import org.testng.annotations.Test;
import org.testng.annotations.DataProvider;

public class testSearch {
	
	@Test(dataProvider = "test1")
	public void testBs(int [] arr) {
		
		arr = ss(arr);
		showAll(arr);
		System.out.println();
		System.out.println("find it at loc=>"+bs(arr,10));
	}
	
	@Test
	public void testFindSameNumbers() {
		
		int [] arr = {1,0,1,12,10,0,10};
		arr = ss(arr);
		showAll(arr);
		
		for (int i=0;i<arr.length;i++) {
			
			for (int j=i+1;j<arr.length;j++) {
				
				  if (arr[j]==arr[i]) {
					  
					  System.out.println("same number local is "+j+" number is "+arr[j]);
				  }
			}
		}
		
		
	}
	
	public int bs(int []arr,int n) {
		
		int u=0;
		int end = arr.length-1;
		while(u<=end) {
			int mid = (u+end)/2;
			if (arr[mid]==n) {
				return mid;
			}else if (arr[mid]<n) {
				u=mid+1;
			}else {
				end=mid-1;
			}
		}
		
		return -1;
	}
	
	public int [] ss(int [] arr) {
		
		for (int i=0;i<arr.length-1;i++) {
			int min = i;
			for (int j=i+1;j<arr.length;j++) {
				if (arr[j]<arr[min]) {
					int temp = arr[min];
					arr[min] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		return arr;
	}
	
	public void showAll(int [] arr) {
		
		for (int i=0;i<arr.length;i++) {
			System.out.print(arr[i]+" ");
		}
		 System.out.println();
	}
	
	@DataProvider(name = "test1")
	public Object[][] createData1() {
		 return new Object[][] {
			 new Object[] {10, 7, 8, 9, 1, 5}
		 };
		}

}
