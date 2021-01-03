from behave import given,when,then,step
from selenium import webdriver
import time
# https://www.testaddict.space/behave-setup-and-teardown-test-hooks/
# https://chromedriver.chromium.org/getting-started
# https://www.selenium.dev/documentation/en/webdriver/waits/
# https://www.youtube.com/watch?v=iZKOGN9hc0w&list=PLUDwpEzHYYLsARXz1o3Ldt1FnvRbvlxsS&index=4
# execute 'behave' in command line or 'behave features/test.feature'

@given('we have behave installed')
def step_impl(context):

    context.driver.get('https://behave.readthedocs.io/en/latest/api.html#model-objects')
    
   
@when('we implement a test')
def step_impl_(context):
    
    context.driver.get('http://www.google.com')
    print('test')
    time.sleep(5)


@when('Enter username "{user}" and password "{password}"')

def step_impl_user(context,user,password):
    
    context.driver.get('http://www.google.com')
    search_box =  context.driver.find_element_by_name('q')
    search_box.send_keys(user)
    search_box.submit()
    time.sleep(5)

@then('behave will test it for us!')
def step_impl__(context):

    search_box =  context.driver.find_element_by_name('q')
    search_box.send_keys('ChromeDriver xiong')
    search_box.submit()
    print('test')

@then(u'user should login successfully')
def step_impl_successfully(context):
    text = 'test'
    assert text == 'test'
    print('successfully!')
    