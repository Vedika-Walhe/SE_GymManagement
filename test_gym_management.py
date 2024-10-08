import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize WebDriver (Make sure to specify the correct path to your driver)
driver = webdriver.Chrome(executable_path='path/to/chromedriver')  # Adjust the path accordingly

try:
    # Test Member Registration
    driver.get('file:///path/to/member_registration.html')  # Adjust the path accordingly
    driver.find_element(By.ID, 'memberName').send_keys('Alice Smith')
    driver.find_element(By.ID, 'memberEmail').send_keys('alice.smith@example.com')
    driver.find_element(By.ID, 'memberPhone').send_keys('0987654321')
    driver.find_element(By.ID, 'memberDOB').send_keys('1995-01-01')
    driver.find_element(By.ID, 'member-form').submit()
    
    # Wait for confirmation message
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'confirmation'))
    )
    print("Member Registration Test Passed!")

    # Test Trainer Registration
    driver.get('file:///path/to/trainer_registration.html')  # Adjust the path accordingly
    driver.find_element(By.ID, 'trainerName').send_keys('John Doe')
    driver.find_element(By.ID, 'trainerEmail').send_keys('john.doe@example.com')
    driver.find_element(By.ID, 'trainerPhone').send_keys('1234567890')
    driver.find_element(By.ID, 'trainerSpecialty').send_keys('Strength Training')
    driver.find_element(By.ID, 'trainer-form').submit()
    
    # Wait for confirmation message
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'confirmation'))
    )
    print("Trainer Registration Test Passed!")

    # Test Assign Member to Training
    driver.get('file:///path/to/assign_member.html')  # Adjust the path accordingly
    driver.find_element(By.ID, 'memberSelect').send_keys('Alice')  # Choose a member
    driver.find_element(By.ID, 'trainerSelect').send_keys('John')  # Choose a trainer
    driver.find_element(By.ID, 'assign-form').submit()
    
    # Wait for confirmation message
    WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.ID, 'confirmation'))
    )
    print("Assign Member to Training Test Passed!")

finally:
    # Close the driver
    time.sleep(2)  # Pause to view the results before closing
    driver.quit()
