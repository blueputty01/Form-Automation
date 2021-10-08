import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

public class FormHandler {
    private Robot r;

    public FormHandler() {
        try {
            r = new Robot();
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }

    public String alphaToIntKey(String s) {
        // converts ABCD based key to 1234 based
        s = s.replaceAll("[^a-zA-Z0-9]", "").toUpperCase();
        char[] ca = s.toCharArray();
        String r = "";
        for (char c : ca) {
            r += c - 'A' + 1;
        }
        return r;
    }

    public String intToAlphaKey(String s) {
        // output spreadsheet-ready key from answer key online
        String r = "";
        for (int i = 0; i < s.length(); i++) {
            r += Character.toString( (char)((s.charAt(i) - '1') + 'A') );
        }
        return r;
    }

    public String toSpreadsheet(String s) {
        String r = "";
        for (int i = 0; i < s.length(); i++) {
            r += s.charAt(i) + "	";
        }
        return r;
    }

    public String sanitize(String s) {
        // output spreadsheet-ready key from answer key online
        return s.replaceAll("\\d+\\. ", "	");
    }

    public void fillForm(String key) {
        // auto-fill form based on integer-based answer key
        // A: 1, B: 2, etc
        String[] k = key.split("");
        for (String c : k) {
            int i = Integer.parseInt(c);
            i--;
            if (i > 3) {
                if (i == 0) {
                    press(KeyEvent.VK_SPACE);
                } else {
                    right(i);
                }
            }
            press(KeyEvent.VK_TAB);
        }
    }

    public void fillKey(String key) {
        // auto-generate key based on integer-based answer key
        // A: 1, B: 2, etc
        String[] k = key.split("");
        for (String c : k) {
            int i = Integer.parseInt(c);
            i--;
            tab(i);
            press(KeyEvent.VK_SPACE);
            tab(4 - i);
            press(KeyEvent.VK_1);
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            tab(1);
        }
    }

    private void tab(int t) {
        for (int i = 0; i < t; i++) {
            press(KeyEvent.VK_TAB);
        }
    }

    private void right(int t) {
        for (int i = 0; i < t; i++) {
            press(KeyEvent.VK_RIGHT);
        }
    }

    private void press(int key) {
        r.keyPress(key);
        r.keyRelease(key);
    }
}