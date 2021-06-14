from selenium import webdriver
from selenium.webdriver.support.ui import Select
import unittest

DRIVER_PATH = "/home/slyk/selenium_drivers/chromedriver"
URL_PATH = "http://localhost:3000"


class TestAddCar(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome(DRIVER_PATH)

    def test_add_car_make(self):
        self.driver.get(URL_PATH)
        add_car_make_page = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tfoot/a/button")
        add_car_make_page.click()
        car_make_name_input = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/form/input[1]")
        car_make_abrv_input = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/form/input[2]")
        test_car_make_name = "Testno ime"
        test_car_make_abrv = "Test"
        car_make_name_input.send_keys(test_car_make_name)
        car_make_abrv_input.send_keys(test_car_make_abrv)
        save_car_make = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/button[1]/a")
        save_car_make.click()
        new_car_make_name = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tbody/tr[7]/td[1]")
        new_car_make_abrv = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tbody/tr[7]/td[2]")
        self.assertEqual(test_car_make_name, new_car_make_name.text, "Makes not same")
        self.assertEqual(test_car_make_abrv, new_car_make_abrv.text, "Makes not same")

    def test_add_car_model(self):
        self.driver.get(URL_PATH)
        car_models_page = self.driver.find_element_by_xpath("//*[@id='root']/div/div[1]/h4/div/nav/ul/a[2]/li")
        car_models_page.click()
        add_car_model = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tfoot/a/button")
        add_car_model.click()
        add_model_name = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/form/input[1]")
        add_model_fuel = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/form/input[2]")
        add_model_info = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/form/input[3]")
        test_model_name = "Testni model"
        test_model_fuel = "Electric"
        test_model_info = "Lorem ipsum"
        add_model_name.send_keys(test_model_name)
        add_model_fuel.send_keys(test_model_fuel)
        add_model_info.send_keys(test_model_info)
        drop_down = Select(self.driver.find_element_by_class_name("dropdown"))
        drop_down.select_by_visible_text("Rimac")
        save_car_model = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/button[1]/a")
        save_car_model.click()
        self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tfoot/td[2]/nav/ul/li[3]/button/a").click()
        new_car_model_name = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tbody/tr[5]/td[1]")
        new_car_model_fuel = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tbody/tr[5]/td[2]")
        new_car_model_info = self.driver.find_element_by_xpath("//*[@id='root']/div/div[2]/div/table/tbody/tr[5]/td[4]")
        self.assertEqual(test_model_name, new_car_model_name.text, "Model name not equal")
        self.assertEqual(test_model_fuel, new_car_model_fuel.text, "Model fuel not equal")
        self.assertEqual(test_model_info, new_car_model_info.text, "Model info not equal")

    def tearDown(self):
        self.driver.close()


if __name__ == "__main__":
    unittest.main()
