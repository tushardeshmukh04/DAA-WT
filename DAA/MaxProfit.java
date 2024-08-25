package PracticalLab;

public class MaxProfit {
    public static int maximizeProfit(int[] prices) {
        if (prices == null || prices.length < 2) {
            return 0;
        }
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int price : prices) {
            // Update the minimum price if the current price is lower
            if (price < minPrice) {
                minPrice = price;
            }
            // Calculate the profit if selling at the current price
            int profit = price - minPrice;
            // Update the maximum profit if the calculated profit is higher
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }

        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices1 = {2, 3, 5};
        int[] prices2 = {8, 5, 1};

        System.out.println("Maximum Profit for {2, 3, 5}: " + maximizeProfit(prices1));
        System.out.println("Maximum Profit for {8, 5, 1}: " + maximizeProfit(prices2));
    }
}

