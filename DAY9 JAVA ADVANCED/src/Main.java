//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
void main() {
    List<Integer> nums = Arrays.asList(3, 2, 10, 15, 8, 21, 14, 7);

    // 3️Define lambda rules
    NumberRule isEven = n -> n % 2 == 0;

    NumberRule isPrime = n -> {
        if (n < 2) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    };

//     4️Stream operations
    List<Integer> result = nums.stream()
            .filter(n -> isEven.apply(n) && isPrime.apply(n)) // even AND prime
            .map(n -> n * n)                                 // square each
            .collect(Collectors.toList());                   // collect results

    // 5️Optional: get first squared number
    Optional<Integer> firstSquared = result.stream().findFirst();

    // 6️Print result
    firstSquared.ifPresentOrElse(
            n -> System.out.println("First squared number: " + n),
            () -> System.out.println("No matching number found")
    );

    // Print full list for clarity
    System.out.println("Filtered & squared numbers: " + result);

}
