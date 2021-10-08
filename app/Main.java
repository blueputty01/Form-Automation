public class Main {
    private static FormHandler f;

    public static void main(String[] args) {
        f = new FormHandler();

        System.out.println("Welcome to the Google Form assistant");

        int o = InputHandler.promptOption("Fill out form", "Auto-Populate key");

        System.out.println();
        switch (o) {
        case 1:
            fillForm();
            break;
        case 2:
            formKey();
            break;
        default:
            break;
        }
        System.out.println("Thank you for using this assistant. Goodbye!");
    }

    private static void fillForm() {
        String k = InputHandler.promptStr("Please enter the key in integer form: ");
        pause(); 
        f.fillForm(k);
    }

    private static void formKey() {
        int o = InputHandler.promptOption("收获 (Copy-paste)", "AP Chinese (Manual)");
        String data = "";
        switch (o) {
            case 1:
                String s = InputHandler.promptStr("Please copy-paste your data: ");
                data = f.sanitize(s);
                System.out.println(data);
                data = f.alphaToIntKey(data);
                System.out.println(data);
                break;
            case 2:
                data = InputHandler.promptStr("Please copy-paste your integer-based key: ");
                System.out.println( f.intToAlphaKey(data) );
                break;
            default:
                break;
        }
        pause();
        f.fillKey(data);
    }
    private static void pause() {
        System.out.println();
        InputHandler.promptStr(
                "Press enter when you're ready. You will have five seconds to double click the first option on the form.");

        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            System.out.println("Error waiting.");
        }
    }
}