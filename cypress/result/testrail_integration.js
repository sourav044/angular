var Testrail = require('testrail-api');
fs = require('fs');
var path = 'cypress/reports/cucumber-json';

projectId = 54
var testrail = new Testrail({
host: 'https://testrail.davidsystems.com/testrail/',
user: 'skumar@davidsystems.com',
password: 'Pass0815'
});

testRunID = "";

function read_filenames(){
    allReports = []    
    fs.readdirSync(path).forEach(filename => {  
       if (filename != undefined){
           allReports.push(filename);
       }
     });  
       
      return allReports;
}

function add_run(){
    testrail.addRun(projectId, {name : "amazon audio Scheduling", description:"Testing the amazon audio Scheduling App"}).then(function (result) {
        console.log(result.body['id']);  
        testRunID = result.body['id'];
        return result.body['id']      
      })
      .catch(function (error) {
        console.log(error.response);
        console.log(error.message);
      });
      
} 

function add_results(step_descriptions){      
  testrail.addResultsForCases(Number(testRunID), step_descriptions).then(function (result) {
            console.log('sent');     
          })
          .catch(function (error) {
            console.log(error.response);
            console.log(error.message);
          });
}

 

function report_description(jsObject)
{
    test_name  = jsObject[0]['elements'];    
    test_cases  = jsObject[0]['elements'];
   

    for (let i = 0; i < test_cases.length; i++ )
    {    
	process_capture = []; 
	custom_step_results = []    
        case_id = test_cases[i]['tags'][0]['name'].match(/\d+/g)[0];     
        c_steps = test_cases[i]['steps'];
        case_status = 1;
        for (let j = 0; j < c_steps.length; j++ )
        {           
           step_description =  c_steps[j]['keyword']  +" : "+  c_steps[j]['name'] ;
           step_result = c_steps[j]['result']['status'] == "passed"? 1: 5;
           if (step_result == 5){case_status  = 5}           
           custom_step_results.push({"content" : "Step " + j, "expected" : step_description , "actual" :step_description, "status_id" : step_result});           
        }
        process_capture.push({"case_id" : case_id, "status_id" : case_status, custom_step_results : custom_step_results}); 
	add_results(process_capture);
    }
    
} 

function testrail_custom_api(){   
    testRunID = add_run();
    files = read_filenames();
    setTimeout(()=>{   
        console.log(testRunID);
        for (let i = 0; i < files.length; i++){           
            let rawdata = fs.readFileSync(path +'/'+ files[i]);
            let jsObject = JSON.parse(rawdata);
            report_description(jsObject); 
        }
    
    },5000);    

    console.log('testrail_custom_api is called');
  }

testrail_custom_api();
