import RPi.GPIO as GPIO
import time

LED_PIN = 14
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
GPIO.setup(LED_PIN, GPIO.OUT)

GPIO.output(LED_PIN, True)

# GPIO.cleanup()
