pipeline {
	
  agent any
  	environment{
      TESTRAIL_DOMAIN="cms2.testrail.io"
      TESTRAIL_USERNAME="ruchitha.mallipeddi@zemosolabs.com"
      TESTRAIL_APIKEY=credentials('TESTRAIL_APIKEY')
      TESTRAIL_PROJECTID=1 
      TESTRAIL_TITLE="Postman Testcases"
      TESTRAIL_SUITEID=1
    }
	stages {	
		
		stage('execute cypress tests') {
			
        steps {     
		catchError{
		dir("cypress-testcases/") {
		sh 'yarn install'
		sh 'yarn test:headless'                    
                }
                
	      }        
    	   } 
        }
        stage('execute junit tests') {
			
        steps {     
		catchError{
		dir("junit-testcases/testrail/") {
		sh './gradlew build'                  
                  }
                
		}   
    	   } 
        }
		
stage('execute postman tests') {
			
        steps {     
		catchError{
		
    sh 'newman run TestRail.postman_collection.json --reporters cli,testrail'
                
		}      
            } 
        }	
     }
	
	
}
