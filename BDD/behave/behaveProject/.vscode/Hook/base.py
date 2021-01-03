from selenium import webdriver


def before_all(context):

    path='.vscode/driver/chromedriver'
    context.driver = webdriver.Chrome(path)
    url ='https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin'
    context.driver.get(url)

def after_all(context):
    context.driver.quite()
    context.driver.close()