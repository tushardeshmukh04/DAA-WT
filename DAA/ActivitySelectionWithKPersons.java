package PracticalLab;

import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class ActivitySelectionWithKPersons {
    static class Shop {
        int start;
        int end;

        Shop(int start, int end) {
            this.start = start;
            this.end = end;
        }
    }

    // Function to find the maximum number of shops that can be visited
    public static int maxShopsVisit(int[] start, int[] end, int K) {
        int N = start.length;
        Shop[] shops = new Shop[N];

        for (int i = 0; i < N; i++) {
            shops[i] = new Shop(start[i], end[i]);
        }

        Arrays.sort(shops, Comparator.comparingInt(s -> s.end));

        // Min-heap to track end times of the currently used shops by K persons
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        int count = 0;

        // Iterate through the sorted shops
        for (Shop shop : shops) {
            // Remove persons who are done with their current shop
            while (!minHeap.isEmpty() && minHeap.peek() < shop.start) {
                minHeap.poll();
            }

            // If we have fewer than K persons, we can visit this shop
            if (minHeap.size() < K) {
                minHeap.offer(shop.end);
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        int[] start1 = {1, 8, 3, 2, 6};
        int[] end1 = {5, 10, 6, 5, 9};
        int K1 = 2;
        System.out.println("Maximum number of shops that can be visited: " + maxShopsVisit(start1, end1, K1)); // Output: 4

        int[] start2 = {1, 2, 3};
        int[] end2 = {3, 4, 5};
        int K2 = 2;
        System.out.println("Maximum number of shops that can be visited: " + maxShopsVisit(start2, end2, K2)); // Output: 3
    }
}

