//this class prompts for and validates user inputs
import java.util.Scanner;

public class InputHandler {
    private static Scanner input = new Scanner(System.in);

    // prompt until valid int from user
    public static int nextInt() {
        String str = filterInt(input.nextLine());

        while (str.isEmpty()) { // check if no int exists in String
            System.out.print("Please enter a valid integer: ");
            str = filterInt(input.nextLine());
        }

        return Integer.parseInt(str); // to convert String to int for use in switch statement
    }

    // prompt until valid float from user
    public static float nextFloat() {
        String str = filterFloat(input.nextLine());

        while (str.isEmpty()) { // check if no int exists in String
            System.out.print("Please enter a valid float: ");
            str = filterFloat(input.nextLine());
        }

        return Float.parseFloat(str); // to convert String to int for use in switch statement
    }

    // get next String
    public static String next() {
        return input.nextLine();
    }

    // get next valid file name
    public static String nextFName() {
        String str = filterFName(input.nextLine());
        while (str.isEmpty()) { // check if no int exists in String
            System.out.print("Please enter a valid file name: ");
            str = filterFName(input.nextLine());
        }

        return str; // to convert String to int for use in switch statement
    }

    // get file name
    private static String filterFName(String str) {
        return str.replaceAll("[^\\w,\\s, \\.]", "");
    }

    // get integer portion from String
    private static String filterInt(String str) {
        return str.replaceAll("[^0123456789\\-]", ""); // regex
    }

    // get float portion from String
    private static String filterFloat(String str) {
        return str.replaceAll("[^\\.0123456789\\-]", ""); // regex
    }
    // prompts for specific data type
    public static String promptStr(String prompt) {
        System.out.print(prompt);
        return next();
    }
    public static int promptInt(String prompt) {
        System.out.print(prompt);
        return nextInt();
    }
    //Prompt user for option and validate user selection with range of options
    public static int promptOption(String... choices) {
        System.out.print("What would you like to do?");
        createPrompt(choices);
        int opt = InputHandler.nextInt();
        //make sure selection is in range
        while( !(opt > 0 & opt <= choices.length) ) {
            System.out.println("\r" + "Please select one of the provided options.");
            createPrompt(choices);
            opt = InputHandler.nextInt();
        }
        return opt;
    }
    private static void createPrompt(String... choices) {
        // print out all passed choices
        for (int i = 0; i < choices.length; i++) {
            if (choices[i] == null) continue;
            System.out.print(" | [" + (i + 1) + "] " + choices[i]);
        }
        System.out.print(" | : "); // finish prompt formatting
    }
}