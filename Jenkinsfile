pipeline {
	
  agent any
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
		
  			
  			}
	
	
}
