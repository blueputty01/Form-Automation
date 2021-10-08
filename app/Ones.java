import java.awt.*;
import java.awt.event.KeyEvent;

public class Ones {
    public static Robot r;

    public static void main(String[] args) {
        try {
            Thread.sleep(300);
        } catch (InterruptedException e1) {
            e1.printStackTrace();
        }
        try {
            r = new Robot();
        } catch (AWTException e) {
            e.printStackTrace();
        }
        questions(4, 19);
    }

    private static void questions(int options, int len) {
        for (int i = 0; i < len; i++) {
            press(KeyEvent.VK_1);
            for (int j = 0; j < options + 1; j++) {
                press(KeyEvent.VK_TAB);
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private static void press(int key) {
        r.keyPress(key);
        r.keyRelease(key);
    }
}
