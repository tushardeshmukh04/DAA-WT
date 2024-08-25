package PracticalLab;

public class SmallestNumberWithTrailingZeroes {
    public static int countTrailingZeroes(int x) {
        int count = 0;
        while (x >= 5) {
            x /= 5;
            count += x;
        }
        return count;
    }
    public static int findSmallestNumberWithAtLeastNZeroes(int n) {
        int low = 0;
        int high = 5 * n;
        int result = -1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int zeroes = countTrailingZeroes(mid);

            if (zeroes >= n) {
                result = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int n1 = 1;
        int n2 = 6;

        System.out.println("Smallest number with at least " + n1 + " trailing zeroes: " + findSmallestNumberWithAtLeastNZeroes(n1)); // Output: 5
        System.out.println("Smallest number with at least " + n2 + " trailing zeroes: " + findSmallestNumberWithAtLeastNZeroes(n2)); // Output: 25
    }
}

