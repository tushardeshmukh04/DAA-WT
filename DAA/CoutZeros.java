package PracticalLab;

public class CoutZeros {
    public static int countZeros(int[] arr) {
        if (arr == null || arr.length == 0) {
            return 0;
        }
        int left = 0;
        int right = arr.length - 1;
        // Binary search to find the first occurrence of 0
        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == 0) {
                return arr.length - mid;
            } else if (arr[mid] > 0) {
                left = mid + 1;
            }
        }
        return 0;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 1, 1, 1, 0, 0};
        int[] arr2 = {1, 0, 0, 0,0};

        System.out.println("Number of zeros in arr1: " + countZeros(arr1));
        System.out.println("Number of zeros in arr2: " + countZeros(arr2));
    }
}
