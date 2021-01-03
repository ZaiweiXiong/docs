from selenium import webdriver


def before_all(context):

    print("before_all activated")
    path='.vscode/driver/chromedriver'
    context.driver = webdriver.Chrome(path)
    context.driver.get('http://www.seek.com')

def after_all(context):
   
    context.driver.close()
    context.driver.quit()
    print("after_all activated")