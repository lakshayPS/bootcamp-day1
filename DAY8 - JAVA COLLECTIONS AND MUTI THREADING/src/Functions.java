import javax.swing.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Functions {
    public char findFirstNonRepeatingChar(char[] array) {
        if(array.length == 0) return ' ';
        Map<Character, Integer> mp = new HashMap<>();

        for(int i = 0; i < array.length; i++) {
            char ch = array[i];
            mp.put(ch, mp.getOrDefault(ch, 0) + 1);
        }

        for(Character key: mp.keySet()) {
            if(mp.get(key) == 1) {
                return key;
            }
        }

        return ' ';
    }

    public int[] findIndices(int[] arr, int target) {
        if(arr.length == 0) {
            return new int[]{};
        }

        int[] res = new int[]{Integer.MAX_VALUE, Integer.MAX_VALUE};

        Map<Integer, Integer> mp = new HashMap<>();

        for(int i = 0; i < arr.length; i++) {
            int num = arr[i];

            if(mp.containsKey(target - num)) {
                res[0] = i;
                res[1] = mp.get(target - num);
                return res;
            } else {
                mp.put(num, i);
            }
        }

        return res[0] == Integer.MAX_VALUE? new int[]{}: res;
    }

    public ArrayList<Integer> mergeSortedList(ArrayList<Integer> list1, ArrayList<Integer> list2) {
        if(list1.size() == 0) return list2;
        if(list2.size() == 0) return list1;

        ArrayList<Integer> res = new ArrayList<>();
        int n = list1.size();
        int m = list2.size();
        int first = 0, second = 0;

        while(first < n && second < m) {
            int num1 = list1.get(first);
            int num2 = list2.get(second);

            if(num1 < num2) {
                if(res.size() == 0) {
                    res.add(num1);
                } else {
                    if(res.get(res.size() - 1) != num1) {
                        res.add(num1);
                    }
                }
                first++;
            } else {
                if(res.size() == 0) {
                    res.add(num2);
                } else {
                    if(res.get(res.size() - 1) != num2) {
                        res.add(num2);
                    }
                }
                second++;
            }
        }

        while(first != n) {
            res.add(list1.get(first));
            first++;
        }

        while(second != m) {
            res.add(list2.get(second));
            second++;
        }

        return res;
    }
}
