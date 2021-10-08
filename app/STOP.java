import java.awt.*;
import java.awt.event.KeyEvent;

public class STOP {
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
        r.mouseMove(1750, 540);
        for (int i = 0; i < 126; i++) {
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e1) {
                e1.printStackTrace();
            }
            r.mousePress(KeyEvent.BUTTON1_DOWN_MASK);
            r.mouseRelease(KeyEvent.BUTTON1_DOWN_MASK);
        }
    }
}
