pipeline {
	
  agent any
  	stages {
		
		
		
		stage('build') {
			
        steps {                               
    				sh 'yarn install'	               
    				


		                
			} 
        }
		stage('run tests') {
			
        steps {                                          	               
    				sh 'yarn test:headless'

		                
			} 
        }
  			
  			}
	
	
}
