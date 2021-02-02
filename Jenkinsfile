pipeline {
	
  agent any
  	environment{
      TESTRAIL_DOMAIN=cms2.testrail.io
      TESTRAIL_USERNAME=ruchitha.mallipeddi@zemosolabs.com
      TESTRAIL_APIKEY=aq8SD7tpup0F5ef5B5Iv-GT7/ChhkJ7JTo6Xb3vgn
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
		sh 'npm install -g newman-reporter-testrail'
    sh 'install -g newman'
    sh 'newman run TestRail.postman_collection.json --reporters cli,testrail'
                
		}	          
    				


		                
      } 
        }










		
  			
  			}
	
	
}
