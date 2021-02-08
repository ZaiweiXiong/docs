package run.ui;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import org.testng.annotations.DataProvider;


@CucumberOptions(features={"src//test//java//com//features"},
glue={"stepdefinations","base"},
plugin= {"pretty","html:target/cucumber",
		"json:target/cucumber.json",
		 "com.cucumber.listener.ExtentCucumberFormatter:target/report.html"},
tags ={"@bunn,@web"}  //@web,@nab,@bunn,@post,{"@web,@bunn"}
)

public class runUiTest extends AbstractTestNGCucumberTests{
	
//	@Override
//    @DataProvider(parallel = true)
//    public Object[][] scenarios() {
//        return super.scenarios();
//    }
	
//	@Override
//	@DataProvider (parallel = true)
//    public Object[][] features() {
//		System.out.println("====>"+super.features());
//        return super.features();
//    }
}
