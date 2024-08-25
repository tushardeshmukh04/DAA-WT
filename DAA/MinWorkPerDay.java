package PracticalLab;

public class MinWorkPerDay {
    private static boolean canCompleteTasks(int[] tasks, int maxWorkPerDay, int D) {
        int daysRequired = 1;
        int currentWork = 0;

        for (int task : tasks) {
            if (task > maxWorkPerDay) {
                return false;
            }
            if (currentWork + task > maxWorkPerDay) {
                // Need a new day
                daysRequired++;
                currentWork = task; // Start new day with the current task
            } else {
                currentWork += task; // Continue working on the current day
            }
        }
        return daysRequired <= D;
    }

    public static int findMinWorkPerDay(int[] tasks, int D) {
        int low = 0;
        int high = 0;

        // Determine the range for binary search
        for (int task : tasks) {
            low = Math.max(low, task); // max task size
            high += task; // total work (if done in one day)
        }

        // Binary search for the minimum max work per day
        while (low < high) {
            int mid = low + (high - low) / 2;

            if (canCompleteTasks(tasks, mid, D)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }

    public static void main(String[] args) {
        // Test cases
        int[] tasks1 = {3, 4, 7, 15};
        int D1 = 10;
        int[] tasks2 = {30, 20, 22, 4, 21};
        int D2 = 6;

        System.out.println("Minimum work per day for tasks1: " + findMinWorkPerDay(tasks1, D1));
        System.out.println("Minimum work per day for tasks2: " + findMinWorkPerDay(tasks2, D2));
    }
}
