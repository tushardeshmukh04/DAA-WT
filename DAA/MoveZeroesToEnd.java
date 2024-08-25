package PracticalLab;

public class MoveZeroesToEnd {
        public static void moveZeroesToEnd(int[] arr) {
            int nonZeroIndex = 0;
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] != 0) {
                    int temp = arr[nonZeroIndex];
                    arr[nonZeroIndex] = arr[i];
                    arr[i] = temp;
                    nonZeroIndex++;
                }
            }
        }

        public static void main(String[] args) {
            int[] arr = {1, 2, 0, 4, 3, 0, 5, 0};

            System.out.println("Original array:");
            printArray(arr);

            moveZeroesToEnd(arr);

            System.out.println("Array after moving zeroes to the end:");
            printArray(arr);
        }
        private static void printArray(int[] arr) {
            for (int num : arr) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
    }
